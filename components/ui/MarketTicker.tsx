"use client";
import { PHONE_STOCKS } from "@/lib/mockData";

const TICKER_ITEMS = PHONE_STOCKS.map((s) => ({
  ticker: s.ticker,
  price: s.price,
  change: s.changePercent,
}));

// Duplicate for infinite scroll
const ALL_ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

export default function MarketTicker() {
  return (
    <div className="relative overflow-hidden flex items-center h-10 bg-[var(--bg-primary)]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--bg-primary)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--bg-primary)] to-transparent pointer-events-none" />

      {/* Ticker track */}
      <div className="flex animate-marquee hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
        {ALL_ITEMS.map((item, i) => (
          <div key={`${item.ticker}-${i}`} className="flex items-center gap-2 px-6">
            <span className="text-[11px] font-semibold text-[var(--text-secondary)]">{item.ticker}</span>
            <span className="text-[11px] font-medium font-mono text-white">${item.price.toLocaleString()}</span>
            <span
              className={`text-[11px] font-medium font-mono ${
                item.change >= 0 ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
              }`}
            >
              {item.change >= 0 ? "+" : ""}{item.change.toFixed(2)}%
            </span>
            <div className="w-1 h-1 rounded-full bg-[var(--border-light)] ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
