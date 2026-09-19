quantexa-platform/
├── README.md
├── docker-compose.yml
├── requirements.txt
├── .env.example
│
├── data/
│   ├── raw/                        # Cached raw API responses (Yahoo, Binance, Fred)
│   └── processed/                  # Normalized parquet datasets with aligned timestamps
│
├── config/
│   ├── assets.yaml                 # Configuration for Gold, BTC, NVDA symbols & market hours
│   ├── indicators.yaml             # Default parameter ranges for SMA, EMA, Volatility
│   └── backtest.yaml               # Default initial capital, commission fees, slippage models
│
├── backend/
│   ├── main.py                     # FastAPI application entry point
│   │
│   ├── api/                        # REST API endpoints
│   │   ├── router.py               # Main router aggregator
│   │   ├── endpoints/
│   │   │   ├── assets.py           # Endpoints for price data & ticker search
│   │   │   ├── indicators.py       # Endpoints for SMA/EMA, Sharpe, Drawdown, Volatility
│   │   │   ├── correlation.py      # Endpoints for correlation matrix & rolling correlation
│   │   │   ├── backtest.py         # Endpoints for running backtests & strategy comparison
│   │   │   └── robustness.py       # Endpoints for parameter sweeps & regime classification
│   │
│   ├── data_engine/                # Data Ingestion & Engineering Layer
│   │   ├── collectors/             # Fetchers for equities, crypto, commodities
│   │   │   ├── base_collector.py
│   │   │   ├── yahoo_collector.py  # Equities (NVDA) & Commodities (Gold futures/ETFs)
│   │   │   └── crypto_collector.py # Crypto (BTC) with 24/7 calendar support
│   │   ├── normalizer.py           # Standardizes timezones, resamples, fills weekend gaps
│   │   └── pipeline.py             # Orchestrates ingestion pipeline to local parquet cache
│   │
│   ├── quant_engine/               # Vectorized & Streaming Indicator Logic
│   │   ├── moving_averages.py      # Vectorized SMA, EMA calculation using Pandas/NumPy
│   │   ├── returns.py              # Daily & cumulative returns calculation
│   │   ├── volatility.py           # Rolling & annualized volatility engine
│   │   ├── metrics.py              # Risk metrics: Sharpe ratio, Sortino, Max Drawdown
│   │   └── correlation.py          # Static correlation matrix & rolling correlation window
│   │
│   ├── backtester/                 # Strategy Execution & Simulation Engine
│   │   ├── execution.py            # Trade execution modeling (commissions, slippage, fill price)
│   │   ├── portfolio.py            # Cash tracking, position sizing, equity curve tracking
│   │   ├── benchmark.py            # Buy-and-hold benchmark evaluation engine
│   │   └── strategies/             # Predefined strategies implementation
│   │       ├── base_strategy.py
│   │       ├── sma_crossover.py    # SMA Crossover Strategy
│   │       ├── ema_trend.py        # EMA Trend Strategy
│   │       ├── momentum.py         # Cross-asset or time-series Momentum Strategy
│   │       └── mean_reversion.py   # Mean Reversion Strategy (RSI / Bollinger / Z-score)
│   │
│   ├── audit_engine/               # Guardrails & Robustness Analysis
│   │   ├── regime_detector.py      # Bull, Bear, High Volatility, Low Volatility classifiers
│   │   ├── parameter_sweep.py      # Grid search / sensitivity matrix generator
│   │   └── guardrails.py           # Look-ahead bias detector & data leakage auditor
│   │
│   └── tests/                      # Unit & integration tests
│       ├── test_indicators.py
│       ├── test_backtester.py
│       └── test_guardrails.py
│
└── frontend/                       # Interactive Dashboard (React + Vite)
    ├── package.json
    ├── vite.config.js
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   │
    │   ├── components/
    │   │   ├── common/             # Reusable UI components (Buttons, Cards, Tooltips)
    │   │   ├── charts/             # Recharts or Lightweight-Charts implementations
    │   │   │   ├── PriceChart.jsx           # Candlestick / Line with SMA & EMA overlays
    │   │   │   ├── EquityCurveChart.jsx     # Backtest vs Buy-and-Hold Benchmark
    │   │   │   ├── DrawdownChart.jsx        # Peak-to-trough decline visualization
    │   │   │   ├── CorrelationHeatmap.jsx   # Interactive cross-asset correlation matrix
    │   │   │   └── VolatilityChart.jsx      # Rolling returns & volatility windows
    │   │   ├── controls/           # User input forms
    │   │   │   ├── AssetSelector.jsx        # Dropdown for Gold, BTC, NVDA
    │   │   │   ├── StrategyConfig.jsx       # Parameter pickers (Fast/Slow MA periods)
    │   │   │   └── TradingParams.jsx        # Capital, fee, and slippage inputs
    │   │   └── analysis/
    │   │       ├── MetricsSummary.jsx       # Sharpe, Max DD, Win Rate summary cards
    │   │       ├── RobustnessMatrix.jsx     # Parameter sensitivity heatmaps
    │   │       └── RegimeBreakdown.jsx      # Performance split by Bull/Bear/Volatile market
    │   │
    │   ├── hooks/                  # Custom React hooks for API data fetching
    │   │   ├── useBacktest.js
    │   │   └── useMarketData.js
    │   │
    │   └── services/               # Axios API client setup
    │       └── api.js