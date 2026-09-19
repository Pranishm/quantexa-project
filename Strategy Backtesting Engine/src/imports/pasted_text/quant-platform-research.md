@"/Users/pranish/Downloads/QUAN134 Quant Platform Research & Build Plan.pdf" contine the work
I cloned all three GitHub repos, installed them, and started each app. All three boot fine (the Streamlit health check returns OK), and Isaac's test suite passes 113 out of 113.
My sandbox can't reach Yahoo Finance, so instead of live prices I tested each backtest engine on synthetic random-walk prices. On a random walk nobody can have a real edge, so a strategy that consistently makes money there is showing a bug, not skill. I also ran a "causal test" on every signal: recompute it using only the data up to that bar. If the signal changes, the backtest was using future prices (look-ahead bias).
1. Problems found in the existing repos
MaximeFARRE/Quantitative-Finance-Dashboard (no test suite)
* Look-ahead bias in the multi-asset module. app/quant_b/backtest.py applies today's signal to today's return. Across 30 random walks the multi-asset MA crossover showed a fake +4.5% per year. With a one-bar lag added, it dropped to −0.6%, which is the honest result.
* Wrong portfolio math. It adds up weighted log returns across assets, which is mathematically incorrect. In a simple two-day 50/50 example it ends at 0.9825 when the correct answer is 0.9900.
* "No rebalancing" isn't buy-and-hold. The weights are frozen instead of drifting with prices. On one test the app showed 92.5 against a true buy-and-hold value of 107.5.
* Short trade returns are doubled. Shorting at 100 and covering at 50 is reported as +100% instead of +50%. The equity curve itself is correct; only the trade table is wrong.
* Other gaps. There are no transaction costs, parameter optimisation is in-sample only, and 252 days per year is hardcoded, which is wrong for Bitcoin.
* Bloated install. requirements.txt pins torch, stable-baselines3, gymnasium and kagglehub. The code only imports pandas, numpy, streamlit, plotly and yfinance, so installing takes gigabytes instead of megabytes.
IsaacCheng9/quant-trading-strategy-backtester (the cleanest of the three)
* Its signals passed my causal test: 0 of 189 changed for both MA crossover and mean reversion, so there's no look-ahead.
* 252 days per year is hardcoded. For Bitcoin, which trades 365 days a year, volatility and Sharpe come out about 17% too low.
* There's no position sizing: it's always 100% in or 100% out.
* Costs are charged on the signal bar, but the position only starts on the next bar. It's a small timing mismatch.
* It only covers S&P 500 stocks, one asset or a pair at a time. There's no gold or crypto, no multi-asset portfolio and no correlation matrix.
* It requires exactly Python 3.13.
arthiondaena/Algo-Trading-Dashboard (no test suite)
* Look-ahead bias. Its swing and order-block logic reads future bars: it uses centered rolling windows, reverse rolling and shift(-2). It also computes these once on the full dataset through backtesting.py's self.I(). In my causal test, 32 of 35 structure-buy signals and 16 of 118 order-block signals could not have been known on the bar where they fired. Structure-sell signals passed.
* On random walks this didn't create fake profit (20 of 40 runs were positive). It does mean the reported trades couldn't have been taken live.
* The default commission is 0. Its strategies aren't the ones in your brief, and it reports no Sharpe ratio or correlation.
The pattern is clear: the usual failures are look-ahead bias and wrong annualisation or portfolio math. Your platform should prove on screen that it avoids both, which leads to the ideas below.
2. New ideas no existing tool has
1. Bias audit panel. Run the same causal test I used above on every strategy, plus a "lag test" that reruns with one extra bar of delay. Show a green "no look-ahead" badge when both pass.
2. Overfitting meter. Combine three things into one 0–100 robustness score: the Deflated Sharpe Ratio, how stable results are across the parameter heatmap, and walk-forward efficiency.
3. Cost break-even curve. Plot Sharpe against the fee level from 0 to 50 basis points, and mark where the strategy stops beating buy-and-hold.
4. Correlation-break alerts. Flag on the timeline when, for example, the BTC–NVDA 60-day correlation moves more than 2 standard deviations from its one-year norm.
5. Regime ribbon. Add a coloured band under the price chart for bull/bear × high/low volatility, with a stats table per regime. As a bonus, add HMM-detected regimes (the brief lists ML regime detection as future scope).
6. Replay mode, inspired by StrategyTune. Step through the backtest day by day and watch signals and equity appear with no future data.
7. Explain-this-trade. Clicking a buy/sell marker shows the indicator values at that bar and the rule that fired.
8. Monte Carlo band. Resample the strategy's daily returns in blocks 1,000 times and draw a 5–95% band around the equity curve. Monte Carlo is also in the brief's future scope.
3. Tech stack (versions checked today)
Layer	Choice	Why
Frontend	Next.js 16 + React 19 + TypeScript	Routing built in, one-click deploy on Vercel
UI	Tailwind CSS 4 + shadcn/ui	Fast, polished dark theme
Price charts	TradingView Lightweight Charts 5.2	Candles, SMA/EMA lines, buy/sell markers, equity curves
Other charts	Apache ECharts 6	Correlation and robustness heatmaps, regime bars
Data fetching	TanStack Query 5, Zustand 5	Caching, loading states, shared settings
API	FastAPI 0.141 + Pydantic 2 + Uvicorn	Python, so you use the quant libraries directly; auto-generated docs
Compute	pandas 3 + NumPy (Polars 1.44 if you need speed), statsmodels, hmmlearn	Indicators, statistics, HMM regimes
Data	yfinance 1.7 (GC=F, BTC-USD, NVDA) + DuckDB 1.5 over Parquet	Cached data, so the demo works offline
Tests	pytest	Includes the no-look-ahead test
Deploy	Vercel (web) + Render or Railway (API), Docker Compose locally	Free tiers are enough
4. File structure
quan134-quant-platform/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI app, CORS, routers
│   │   ├── config.py
│   │   ├── schemas.py           # Pydantic request/response models
│   │   ├── api/
│   │   │   ├── market.py        # /assets, /prices
│   │   │   ├── analytics.py     # /metrics, /correlation
│   │   │   ├── backtest.py      # /backtest, /robustness, /regimes
│   │   │   └── insights.py      # plain-English insight cards
│   │   ├── data/
│   │   │   ├── sources.py       # yfinance + CSV fallback
│   │   │   ├── cache.py         # Parquet + DuckDB
│   │   │   └── align.py         # calendars, 252 vs 365 factors
│   │   ├── quant/
│   │   │   ├── indicators.py    # SMA, EMA, returns, volatility
│   │   │   ├── risk.py          # Sharpe, Sortino, MDD, Calmar, VaR, PSR/DSR
│   │   │   ├── correlation.py   # matrix, rolling, break detection
│   │   │   └── regimes.py       # trend/vol regimes, HMM (bonus)
│   │   └── engine/
│   │       ├── strategies/      # base, sma_cross, ema_trend, momentum, mean_reversion
│   │       ├── sizing.py        # fixed %, vol target, half-Kelly
│   │       ├── costs.py         # fee + slippage (bps)
│   │       ├── simulator.py     # next-bar execution, portfolio, trade ledger
│   │       ├── benchmark.py     # buy-and-hold comparison
│   │       ├── robustness.py    # param grid, cost sweep, walk-forward
│   │       ├── montecarlo.py    # block bootstrap bands
│   │       └── bias_audit.py    # causal test + lag test
│   ├── tests/                   # test_no_lookahead, test_metrics, test_simulator
│   ├── data_cache/              # committed demo snapshot
│   └── pyproject.toml
├── frontend/
│   ├── app/
│   │   ├── page.tsx             # Overview
│   │   ├── asset/[symbol]/page.tsx
│   │   ├── correlations/page.tsx
│   │   ├── backtest/page.tsx
│   │   └── lab/page.tsx         # robustness, regimes, bias audit
│   ├── components/charts/       # PriceChart, EquityChart, Heatmap, RegimeRibbon
│   ├── components/ui/           # shadcn components
│   ├── lib/api.ts               # typed API client
│   └── package.json
├── docker-compose.yml
└── README.md
5. Algorithms and formulas
Let N be the number of trading periods per year: 252 for Gold and NVDA, 365 for BTC.
What	Formula	Note
Simple return	r_t = P_t / P_(t-1) − 1	Use this to combine assets
Log return	ℓ_t = ln(P_t / P_(t-1))	Single-asset statistics only
Cumulative return	Π(1 + r_t) − 1	
SMA	mean(P over last n bars)	
EMA	EMA_t = α·P_t + (1−α)·EMA_(t−1), α = 2/(n+1)	
Annualised volatility	std(r) · √N	
CAGR	(V_end / V_start)^(N / T) − 1	T = number of bars
Sharpe	(mean(r) − rf/N) / std(r) · √N	
Sortino	(mean(r) − rf/N) / √mean(min(r,0)²) · √N	Penalises only downside volatility
Drawdown / max drawdown	DD_t = V_t / max(V_s, s ≤ t) − 1, MDD = min(DD_t)	Also report drawdown duration
Calmar	CAGR / abs(MDD)	
Correlation	ρ = cov(r_a, r_b) / (σ_a·σ_b)	Rolling 60/90-day windows on common dates
Correlation break	z = (ρ_60 − mean_1y(ρ_60)) / std_1y(ρ_60)	Alert when abs(z) > 2
Beta	cov(r_s, r_b) / var(r_b)	
Momentum	P_t / P_(t−k) − 1	Long if > 0, e.g. k = 90
Mean reversion	z = (P_t − SMA_n) / σ_n	Enter long when z < −2, exit when z ≥ 0
Execution	position_t = signal_(t−1)	The core no-look-ahead rule
Costs	abs(Δposition) × notional × (fee + slippage) / 10,000	Charge on the execution bar
Portfolio return	R_t = Σ w_(i,t−1) · r_(i,t)	Fixes Maxime's log-sum bug
Weight drift	w_(i,t) = w_(i,t−1)·(1 + r_(i,t)) / (1 + R_t)	Real buy-and-hold between rebalances
Volatility-target sizing	w_t = min(w_max, σ_target / σ̂_t)	
Half-Kelly sizing	f = 0.5 · μ / σ²	Cap at 1
VaR / CVaR (95%)	VaR = −q_5%(r); CVaR = −mean of r where r ≤ q_5%	Historical method
Probabilistic Sharpe	Φ( (SR − SR*)·√(T−1) / √(1 − γ3·SR + (γ4−1)/4·SR²) )	SR per period; γ3 = skew, γ4 = kurtosis
Deflated Sharpe	PSR with SR* = √Var(SR_k) · ((1−γ)·Φ⁻¹(1−1/K) + γ·Φ⁻¹(1−1/(K·e)))	K = number of parameter sets tried; γ ≈ 0.5772
Regimes	Bull if P > SMA_200; high-vol if σ_30 > expanding median(σ_30)	Use an expanding median; a full-history median is itself look-ahead
Walk-forward efficiency	out-of-sample CAGR / in-sample CAGR	Above 0.5 is decent
6. Prompt for building it
Paste this together with the file structure above into your AI coding tool:
You are a senior quant developer and full-stack engineer. Build a Quantitative
Multi-Asset Financial Intelligence & Backtesting Platform for Gold (GC=F),
Bitcoin (BTC-USD) and NVIDIA (NVDA). Use the folder structure I provide.

STACK
Backend: Python 3.12, FastAPI, Pydantic v2, pandas + NumPy, yfinance, DuckDB
over a Parquet cache, pytest. Frontend: Next.js (App Router), React, TypeScript,
Tailwind, shadcn/ui, TradingView Lightweight Charts (prices, indicators, markers,
equity), Apache ECharts (heatmaps, bars), TanStack Query.

DATA
- Daily OHLCV from 2018 onward, cached to Parquet; commit a demo snapshot so
  the app works offline.
- Single-asset stats use each asset's own calendar (BTC N=365, Gold/NVDA N=252).
  Cross-asset work (correlation, portfolios) uses an inner join on common dates.
- Validate: sorted unique dates, no NaN closes, report gaps.

QUANT ENGINE
- Indicators: SMA, EMA, simple/log/cumulative returns, rolling + annualised
  volatility, rolling returns.
- Risk: Sharpe, Sortino, max drawdown + duration, Calmar, CAGR, historical
  VaR/CVaR 95%, beta, Probabilistic and Deflated Sharpe Ratio.
- Correlation: full matrix + 60/90-day rolling; flag breaks when rolling
  correlation is >2 std devs from its trailing 1-year mean.
- Strategies share one interface returning a target position in [-1, 1]:
  SMA crossover, EMA trend, momentum, mean reversion (z-score). Benchmark:
  buy-and-hold.

SIMULATOR RULES (write a pytest for each)
1. Signals use data up to bar t only; positions take effect at bar t+1.
   Never apply a weight to the same bar's return.
2. Inputs: initial capital, sizing (fixed %, volatility target, half-Kelly
   capped at 1), fee bps, slippage bps.
3. Cost = abs(change in position) x notional x (fee + slippage) / 10000,
   charged on the execution bar.
4. Portfolio return = sum of previous weights x simple returns; weights drift
   between rebalances. Never sum weighted log returns across assets.
5. Short trade return = (entry - exit) / entry.
6. Output: equity curve, positions, trade ledger, trade count, turnover,
   gross vs net returns.

ROBUSTNESS, REGIMES, BIAS AUDIT
- Parameter grid (short 5-50 x long 50-200) -> Sharpe heatmap; cost sweep
  0-50 bps -> break-even cost; custom date range; walk-forward (expanding
  train, 1-year test) with walk-forward efficiency.
- Regimes: bull/bear = close vs 200-day SMA; high/low vol = 30-day vol vs its
  expanding median. Strategy vs benchmark stats per regime.
- Bias audit: (a) recompute signals on data[:t+1] for sampled t and assert they
  equal the full-data signals; (b) rerun with an extra 1-bar lag and report the
  difference. Show pass/fail badges in the UI.
- Monte Carlo: block bootstrap of strategy returns, 1000 paths, 5-95% band.

API
GET /assets, GET /prices/{symbol}, GET /metrics, GET /correlation?window=,
POST /backtest, POST /robustness, GET /regimes, GET /insights

PAGES
1. Overview: price cards, base-100 comparison, metrics table, rule-based
   plain-English insight cards.
2. Asset: candles + SMA/EMA, returns histogram, rolling vol, drawdown.
3. Correlations: heatmap + rolling lines with break markers.
4. Backtest: controls, equity vs buy-and-hold with Monte Carlo band, buy/sell
   markers (click = explain the trade), trade table, metric comparison.
5. Lab: robustness heatmap, cost curve, walk-forward, regime ribbon + table,
   bias-audit badges, day-by-day replay mode.
Dark theme, responsive, loading/error states, and a visible disclaimer:
"Historical results are not a guarantee of future returns."

BUILD ORDER
data -> indicators/risk + tests -> simulator + no-look-ahead tests -> API ->
overview & asset pages -> backtest page -> correlations -> lab -> polish.
Run the tests after each step and show me the results before moving on.
A coding agent that can run the tests itself as it builds will make this prompt much more effective. Would you like me to also put this whole write-up into a doc your team can share?Claude Code can take the prompt above and build the backend and tests step by step in your own repo.