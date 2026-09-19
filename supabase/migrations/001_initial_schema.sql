-- QUANTORA PRODUCTION POSTGRESQL SCHEMA WITH RLS
-- Security Standard: OWASP ASVS Aligned & Role-Based Access Controls

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. USER ROLES ENUM
CREATE TYPE user_role_type AS ENUM ('guest', 'researcher', 'pro_researcher', 'admin');

-- 3. PROFILES & USER ROLES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    role user_role_type NOT NULL DEFAULT 'researcher',
    tier TEXT NOT NULL DEFAULT 'Pro',
    virtual_balance NUMERIC(15, 2) NOT NULL DEFAULT 100000.00,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

-- 4. ASSETS & MARKET DATA
CREATE TABLE IF NOT EXISTS public.assets (
    symbol TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- 'Equities', 'Crypto', 'Commodities'
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.market_candles (
    id BIGSERIAL PRIMARY KEY,
    symbol TEXT NOT NULL REFERENCES public.assets(symbol),
    timeframe TEXT NOT NULL, -- '1m', '5m', '1h', '1d'
    timestamp TIMESTAMPTZ NOT NULL,
    open NUMERIC(18, 6) NOT NULL,
    high NUMERIC(18, 6) NOT NULL,
    low NUMERIC(18, 6) NOT NULL,
    close NUMERIC(18, 6) NOT NULL,
    volume NUMERIC(24, 6) NOT NULL,
    source TEXT NOT NULL DEFAULT 'twelve_data',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(symbol, timeframe, timestamp)
);

CREATE INDEX IF NOT EXISTS idx_candles_symbol_time ON public.market_candles(symbol, timestamp DESC);

-- Public assets and candles readable by all authenticated and guest users
ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_candles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read assets" ON public.assets FOR SELECT USING (true);
CREATE POLICY "Public read candles" ON public.market_candles FOR SELECT USING (true);

-- 5. QUANTITATIVE STRATEGIES & VERSIONS
CREATE TABLE IF NOT EXISTS public.strategies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL DEFAULT 'Trend Following',
    target_asset TEXT NOT NULL,
    rules_dsl JSONB NOT NULL,
    risk_controls JSONB NOT NULL,
    is_public BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.strategies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own or public strategies"
    ON public.strategies FOR SELECT
    USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can insert own strategies"
    ON public.strategies FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own strategies"
    ON public.strategies FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own strategies"
    ON public.strategies FOR DELETE
    USING (auth.uid() = user_id);

-- 6. BACKTEST RUNS & RESULTS
CREATE TABLE IF NOT EXISTS public.backtests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    strategy_id UUID REFERENCES public.strategies(id) ON DELETE SET NULL,
    asset TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    initial_capital NUMERIC(15, 2) NOT NULL DEFAULT 100000.00,
    net_return_pct NUMERIC(8, 4) NOT NULL,
    cagr_pct NUMERIC(8, 4),
    annualized_vol_pct NUMERIC(8, 4) NOT NULL,
    sharpe_ratio NUMERIC(6, 3) NOT NULL,
    sortino_ratio NUMERIC(6, 3),
    max_drawdown_pct NUMERIC(8, 4) NOT NULL,
    win_rate_pct NUMERIC(6, 3) NOT NULL,
    profit_factor NUMERIC(6, 3),
    integrity_score INTEGER NOT NULL CHECK (integrity_score BETWEEN 0 AND 100),
    regime_breakdown JSONB,
    cost_waterfall JSONB,
    execution_trades JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.backtests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own backtests"
    ON public.backtests FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own backtests"
    ON public.backtests FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- 7. PAPER TRADING & ORDERS
CREATE TABLE IF NOT EXISTS public.paper_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    symbol TEXT NOT NULL,
    side TEXT NOT NULL CHECK (side IN ('BUY', 'SELL')),
    order_type TEXT NOT NULL CHECK (order_type IN ('MARKET', 'LIMIT', 'STOP')),
    quantity NUMERIC(18, 6) NOT NULL,
    price NUMERIC(18, 6) NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('FILLED', 'PENDING', 'CANCELLED')),
    filled_price NUMERIC(18, 6),
    fee NUMERIC(10, 4) NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.paper_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own paper orders"
    ON public.paper_orders FOR ALL
    USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.portfolio_positions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    symbol TEXT NOT NULL,
    side TEXT NOT NULL CHECK (side IN ('LONG', 'SHORT')),
    quantity NUMERIC(18, 6) NOT NULL,
    entry_price NUMERIC(18, 6) NOT NULL,
    current_price NUMERIC(18, 6) NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, symbol, side)
);

ALTER TABLE public.portfolio_positions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own positions"
    ON public.portfolio_positions FOR ALL
    USING (auth.uid() = user_id);

-- 8. AI COPILOT CONVERSATIONS & EVIDENCE-BOUND AUDIT LOGS
CREATE TABLE IF NOT EXISTS public.ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL DEFAULT 'Quant Research Discussion',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.ai_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID NOT NULL REFERENCES public.ai_conversations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    sender TEXT NOT NULL CHECK (sender IN ('user', 'copilot', 'tutor')),
    content TEXT NOT NULL,
    tool_call_name TEXT,
    tool_input JSONB,
    tool_output JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own AI conversations"
    ON public.ai_conversations FOR ALL
    USING (auth.uid() = user_id);

CREATE POLICY "Users manage own AI messages"
    ON public.ai_messages FOR ALL
    USING (auth.uid() = user_id);

-- 9. IMMUTABLE SECURITY & AUDIT LOGS
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    details TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'SUCCESS',
    ip_hash TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view audit logs"
    ON public.audit_logs FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Trigger for updated_at timestamps
CREATE OR REPLACE FUNCTION update_timestamp_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_modtime
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();

CREATE TRIGGER update_strategies_modtime
    BEFORE UPDATE ON public.strategies
    FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();
