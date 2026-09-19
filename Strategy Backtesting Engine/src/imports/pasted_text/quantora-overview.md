1. THE FINAL PRODUCT
Core research loop
REAL-TIME / HISTORICAL MARKET DATA
              ↓
        MARKET X-RAY
              ↓
       CROSS-ASSET ANALYSIS
              ↓
          HYPOTHESIS
              ↓
        STRATEGY BUILDER
              ↓
           BACKTEST
              ↓
       MARKET REGIME ENGINE
              ↓
       STRATEGY AUTOPSY
              ↓
       ROBUSTNESS LAB
              ↓
     BACKTEST INTEGRITY CHECK
              ↓
       QUANTORA AI ANALYSIS
              ↓
       RESEARCH REPORT CARD

But Quantora has another loop:

LEARN
  ↓
PRACTICE
  ↓
PAPER TRADE
  ↓
PLAY SCENARIO
  ↓
ANALYZE PERFORMANCE
  ↓
IMPROVE STRATEGY
  ↓
RETEST

And the security loop:

LOGIN
 ↓
AUTHENTICATE
 ↓
AUTHORIZE
 ↓
ACTIVITY LOG
 ↓
RISK MONITOR
 ↓
AUDIT
 ↓
ALERT
2. FINAL PLATFORM PILLARS

I would structure the entire application around 8 pillars.

Pillar	Purpose
1. Intelligence	Understand markets
2. Quant Research	Build and test strategies
3. Diagnostics	Find why strategies succeed/fail
4. Forecast Lab	Research-based prediction models
5. Learn	AI-powered quantitative trading education
6. Simulate & Play	Paper trading + historical games
7. Assist	AI Copilot + Voice + Screen AI
8. Trust & Security	Authentication, activity, payments, audit, safety

This makes the product feel like one financial operating system, not a collection of dashboards.

3. LOGIN SYSTEM

Do not make login just:

Email
Password
Login

Make authentication part of the security story.

Supabase Auth supports password, magic link, OTP, social login and SSO, and can integrate authentication with PostgreSQL Row Level Security.

Authentication screens
/login
QUANTORA

Welcome back.

Email
[________________]

Password
[________________]

[ Sign In ]

Forgot password?

──────── OR ────────

[ Continue with Google ]

New to Quantora?
Create account
/signup

Fields:

Name
Email
Password
Confirm password
Country
Experience level
Beginner
Intermediate
Advanced
Quant Researcher

Then:

Choose your interests

☐ Stocks
☐ Crypto
☐ Gold
☐ Quantitative Trading
☐ AI
☐ Risk Management

This information personalizes Learn + Copilot.

4. ROLES

Don't use five complicated enterprise roles for the hackathon.

Use 5 clear roles.

Role 1 — User / Trader

Normal individual user.

Access
Market X-Ray
Markets
Research
Backtesting
Strategy Lab
Autopsy
Regimes
Robustness
Copilot
Forecast Lab
Learn
Paper Trading
Games
Voice AI
Screen AI
Reports
Feedback
Billing
Security Center
5. QUANT RESEARCHER

For advanced users.

Additional access
User
 +
Custom Strategies
 +
Dataset Upload
 +
Advanced Backtests
 +
Parameter Sweeps
 +
Robustness Lab
 +
Regime Configuration
 +
Research Reports
 +
Strategy Sharing
Permissions
create_strategy
run_backtest
run_robustness
upload_dataset
export_research
create_report
6. EDUCATOR / CONTENT CREATOR

For the Learn ecosystem.

Access
Create lessons
Create quizzes
Create trading scenarios
Create strategy tutorials
Publish educational content
Review learner analytics

Not necessary for the first demo, but useful in the architecture.

7. ORGANIZATION ADMIN

For future colleges, finance teams, research teams, companies.

Access
Users
Teams
Permissions
Workspace Settings
Usage
Billing
Security
Audit Logs
AI Usage
Data Connections

Can:

Invite users
Remove users
Assign roles
View workspace activity
Manage integrations
Manage subscription
Review security events
8. SUPER ADMIN

Platform owner.

Access
Platform Analytics
Users
Organizations
Revenue
Subscriptions
Data Providers
AI Providers
System Health
Security Events
Audit Logs
Support
Feedback
Feature Flags

Never expose Super Admin UI to normal users.

9. ROLE MATRIX
Feature	User	Quant	Educator	Org Admin	Super Admin
Markets	✓	✓	✓	✓	✓
Research	✓	✓	✓	✓	✓
Backtest	✓	✓	✓	✓	✓
Custom Strategy	—	✓	✓	—	✓
Parameter Sweep	—	✓	✓	—	✓
Forecast Lab	✓	✓	✓	✓	✓
Paper Trading	✓	✓	✓	✓	✓
Learn	✓	✓	✓	✓	✓
Create Lessons	—	—	✓	—	✓
AI Copilot	✓	✓	✓	✓	✓
Voice AI	✓	✓	✓	✓	✓
Screen AI	✓	✓	✓	✓	✓
Billing	✓	✓	—	✓	✓
Security Center	✓	✓	✓	✓	✓
Audit Logs	Own	Own	Own	Workspace	Global
User Management	—	—	—	✓	✓
Platform Management	—	—	—	—	✓
10. MAIN APPLICATION NAVIGATION

After login:

QUANTORA
────────────────────

INTELLIGENCE
  Overview
  Markets
  Cross-Asset
  Forecast Lab

RESEARCH
  Strategy Lab
  Backtests
  Autopsy
  Regimes
  Robustness
  Integrity
  Reports

SIMULATION
  Paper Trading
  Scenarios
  Arena

LEARN
  Academy
  AI Tutor
  Challenges
  Progress

ASSIST
  Quant Copilot
  Voice AI
  Screen AI
  Alerts

ACCOUNT
  Activity
  Connections
  Billing
  Security
  Feedback
11. OVERVIEW — MARKET X-RAY

This is the first screen after login.

Don't make it a boring dashboard.

Header
MARKET X-RAY
19 SEP 2026 · LIVE

Market status
Data connections
AI market pulse
Top cards
BTC
Bitcoin
$XX,XXX
+X.XX%

24H Volume
Volatility
Regime
NVDA
NVIDIA
$XXX.XX
+X.XX%

Volume
Volatility
Trend
GOLD
Gold
$X,XXX
+X.XX%

Volatility
Trend
Regime
12. MARKET PULSE

AI-generated summary based on actual retrieved metrics.

Example:

QUANTORA MARKET PULSE

BTC volatility has expanded over the last 20 sessions,
while NVDA remains in a higher-trend environment.

Cross-asset correlation has increased relative to its
60-day baseline.

Evidence:
• BTC 30D volatility: +X%
• NVDA 20D return: +X%
• BTC/NVDA correlation: X

The AI should not invent financial numbers.

13. "WHAT CHANGED?" — ONE OF OUR BEST FEATURES

Instead of only showing:

BTC +3.2%

show:

WHAT CHANGED?

BTC
Price       ↑
Volatility  ↑
Volume      ↑
Trend       ↑
Correlation ↑

What changed?
────────────────────
• 20D volatility moved above its 90D percentile
• Momentum strengthened
• Correlation with NVDA increased

Impact on strategies
────────────────────
Momentum → historically more sensitive
Mean Reversion → historically weaker

This is much more interesting than a normal market dashboard.

14. MARKETS
/markets

Three major assets:

BTC
NVDA
GOLD

Allow:

1D
1W
1M
3M
6M
1Y
3Y
5Y
MAX
15. ASSET DEEP DIVE

Click BTC:

BTC/USD

$XX,XXX
+X.XX%

[1D] [1W] [1M] [3M] [1Y] [5Y]

Candlestick chart
────────────────────
Price
SMA 20
SMA 50
EMA 20
EMA 50

Volume
────────────────────

Volatility
────────────────────

Drawdown
────────────────────

Regime
────────────────────

Correlation
────────────────────
16. REQUIRED QUANT ENGINE

Your original requirements remain the foundation.

Indicators
Moving averages
SMA
EMA
Returns
Daily return
Cumulative return
Log return
Risk
Annualized volatility
Sharpe
Sortino
Maximum drawdown
Calmar
VaR
CVaR

For the hackathon, prioritize:

SMA
EMA
Returns
Volatility
Sharpe
Max Drawdown
17. CROSS-ASSET RESEARCH
/research

Main visual:

          BTC     GOLD     NVDA

BTC       1.00    0.32     0.61
GOLD      0.32    1.00    -0.08
NVDA      0.61   -0.08      1.00

But make it interactive.

Hover:

BTC ↔️ NVDA

Correlation
0.61

60D
+0.14 vs previous period

Interpretation
Relationship strengthened.
18. RELATIONSHIP MAP

Innovative visualization:

                BTC
               /   \
          0.61/     \0.32
             /       \
          NVDA ───── GOLD
              -0.08

Node size = volatility.

Edge thickness = correlation.

Edge movement = changing correlation.

This creates a much better visual demo.

19. STRATEGY LAB
/strategies

Four default strategies:

1. SMA Crossover
Fast SMA = 20
Slow SMA = 50
2. EMA Trend
Fast EMA
Slow EMA
3. Momentum
Lookback
Threshold
4. Mean Reversion
Z-score
RSI
Bollinger
20. NO-CODE STRATEGY BUILDER

This comes from the friend blueprint and is worth keeping.

Example:

WHEN

SMA(20) crosses above SMA(50)

AND

Volatility < 80th percentile

THEN

BUY 50%

WHEN

SMA(20) crosses below SMA(50)

THEN

SELL

Visual block system:

[PRICE]
   ↓
[INDICATOR]
   ↓
[CONDITION]
   ↓
[ACTION]
21. BACKTEST CONFIGURATION
Asset
[ BTC ]

Strategy
[ SMA Crossover ]

Initial Capital
[$100,000]

Position Size
[25%]

Commission
[0.15%]

Slippage
[0.05%]

Execution
[Next Bar Open]

Benchmark
[Buy & Hold]

Period
[2020 → 2026]

[ RUN BACKTEST ]
22. REALISTIC EXECUTION

This is critical.

Don't simply calculate:

BUY at today's close

Use:

Signal generated
       ↓
Signal timestamp
       ↓
Execution delay
       ↓
Next available execution price
       ↓
Slippage
       ↓
Commission
       ↓
Position update

This directly addresses unrealistic backtesting.

23. BACKTEST RESULTS

After clicking Run:

Hero metric
TOTAL RETURN

+84.21%

Then:

CAGR
Sharpe
Sortino
Max Drawdown
Win Rate
Profit Factor
Trades
24. EQUITY CURVE
Strategy
────────────────────────

Buy & Hold
────────────────────────

Allow toggle:

Strategy
Benchmark
25. TRADE LOG
DATE        ACTION   PRICE     SIZE       P&L
------------------------------------------------
2024-01-04  BUY      $XX       25%        —
2024-03-12  SELL     $XX       25%       +$X
26. STRATEGY AUTOPSY

This should be one of Quantora's signature features.

Instead of:

Strategy returned 84%.

Quantora asks:

Why did it return 84%?

Autopsy
STRATEGY AUTOPSY

Performance
+84.21%

Where did the profit come from?
────────────────────────────────

Trend Regime      +52%
High Volatility   +21%
Sideways           +8%
Bear               +3%
27. PROFIT CONCENTRATION

Example:

PROFIT CONCENTRATION

Top 5 trades
████████████████ 61%

Remaining trades
██████████       39%

Then:

Observation

A large portion of total profit came from a
small number of trades.

This may make the strategy sensitive to
specific historical periods.

This is research analysis, not a prediction.

28. FEE DRAG ANALYSIS

Show:

Gross Return
+96.3%

Commission
-5.2%

Slippage
-6.9%

Net Return
+84.2%

Very visually powerful.

29. REGIME ENGINE

Classify:

BULL
BEAR
SIDEWAYS
HIGH VOLATILITY
LOW VOLATILITY

Timeline:

2020     2021     2022     2023     2024     2025
│────────│────────│────────│────────│────────│
 BULL      BULL      BEAR     BULL     SIDE     BULL
30. REGIME-CONDITIONED PERFORMANCE
REGIME              RETURN     SHARPE
──────────────────────────────────────
Bull                 +72%       1.82
Bear                  -8%       -0.41
High Vol              +21%       0.92
Low Vol                +6%       0.61
Sideways              -3%       -0.22

Now the user understands when the strategy breaks.

31. ROBUSTNESS LAB

Don't only test:

20 / 50

Test:

Fast MA:
10
15
20
25
30

Slow MA:
40
50
60
70
80

Generate matrix:

             Slow MA
          40   50   60   70   80

Fast 10   62   67   71   69   63
     15   70   76   79   75   69
     20   74   84   82   78   71
     25   71   80   81   77   70
     30   68   75   77   73   67

Then show:

Parameter Stability
██████████████░░

Performance is distributed across
neighboring parameter configurations.

Don't simply optimize for the highest cell.

32. INTEGRITY ENGINE

This is another signature feature.

Backtest Integrity
INTEGRITY CHECK

✓ Look-ahead bias
✓ Data alignment
✓ Execution lag
✓ Transaction costs
✓ Missing data
✓ Benchmark consistency
✓ Parameter sensitivity
✓ Train/test separation

Instead of pretending an integrity score is a scientific guarantee:

Research Integrity
88 / 100

8 checks passed
1 warning
0 critical issues

Then explain every score.

33. LOOK-AHEAD DETECTOR

Example:

SIGNAL

SMA(20) > SMA(50)

Signal timestamp:
10:00

Execution:
10:01+

✓ Signal uses only information available
before execution.

This is excellent for the cyber/technical judge.

34. DATA LINEAGE

New innovation:

"Where did this number come from?"

Click any metric.

Example:

Sharpe Ratio: 1.82

SOURCE
BTC historical OHLCV

DATA PROVIDER
Alpaca

TIME RANGE
2023-01-01 → 2026-09-19

FREQUENCY
1D

TRANSFORMATIONS
Timezone normalization
Missing-value handling
Return calculation
Annualization

CALCULATION
mean(return) / std(return)
× annualization factor

This makes Quantora feel trustworthy.

35. REAL-TIME DATA ARCHITECTURE

For live data, don't let the browser directly hold provider secrets.

Use:

MARKET DATA PROVIDER
        ↓
WebSocket
        ↓
Market Data Gateway
        ↓
Validation
        ↓
Normalization
        ↓
Redis / Event Stream
        ↓
Quant Engine
        ↓
WebSocket/SSE
        ↓
Quantora UI

Alpaca provides WebSocket streams for stocks, crypto, options and news, and its trading streams can provide trade/account/order updates.

For crypto specifically, its documentation provides WebSocket streams for trades, quotes, order books and bars.

36. DATA PROVIDER LAYER

Create:

backend/data_engine/providers/

alpaca_provider.py
yahoo_provider.py
fred_provider.py
binance_provider.py

Then:

BaseProvider
      ↓
┌─────┼────────┬─────────┐
Alpaca Yahoo   Binance   FRED

This means you can replace providers without rewriting the quant engine.

37. MARKET DATA FLOW
Historical
Frontend
 ↓
API
 ↓
Data Gateway
 ↓
Provider REST API
 ↓
Normalizer
 ↓
Parquet/Postgres
 ↓
Quant Engine
 ↓
Frontend
Live
Provider WebSocket
 ↓
Ingestion Worker
 ↓
Normalizer
 ↓
Redis
 ↓
Quant Engine
 ↓
WebSocket
 ↓
Frontend

Use REST for historical/initial loads and WebSocket for streaming.

38. PAPER TRADING

Do this instead of enabling real-money trading during the hackathon.

PAPER TRADING

Virtual Capital
$100,000

REAL-TIME MARKET DATA
        ↓
SIMULATED ORDER
        ↓
EXECUTION ENGINE
        ↓
PORTFOLIO
        ↓
P&L

Alpaca provides a paper-trading environment using real-time market data while simulating order fills rather than routing them to a live exchange.

39. PAPER ORDER TYPES

Support:

Market
Limit
Stop
Stop Limit

Show:

BUY BTC
Quantity
Order type
Estimated price
Estimated fees
Slippage assumption

[ CONFIRM PAPER ORDER ]
40. TRADING SAFETY MODEL

Create three modes:

RESEARCH
   ↓
PAPER
   ↓
LIVE

Live should be disabled by default.

If eventually implemented:

LIVE TRADING

⚠ Real money

MFA required
Broker connected
Risk checks passed

[ RE-AUTHENTICATE ]

[ PLACE ORDER ]

Never allow the AI to silently execute a live trade.

41. BROKER CONNECTION CENTER
/connections
CONNECTED SERVICES

Market Data
✓ Alpaca

Broker
○ Alpaca Paper

Crypto
○ Coinbase

Data
○ Yahoo Finance

[ Connect ]

For broker OAuth, the backend should handle authorization and token storage; Alpaca documents OAuth-based trading access.

42. AI FORECAST LAB

Call it:

Quantora Forecast Lab

Not:

"AI tells you tomorrow's price."

Instead:

FORECAST LAB

Asset
BTC

Horizon
7 days

Model
Regime + Momentum

Forecast
──────────────────

Expected range
$XX,XXX — $XX,XXX

Model confidence
XX%

Historical validation
XX%

Regime
High volatility
43. FORECAST MODELS

Architecture:

Baseline
 ├── Naive
 └── Moving Average

Statistical
 ├── ARIMA
 └── Exponential Smoothing

Machine Learning
 ├── Random Forest
 ├── XGBoost
 └── Gradient Boosting

Advanced
 ├── LSTM
 └── Transformer

For the hackathon, don't implement all.

Implement:

Baseline
+
Statistical/ML
+
Regime-aware model

Then clearly label:

Research forecast — not a guaranteed future price.

44. AI EXPLAINABILITY

Don't only show:

Prediction: +4.3%

Show:

WHY?

Top contributing signals

Momentum       ████████
Volatility     █████
Trend          ███████
Volume         ████
Correlation    ███

Then:

Model limitations

• Limited historical sample
• Regime changes may reduce reliability
• Forecast uncertainty increases with horizon
45. QUANT COPILOT

This should NOT be a generic ChatGPT window.

It should have tools.

Example:

User:

Why did my BTC SMA strategy fail in 2022?

Copilot executes:

get_backtest()
get_regimes()
get_trades()
get_drawdown()
get_volatility()

Then produces:

STRATEGY AUTOPSY

Your strategy underperformed primarily
during high-volatility bearish conditions.

Evidence:
• Max drawdown: XX%
• High-volatility return: -XX%
• XX% of losses occurred in...
46. AI TOOL SECURITY

Very important for cyber judges.

Never:

LLM → arbitrary database
LLM → arbitrary API
LLM → broker

Instead:

LLM
 ↓
Tool Allowlist
 ↓
Authorization
 ↓
Schema Validation
 ↓
Tool Execution
 ↓
Sanitized Result
 ↓
LLM

Tools:

get_market_data
get_indicator
get_correlation
run_backtest
get_autopsy
get_regime_analysis
get_robustness
get_integrity
get_forecast
create_report

For trading:

prepare_paper_order

not:

execute_anything
47. AI VOICE ASSISTANT
Voice commands
"Show Bitcoin volatility."

"Compare Bitcoin and NVIDIA."

"Run the 20/50 SMA strategy."

"What caused the drawdown?"

"Explain Sharpe ratio."

"Start a paper trading session."

"Open robustness lab."

Response:

"Bitcoin's 30-day volatility is currently..."

48. VOICE RESEARCH MODE

Innovative feature:

VOICE RESEARCH

User:
"Run a BTC SMA crossover from 2021."

AI:
"Using 20 and 50-day moving averages,
$100,000 initial capital, and the configured
execution costs. Shall I run it?"

User:
"Yes."

AI:
"Backtest started."

Important:

AI asks confirmation before consequential actions.

49. SCREEN AI

This can be a major differentiator.

But don't build spyware.

User explicitly selects:

[ Share current Quantora chart ]

or uploads screenshot.

Screen AI analyses:

CHART ANALYSIS

Detected:
✓ Uptrend
✓ Increasing volatility
✓ Moving average crossover
✓ Support zone

Potential anomaly:
Volume increased relative to recent baseline.
50. SCREEN AI PRIVACY

Show persistent status:

● SCREEN AI ACTIVE
[Pause] [Stop]

Do not capture:

passwords
payment screens
private browser tabs
entire desktop without consent

Only:

selected tab
selected window
selected region
uploaded screenshot
51. AI SUPPORT CHATBOT

Separate this from Quant Copilot.

Two AI systems:

Quant Copilot

Financial research.

Quantora Support

Product support.

Support can answer:

How do I connect Alpaca?

Why did my payment fail?

How do I enable MFA?

Where is my backtest?

How do I export a report?
52. PAYMENT SYSTEM

Use:

Stripe Checkout

for the payment architecture.

Stripe Checkout supports one-time and subscription payment flows, and payment/subscription state should be confirmed through server-side webhook events rather than trusting only the success redirect.

For the hackathon:

FREE
PRO
RESEARCH

Example:

Free
Basic markets
Limited backtests
Basic Learn
Paper trading
Pro
Unlimited backtests
Robustness
Forecast Lab
Advanced AI
Voice
Screen AI
Advanced reports
Research
Advanced datasets
Custom strategies
Parameter sweeps
Research workspace
API access

Use Stripe test mode for the demo.

53. PAYMENT ISSUE CENTER

Very useful innovation.

BILLING SUPPORT

Payment status
✓ Subscription active

Latest payment
₹XXXX

Invoice
[View]

Problem?

○ Payment failed
○ Charged but access missing
○ Refund request
○ Invoice issue
○ Subscription issue

[ CONTACT SUPPORT ]

AI support can classify the issue, but payment/refund decisions should be handled by authorized backend/support workflows.

54. ACTIVITY CENTER
/activity

Everything important gets logged.

ACTIVITY

16:32
Login from Chrome / Windows

16:35
BTC data connection opened

16:40
Backtest executed

16:41
AI Copilot requested strategy analysis

16:43
Paper trade simulated

16:48
Report exported
55. SECURITY CENTER

This is where you impress the cyber-company judge.

SECURITY CENTER

Account Security
────────────────────
MFA                    ON
Email Verified         ✓
Active Sessions        2
API Connections        2

Risk Status
────────────────────
LOW

Recent Security Events
────────────────────
✓ Login
✓ MFA verification
✓ New session
56. SESSION MANAGEMENT
ACTIVE SESSIONS

Windows / Chrome
Current session
India

Mac / Safari
Last active 2h ago

[ Sign out ]
[ Sign out all other sessions ]

Supabase supports MFA flows and authentication assurance levels that can be enforced through application/database policies.

57. API KEY SECURITY

Never put:

ALPACA_SECRET_KEY
STRIPE_SECRET_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY

inside frontend code.

Architecture:

Browser
 ↓
Backend
 ↓
Secret manager / environment
 ↓
External API
58. DATABASE SECURITY

Every user-owned table should have ownership enforcement.

Example:

users
organizations
strategies
backtests
reports
paper_orders
watchlists
connections
activity_logs
feedback
subscriptions

Use PostgreSQL RLS for user/tenant boundaries. Supabase specifically recommends enabling RLS on exposed tables and notes that service-role access bypasses RLS, so it must remain server-side.

59. SECURITY EVENT DETECTION

Create:

Security Monitor

Detect:

Repeated failed login
New device
Impossible session pattern
Large API request burst
Abnormal AI tool usage
Repeated backtest abuse
Suspicious broker action
Payment anomaly

Then:

⚠ SECURITY EVENT

Multiple failed login attempts detected.

Action:
Additional verification required.
60. AUDIT LOG

Every sensitive action:

WHO
WHAT
WHEN
WHERE
RESULT
REQUEST ID

Example:

USER
Sujan

ACTION
RUN_BACKTEST

TIME
16:41:03

STRATEGY
SMA_20_50

ASSET
BTC

RESULT
SUCCESS

REQUEST ID
QNT-82A91
61. FEEDBACK SYSTEM

Don't just have:

Rate us ⭐⭐⭐⭐⭐

Build structured feedback.

FEEDBACK

What happened?

○ Bug
○ Feature request
○ Data problem
○ AI problem
○ Payment problem
○ Security concern
○ UI issue
○ Other

Description
[_____________________]

Screenshot
[ Upload ]

[ Submit ]

AI automatically categorizes:

Category: DATA
Priority: HIGH
Component: Market Data

But security issues should be escalated for human review.

62. LEARNING ACADEMY

This incorporates your friend's Learn pillar.

/learn
QUANTORA ACADEMY

Your Progress
████████████░░░

Continue:
Understanding Sharpe Ratio

Learning Paths:

Beginner
Quant Fundamentals

Intermediate
Technical Strategies

Advanced
Backtesting & Robustness

AI Trading
Machine Learning for Markets

Risk
Portfolio & Risk Management
63. AI TUTOR

User:

Explain maximum drawdown.

AI:

MAXIMUM DRAWDOWN

It measures the largest decline
from a previous peak.

Peak
██████████

       ↓
       ↓
      ███
      ███

Peak → Trough = Maximum Drawdown

Then:

Want to see it on the BTC chart?
[Show me]

This connects education to actual data.

64. ADAPTIVE LEARNING

Track:

Concept mastery
Quiz performance
Mistakes
Time spent
Backtest understanding

Then AI recommends:

Recommended next lesson

"Volatility vs Risk"

Why?
You performed strongly on returns
but struggled with volatility questions.
65. PAPER TRADING ACADEMY

Combine learning and simulation.

Lesson:

Learn market orders.

Then immediately:

SIMULATION

BTC
$XX,XXX

Place a market order.

[ BUY ]

[ SELL ]

AI reviews:

You entered during elevated volatility.

Review:
Market orders can experience slippage.
66. TRADING GAME

This is where the platform becomes memorable.

Quantora Arena

Don't make it gambling.

Make it a financial decision simulation.

Modes:

SOLO
SCENARIO
CHALLENGE
PVP
TOURNAMENT
67. HISTORICAL SCENARIO GAME

Example:

SCENARIO

BTC
March 2020

Capital
$100,000

You cannot see future data.

What do you do?

BUY
HOLD
REDUCE
SHORT

Then move forward in historical time.

At the end:

DECISION REVIEW

Your decision:
BUY

Outcome:
...

Risk taken:
...

Maximum drawdown:
...

AI Review:
...

This is much more educational than a normal leaderboard.

68. STRATEGY DUEL

Two players:

PLAYER A
Momentum

PLAYER B
Mean Reversion

Same:

Capital
Market data
Time window
Transaction costs

Then compare:

Return
Drawdown
Sharpe
Risk
Trade count

The winner isn't defined only by profit; show the full metrics without turning it into a financial recommendation.

69. AI RESEARCH CHALLENGES

Example:

CHALLENGE

Find a strategy that:

Return > 30%
Max DD < 20%
Sharpe > 1

without changing:
• initial capital
• data period

Users research.

This teaches quantitative thinking.

70. REPORT CARD

After every major backtest:

QUANTORA RESEARCH REPORT

SMA CROSSOVER
BTC

Performance
84.2%

Risk
Moderate

Robustness
Strong

Integrity
88/100

Regime Sensitivity
High

Benchmark
+51%

Key Weakness
Bear-market drawdowns

Top Evidence
...

Export:

PDF
PNG
Share link
71. STRATEGY DNA

Another innovative feature.

Every strategy gets a profile:

STRATEGY DNA

Trend Following       █████████
Mean Reversion        ██
Volatility Sensitivity ███████
Trade Frequency       ████
Drawdown Sensitivity  ███████
Regime Dependence     ██████

Then compare:

SMA 20/50
vs
EMA 20/50
72. STRATEGY FINGERPRINT

Hash/config identity:

Strategy ID
QNT-SMA-20-50-BTC

Data version
v2026.09.19

Parameters
20 / 50

Costs
0.15%

Execution
Next bar

Created
19 Sep 2026

This makes experiments reproducible.

73. EXPERIMENT REPRODUCIBILITY

Every backtest stores:

Dataset version
Provider
Timestamp
Strategy version
Parameters
Fees
Slippage
Execution model
Software version
Random seed

Then:

[ REPRODUCE EXPERIMENT ]

This is a very strong research feature.

74. NEW FEATURE — "BACKTEST TIME MACHINE"

This could be your major innovation.

User runs:

SMA 20/50 BTC

Quantora lets them scrub through the backtest:

2021 ───────●──────── 2026
            ↑
        Current point

At each point:

What did the strategy know?

Price
Indicators
Regime
Volatility
Position

Critically:

Future information remains hidden.

This visually demonstrates avoidance of look-ahead bias.

75. NEW FEATURE — "WHY DID IT TRADE?"

Click any trade.

TRADE EXPLAINER

BUY

Timestamp
2024-05-18

Reason

SMA20 crossed SMA50

Trend
Bullish

Volatility
Moderate

Position size
25%

Execution
Next bar

Slippage
0.04%

Fees
$XX

This is far better than a simple trade log.

76. NEW FEATURE — "COUNTERFACTUAL LAB"

Ask:

What if transaction costs were 2× higher?

Quantora reruns:

BASELINE
Return +84%

2× FEES
Return +72%

5× FEES
Return +51%

Or:

What if execution was delayed one bar?

This tells the user whether the strategy is fragile.

77. NEW FEATURE — "REGIME STRESS TEST"

Instead of simply:

strategy works

show:

STRESS TEST

Bull
██████████

Bear
███

High Vol
████

Low Vol
██████

Sideways
██

Then automatically test:

Costs ↑
Volatility ↑
Execution delay ↑
Parameter shift
78. NEW FEATURE — "RESEARCH GRAPH"

Every experiment creates a node.

Experiment A
    ↓
SMA 20/50
    ↓
Failed in Bear
    ↓
Experiment B
EMA 20/50
    ↓
Experiment C
Volatility filter
    ↓
Experiment D
Final strategy

This becomes a visual research history.

Very useful for demonstrating scientific workflow.

79. NEW FEATURE — "AI RESEARCH MEMORY"

Instead of generic chat memory:

PROJECT MEMORY

You are investigating:
BTC trend strategies

Previous findings:
• SMA performs poorly in sideways regimes
• Cost sensitivity is moderate
• 20/50 was more stable than 10/30

AI uses only saved research context.

80. NEW FEATURE — "EVIDENCE LOCK"

This is a strong AI trust mechanism.

Every AI financial statement has:

CLAIM
   ↓
EVIDENCE
   ↓
CALCULATION
   ↓
SOURCE

Example:

Claim:
BTC volatility increased.

Evidence:
30D volatility = 62%
Previous 30D = 44%

Source:
Market Data v2026.09.19

[View calculation]
81. NEW FEATURE — "AI CONFIDENCE ≠ TRADING CONFIDENCE"

Don't simply put:

AI Confidence 95%

Instead separate:

MODEL CONFIDENCE
Data quality
████████░░

MODEL VALIDATION
███████░░░

REGIME STABILITY
█████░░░░░

FORECAST UNCERTAINTY
████████░░

This avoids misleading users.

82. COMPLETE PROJECT STRUCTURE

I would use this structure.

quantora/
│
├── README.md
├── docker-compose.yml
├── .env.example
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
│
├── apps/
│   │
│   ├── web/
│   │   ├── app/
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── verify/
│   │   │   ├── mfa/
│   │   │   ├── forgot-password/
│   │   │   └── reset-password/
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── overview/
│   │   │   ├── markets/
│   │   │   ├── research/
│   │   │   ├── forecast/
│   │   │   │
│   │   │   ├── strategies/
│   │   │   ├── backtests/
│   │   │   ├── autopsy/
│   │   │   ├── regimes/
│   │   │   ├── robustness/
│   │   │   ├── integrity/
│   │   │   ├── reports/
│   │   │   │
│   │   │   ├── paper-trading/
│   │   │   ├── scenarios/
│   │   │   ├── arena/
│   │   │   │
│   │   │   ├── academy/
│   │   │   ├── tutor/
│   │   │   ├── progress/
│   │   │   │
│   │   │   ├── copilot/
│   │   │   ├── voice/
│   │   │   ├── screen-ai/
│   │   │   ├── alerts/
│   │   │   │
│   │   │   ├── connections/
│   │   │   ├── activity/
│   │   │   ├── security/
│   │   │   ├── billing/
│   │   │   ├── feedback/
│   │   │   └── support/
│   │   │
│   │   └── components/
│   │       ├── charts/
│   │       ├── market/
│   │       ├── backtest/
│   │       ├── autopsy/
│   │       ├── robustness/
│   │       ├── regimes/
│   │       ├── forecast/
│   │       ├── copilot/
│   │       ├── voice/
│   │       ├── security/
│   │       ├── academy/
│   │       ├── game/
│   │       └── ui/
│   │
│   └── api/
│       └── src/
│           ├── main.ts
│           ├── middleware/
│           ├── auth/
│           ├── security/
│           ├── market-data/
│           ├── quant/
│           ├── backtest/
│           ├── execution/
│           ├── forecast/
│           ├── regimes/
│           ├── robustness/
│           ├── integrity/
│           ├── copilot/
│           ├── voice/
│           ├── screen-ai/
│           ├── paper-trading/
│           ├── billing/
│           ├── support/
│           ├── feedback/
│           └── audit/
│
├── packages/
│   │
│   ├── database/
│   ├── auth/
│   ├── quant-engine/
│   ├── backtester/
│   ├── market-data/
│   ├── ai/
│   ├── security/
│   ├── billing/
│   ├── notifications/
│   └── ui/
│
├── workers/
│   ├── market-stream-worker/
│   ├── backtest-worker/
│   ├── robustness-worker/
│   ├── forecast-worker/
│   └── notification-worker/
│
├── data/
│   ├── raw/
│   ├── processed/
│   ├── cache/
│   └── scenarios/
│
├── config/
│   ├── assets.yaml
│   ├── indicators.yaml
│   ├── backtest.yaml
│   ├── regimes.yaml
│   └── security.yaml
│
└── tests/
    ├── unit/
    ├── integration/
    ├── security/
    └── e2e/
83. BACKEND QUANT ENGINE
packages/quant-engine/

moving_averages.py
returns.py
volatility.py
metrics.py
correlation.py
drawdown.py
risk.py
84. BACKTEST ENGINE
packages/backtester/

engine.py
execution.py
portfolio.py
orders.py
positions.py
benchmark.py
costs.py
slippage.py

strategies/
    base.py
    sma.py
    ema.py
    momentum.py
    mean_reversion.py
85. AUDIT ENGINE
packages/security/

guardrails.py
data_validation.py
lookahead.py
leakage.py
integrity.py
risk_checks.py
86. ROBUSTNESS ENGINE
robustness/
    parameter_sweep.py
    sensitivity.py
    stress_test.py
    walk_forward.py
    monte_carlo.py

For the 24-hour version:

Implement
parameter sweep
stress test
cost sensitivity
Optional
walk-forward
Monte Carlo
87. DATABASE

Core tables:

profiles
organizations
memberships
roles

assets
market_data
market_data_versions

strategies
strategy_versions

backtests
backtest_metrics
backtest_trades
backtest_equity

regimes
regime_results

robustness_runs
robustness_results

forecasts
forecast_models

paper_accounts
paper_orders
paper_positions

watchlists
alerts

learning_paths
lessons
quizzes
user_progress

games
game_sessions
game_results

ai_sessions
ai_tool_calls

connections
api_credentials

subscriptions
payments
invoices

activity_logs
security_events
feedback
support_tickets
88. MOST IMPORTANT DATABASE RELATIONSHIP
USER
 │
 ├── Strategies
 │      └── Strategy Versions
 │
 ├── Backtests
 │      ├── Metrics
 │      ├── Trades
 │      └── Equity
 │
 ├── Paper Account
 │      ├── Orders
 │      └── Positions
 │
 ├── AI Sessions
 │
 ├── Activity
 │
 ├── Connections
 │
 └── Subscription
89. SECURITY STACK

For the hackathon:

Frontend
Next.js

Authentication
Supabase Auth

Authorization
RBAC + PostgreSQL RLS

Backend
FastAPI / Node API

Database
PostgreSQL

Validation
Zod / Pydantic

Rate Limiting
Redis

Secrets
Environment / Vault

Audit
PostgreSQL audit tables

Payments
Stripe

Market Data
Alpaca / other provider

AI
Server-side AI gateway

Monitoring
Application logs + security events

Supabase provides authentication, JWT-based sessions and RLS integration, while its security documentation recommends RLS on exposed tables and keeping service-role access server-side.

90. SECURITY CHECKLIST

Your security page should visually show:

AUTHENTICATION
✓ Secure session
✓ Email verification
✓ MFA
✓ Password reset

AUTHORIZATION
✓ RBAC
✓ Ownership checks
✓ RLS

API
✓ Input validation
✓ Rate limiting
✓ CORS
✓ Security headers

DATA
✓ Encryption in transit
✓ Secret isolation
✓ Audit logging

AI
✓ Tool allowlist
✓ Authorization before tools
✓ Output validation
✓ Prompt-injection defenses

TRADING
✓ Paper/live separation
✓ Order validation
✓ Confirmation
✓ Risk limits

PAYMENTS
✓ Hosted checkout
✓ Webhook verification
✓ Idempotency
✓ No raw card storage

Use OWASP ASVS as the security-control checklist rather than claiming the system is "100% secure."

91. AI ARCHITECTURE
                   QUANTORA AI
                       │
             ┌─────────┼──────────┐
             ↓         ↓          ↓
       Quant Copilot  Tutor    Support
             │
        Tool Gateway
             │
   ┌─────────┼─────────┐
   ↓         ↓         ↓
Market    Quant      Backtest
Tools     Tools      Tools
   │         │         │
   └─────────┼─────────┘
             ↓
        Evidence Layer
             ↓
       Response Generator
92. AI NEVER CALCULATES IMPORTANT METRICS FROM MEMORY

Instead:

User
 ↓
AI
 ↓
get_sharpe()
 ↓
Quant Engine
 ↓
1.82
 ↓
AI explains 1.82

Not:

AI guesses 1.82

This is essential for the "evidence-based" positioning.

93. REAL-TIME SYSTEM
                PROVIDERS
                   │
        ┌──────────┼───────────┐
        ↓          ↓           ↓
      Alpaca    Binance     Other
        │          │
        └──── WebSocket ───────┘
                   ↓
           DATA INGESTION
                   ↓
             VALIDATION
                   ↓
             NORMALIZATION
                   ↓
              REDIS
                   ↓
         ┌─────────┼─────────┐
         ↓         ↓         ↓
       Charts    Alerts    Quant
                            Engine
                              ↓
                           AI
                              ↓
                         Frontend
94. MOBILE

Don't just shrink desktop.

Mobile bottom navigation:

Home
Markets
Build
Learn
Assist

Floating voice button:

        ◉

Swipeable:

Market
→
Chart
→
Metrics
→
AI Insight
95. COMMAND PALETTE

Press:

CTRL + K

Search:

Run BTC SMA backtest
Open robustness
Show NVDA
Compare BTC and Gold
Open security
Start paper trading
Ask Quant Copilot
96. NOTIFICATIONS

Examples:

BACKTEST COMPLETE

BTC SMA 20/50

Return: +84%
Sharpe: 1.82
Max DD: -18%

[View Results]

Security:

NEW LOGIN

Chrome / Windows

[Review Session]

Payment:

PAYMENT ISSUE

Your subscription payment needs attention.

[Resolve]

Market:

REGIME CHANGE

BTC moved into high-volatility regime.
97. WHAT YOU SHOULD NOT BUILD FOR THE 24-HOUR HACKATHON

This is extremely important.

Do not attempt all enterprise features fully.

Don't fully build:
OpenFGA
SSO
enterprise organizations
complete admin infrastructure
real-money trading
complex marketplace
full social network
real PVP multiplayer
LSTM + Transformer + XGBoost + ARIMA simultaneously
50 data providers
complete DCF engine
full fundamental analysis
full on-chain analytics
CRDT collaboration
huge content management system

They can exist as architecture / roadmap, not completed features.

98. WHAT MUST ACTUALLY WORK IN THE DEMO

If you have 24 hours, prioritize this exact flow:

LANDING
 ↓
LOGIN
 ↓
OVERVIEW
 ↓
LIVE BTC/NVDA/GOLD
 ↓
MARKET X-RAY
 ↓
RESEARCH
 ↓
SMA STRATEGY
 ↓
RUN BACKTEST
 ↓
BACKTEST LOADER
 ↓
RESULTS
 ↓
STRATEGY AUTOPSY
 ↓
REGIME ANALYSIS
 ↓
ROBUSTNESS
 ↓
INTEGRITY
 ↓
AI COPILOT
 ↓
FORECAST
 ↓
PAPER TRADE
 ↓
SECURITY CENTER
 ↓
REPORT

That is your judge journey.

99. 24-HOUR BUILD PRIORITY
🔴 P0 — MUST WORK
Authentication
RBAC
Market data
BTC / NVDA / Gold
Indicators
Backtest
Execution costs
Benchmark
Autopsy
Regimes
Robustness
Integrity
Charts
AI Copilot
Paper trading
Activity log
Security center
🟠 P1 — SHOULD WORK
Forecast Lab
Voice
Learn
AI Tutor
Reports
Stripe test checkout
Feedback
Support chatbot
Alerts
Connections
🟡 P2 — POLISHED DEMO
Screen AI
Historical scenario game
Strategy DNA
Counterfactual Lab
Research Graph
What Changed?
Data Lineage
⚪ P3 — FUTURE
Live trading
PVP multiplayer
Tournament economy
Marketplace
SSO
Enterprise organizations
Advanced ML
CRDT collaboration
Full fundamental engine
100. THE FINAL "INNOVATION STACK"

Your innovation shouldn't be one feature.

It should be this combination:

1. Strategy Autopsy

Why did it make money?

2. Regime Engine

When does it work?

3. Robustness Lab

Does it survive parameter changes?

4. Integrity Engine

Can the backtest be trusted?

5. Evidence Lock

Where did every AI claim come from?

6. Counterfactual Lab

What happens if assumptions change?

7. Backtest Time Machine

What did the strategy know at that moment?

8. Strategy DNA

What kind of strategy is this?

9. Forecast Lab

What does the model estimate, with uncertainty and validation?

10. Research Academy

Learn the concepts through actual market data.

11. Paper Trading

Move from research to safe simulation.

12. Quantora Arena

Turn market reasoning into a historical decision game.

13. Voice Quant

Research hands-free.

14. Screen AI

Analyze a selected chart/screen with explicit user consent.

15. Security Center

Make security visible instead of invisible.

101. FINAL QUANTORA ARCHITECTURE
                         QUANTORA
                            │
        ┌───────────────────┼────────────────────┐
        │                   │                    │
   INTELLIGENCE          RESEARCH             ASSIST
        │                   │                    │
   Market X-Ray       Strategy Lab          Copilot
   Markets            Backtesting           Voice
   Cross-Asset        Autopsy               Screen AI
   Forecast           Regimes               Alerts
                      Robustness
                      Integrity
                      Reports
        │                   │                    │
        └───────────────────┼────────────────────┘
                            │
                     SIMULATION
                            │
                 ┌──────────┴─────────┐
                 │                    │
             Paper Trade          Arena/Game
                 │                    │
                 └──────────┬─────────┘
                            │
                         LEARN
                            │
                  Academy + AI Tutor
                            │
        ┌───────────────────┼────────────────────┐
        │                   │                    │
     SECURITY            ACCOUNT              COMMERCE
        │                   │                    │
       MFA              Activity              Stripe
       RBAC             Sessions              Billing
       RLS              Connections            Support
       Audit            Profile               Feedback
       Risk
        │
        └───────────────────┬────────────────────┘
                            │
                       DATA LAYER
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
         REST APIs      WebSockets       Cached Data
             │              │              │
             └──────────────┼──────────────┘
                            ↓
                    MARKET DATA GATEWAY
                            ↓
                    NORMALIZATION ENGINE
                            ↓
                    QUANT ENGINE
                            ↓
                    BACKTEST ENGINE
                            ↓
                     EVIDENCE LAYER
102. THE FINAL PROJECT STRUCTURE IN ONE SENTENCE

Quantora is not a stock dashboard.

It is:

A secure quantitative research operating system where users can observe live markets, investigate cross-asset relationships, formulate strategies, backtest them with realistic execution, diagnose exactly why they worked or failed, stress-test their assumptions, verify research integrity, explore model forecasts, learn quantitative finance, paper-trade safely, compete in historical market simulations, and interact with the platform through evidence-grounded AI, voice and screen assistance.