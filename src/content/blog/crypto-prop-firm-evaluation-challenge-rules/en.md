---
lang: en
articleId: crypto-prop-firm-evaluation-challenge-rules
title: "Prop challenge rules: drawdown limits and profit target"
hook: "THEN THEY BLOW THE CHALLENGE IN 3 DAYS AND WONDER WHAT HAPPENED"
description: "How prop challenge rules work: daily and max drawdown limits, profit target, consistency rule. What leads to disqualification and how to avoid it."
category: prop-trading
publishDate: 2026-07-20
readingMinutes: 12
heroImage: "./en/hero.jpg"
heroImageAlt: "Prop challenge rules: daily drawdown, max drawdown and profit target explained"
intro:
  - "Most traders who land on a [prop firm](https://www.hashhedge.com/blog/best-crypto-prop-firms-2026) page for the first time look at two numbers: account size and challenge fee. They rarely read the rules all the way through."
  - "Then they blow the challenge in 3 days and wonder what happened."
  - "This article breaks down the mechanics of the evaluation phase (stage #1) down to the last detail. No marketing promises and no oversimplifications."
  - "If you're planning to buy a challenge soon, read this to the end before you pay."
finalPromo:
  title: "Ready to Trade Prop Firm Capital?"
  description: "Hash Hedge is the #1 crypto prop trading platform. Get funding up to **$150K** and withdraw up to **90% of your profits** in USDT straight to your wallet."
  buttonText: "Start Challenge"
  buttonUrl: "https://app.hashhedge.com/en/register/"
---

## What the evaluation phase actually tests

On the surface the challenge task seems simple: earn X percent and don't lose more than Y.

In practice, the firm tests not your ability to make money, but your ability to not lose it in a predictable way.

A [prop firm](https://www.hashhedge.com/blog/best-crypto-prop-firms-2026) hands you capital. Its main risk is not that a trader will earn too little. The risk is that a trader will lose a lot and fast.

That is why challenge rules work as a filter: they cut off behavior that leads to uncontrolled losses.

Profit should appear on its own once risk is under control.

4 core rules form the skeleton of any challenge. Here is how they work.

| Rule | Description | Common mistake |
|---|---|---|
| Daily drawdown limit | Maximum allowable loss in a single trading day. Calculated in real time using the formula: Daily Loss = Equity - Balance at start of day | Trader forgets about floating P&L on open positions and breaches the limit before closing the trade |
| Maximum drawdown limit | Maximum allowable loss across the entire stage. Value depends on the challenge stage. | Trader focuses only on daily drawdown and ignores the overall account drawdown |
| Profit target | Net profit percentage required within the allotted period to pass the stage | Trader increases position sizes in the final days trying to catch up to the target and breaches the daily drawdown limit |

## Daily drawdown limit: how it works and common mistakes

### Daily drawdown limit (Max. Daily Loss)

Max. Daily Loss is the maximum amount you can lose in a single trading day. If you exceed it, the account is automatically closed.

Let's look at the daily drawdown limit using the example of a [Hash Hedge](https://www.hashhedge.com) two-stage challenge. The limit is 5% of the starting balance.

The trading day resets daily at 00:00–00:10 (UTC+4).

The current daily result (Daily Loss) is calculated in real time:

**Daily Loss = Equity - Balance at start of day**

### Example calculation for a $10,000 challenge (Limit: $500)

You opened a position and the current loss on it is -$400.

Balance stays at $10,000 but equity drops to $9,600.

Your current [drawdown](https://www.hashhedge.com/blog/position-sizing-crypto-risk-management): $9,600 - $10,000 = -$400. Only $100 left before breaching the limit.

### Carrying positions to the next day

If you leave a trade open into the next day, the floating loss of -$400 does not reset.

The new trading day will start with $400 of limit already used, and your remaining buffer for the new 24 hours will be the same $100.

Note: in live trading, commissions and funding also affect the result.

### Most common daily limit violations and how to avoid them

**First mistake: counting only closed trades.** The daily limit tracks floating P&L, including open positions. A trader may refuse to close a losing trade hoping for a reversal, but if the floating loss breaches the limit the account is closed.

**Second mistake: trading multiple instruments at the same time and losing control over aggregate risk.** 3 positions at 1.5% risk each means 4.5% total risk. With a 5% daily limit, one bad move will close the account.

**Third mistake: ignoring spread and commissions.** On crypto derivatives, taker fee and funding rate add up. In volatile conditions, slippage on a stop-loss can turn a planned 1% loss into an actual 1.5% loss.

### What happens when the limit is breached

In most prop firms, exceeding the [daily limit](https://www.hashhedge.com/blog/stop-loss-prop-trader) means the account is permanently closed.

However, some platforms offer protective features.

For example, Hash Hedge has the Daily Loss Protection option: when the limit is reached, the system automatically closes all trades and preserves the account, allowing the trader to continue the challenge.

**Tip:** Set your personal stop-loss at 70-80% of the official limit (e.g. 3.5-4% instead of 5%). This creates a buffer for market slippage.

## Maximum drawdown limit

Maximum drawdown limit (Max Overall Drawdown) is the absolute ceiling for account losses across the entire stage. If equity drops below this level, the account is automatically closed.

Two approaches to calculating this limit exist in the prop industry:

**Static limit** — tied to the starting balance. If you started at $100,000 with a 10% limit, your absolute floor is $90,000. Even if the account grows to $115,000, the critical threshold stays at $90,000. This is the most transparent and trader-friendly model.

**Trailing (floating) limit** — moves up following the growth of your balance or equity. If the account grew from $100,000 to $108,000, then with a 10% limit your closure threshold rises from $90,000 to $98,000. This model penalizes sitting on unrealized gains and letting profits roll back.

### How it works at Hash Hedge

All [Hash Hedge](https://www.hashhedge.com) challenges use a transparent static limit. Only the percentages change depending on the challenge stage.

For example, if the maximum overall loss is fixed at 10% of the starting balance:

**Example calculation for a $10,000 challenge:**

Your account closure threshold: $9,000

If you've earned and pushed the balance to $11,000, your critical threshold does not move and stays at $9,000. The account's safety margin increases to $2,000.

### How to calculate position size to protect the limit

To manage the maximum drawdown limit, use two approaches to risk calculation:

1. **Basic (by days)**

   Divide the remaining limit buffer by the number of trading days. Example: $7,000 left until the limit, 15 days ahead. Maximum risk per day is no more than $460.

2. **Advanced (by strategy)**

   Calculate position size by tying risk to the maximum loss buffer. This method accounts for current market volatility and the average losing streak in your system.

## Profit target: what counts and what doesn't

### Do open positions count toward the target?

At most firms, the profit target is counted only on closed trades. Unrealized profit doesn't count. This means that even if you've hit the required percentage but part of the profit is sitting in open positions, you haven't passed the stage until you close those trades.

Some firms count by equity (including floating profit). Check the rules before you start trading.

### How many trading days do you get to hit the target?

The standard range is 30 to 60 calendar days on the first stage. Some firms don't limit the time at all: trade for half a year if you want, just don't breach the limit.

The minimum number of trading days also matters. Most firms require at least 5-10 active trading days. This is tied to the consistency rule: you can't make 1 trade for all the profit and walk away.

<div class="banner">
<div class="banner-content">
<div class="banner-logo"><svg width="602" height="567" viewBox="0 0 602 567" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M507.435 265.841L300.586 469.72L301.222 566.465L601.846 265.841L336.005 0V370.19L400.602 310.562V161.492L507.435 265.841Z" fill="#FCD535"></path><path d="M94.4666 265.841L300.473 469.72L301.109 566.465L0.0557861 265.841L265.897 0V370.19L201.3 310.562V161.492L94.4666 265.841Z" fill="#FCD535"></path></svg></div>
<div class="banner-title">Keep up to 90% of your profits on a funded account up to $150,000</div>
</div>
<a class="banner-button" href="https://app.hashhedge.com/en/register/">Start Challenge</a>
</div>

## Consistency rule: the most misunderstood part of the challenge

### What the consistency rule means in practice

The consistency rule prohibits a situation where all profit was earned in 1-2 days while the rest were flat or negative. The logic is simple: the firm wants to see a repeatable skill, not a single lucky entry.

Typical wording: no single trading day should account for more than a certain percentage of total profit for the period. If the limit is 30% and your total profit is $10,000, no single day should yield more than $3,000.

### Structured entry methods for consistency across days

Strategies with fixed setups help produce stable results from day to day. If you trade using structured entry methods with repeatable criteria, profit distribution across days tends to be more even than with intuitive trading.

**Key principle:** same position size, same entry criteria, same stop-losses. This is the discipline that directly helps pass the consistency rule.

## What most often leads to failure

### Top 2 rule violations that end challenges

1. Exceeding the daily limit due to a floating loss the trader refused to cut.
2. Exceeding the max limit after a series of 3-5 losing days without reducing position sizes.

### Emotional trading patterns that lead to disqualification

Behind every formal violation is a behavioral pattern.

The most destructive one is [revenge trading](https://www.hashhedge.com/blog/trading-psychology-guide).

A trader lost money in the morning, gets angry, and increases positions in the afternoon trying to win it back. The result is predictable.

**Second pattern — FOMO entry.**

The market already moved 3% without you, you jump in at the top and catch the pullback.

**Third — "chasing the target"**

When you're a couple of percent short of completing the plan, the trader increases position size several times over. The outcome is either a lucky pass or a blown account, and statistically the latter happens far more often.

## How to approach the evaluation like a pro

A professional approach to the challenge starts not with the first trade but with preparation.

Define your professional trading channels and setups that provide stability during the challenge, and trade only those.

### Daily routine during the evaluation phase

- Before the session opens: check your balance, current daily and maximum limit buffer, today's economic calendar. Lock in the maximum allowable loss for the day.
- During trading: update the P&L table after every trade. Monitor the aggregate risk of open positions.
- After the session closes: record the day's result, update the consistency table, check the remaining buffer.

### When to stop trading for the day

1. **First rule**

   If you've lost 50-60% of the daily limit, close the terminal. The remaining buffer is a cushion for unexpected situations, not "one more try."

2. **Second rule**

   If you've had 2-3 losing trades in a row, take a break for at least an hour. Consecutive losses degrade decision quality. This isn't psychology, it's statistics.

3. **Third rule**

   If the plan for the day is done and you're in profit, there's no need to "push." An extra trade on a good day more often hurts the result than helps it. Professionals lock in the day's profit and leave. Beginners trade until the gain turns into a loss.

**Important to understand:** stopping trading for the day is not weakness. It is part of the strategy. A trader who regularly hits the plan and stops reaches the profit target more slowly but breaches the limit far less often. In the long run, that is exactly what determines passing the challenge.

## Key takeaways

Challenge rules are not the trader's enemy. They are tools that build discipline.

A trader who has learned to pass the evaluation automatically gains risk management skills that work beyond the prop system as well.

1. Know your limits before the first trade.
2. Keep a table of daily results from day one.
3. If in doubt, reduce position size, don't increase it.

The next step is to understand what the path from purchase to a funded account looks like step by step. [Read the full guide here](https://www.hashhedge.com/blog/how-to-become-a-prop-trader/ru)
