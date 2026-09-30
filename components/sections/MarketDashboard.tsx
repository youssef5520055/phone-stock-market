"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PhoneCard from "@/components/ui/PhoneCard";
import { PHONE_STOCKS, MARKET_STATS, PhoneStock, getUpdatedPrice, formatLargeNumber, formatVolume } from "@/lib/mockData";

function MarketStatBadge({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl p-5 bg-[var(--bg-card)] border border-[var(--border-light)] flex flex-col justify-between">
      <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-3">
        {label}
      </div>
      <div>
        <div className="text-2xl font-semibold tracking-tight text-white mb-1">
          {value}
        </div>
        {sub && (
          <div className="text-[11px] text-[var(--text-secondary)] font-medium">
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MarketDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [stocks, setStocks] = useState<PhoneStock[]>(PHONE_STOCKS);
  const [filter, setFilter] = useState<"all" | "gainers" | "losers">("all");
  const [sortBy, setSortBy] = useState<"rank" | "price" | "change">("rank");
  const [selectedStock, setSelectedStock] = useState<PhoneStock | null>(null);

  // Live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) => prev.map((s) => getUpdatedPrice(s)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const filteredStocks = stocks
    .filter((s) => {
      if (filter === "gainers") return s.changePercent > 0;
      if (filter === "losers") return s.changePercent < 0;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price") return b.price - a.price;
      if (sortBy === "change") return b.changePercent - a.changePercent;
      return a.rank - b.rank;
    });

  return (
    <section id="dashboard" ref={ref} className="py-24 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
            Market Overview
          </h2>
          <p className="text-[var(--text-secondary)] font-medium">
            Real-time analytics and price action across top devices.
          </p>
        </motion.div>

        {/* Top metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          <MarketStatBadge
            label="Total Market Cap"
            value={formatLargeNumber(MARKET_STATS.totalMarketCap)}
            sub="+12.4% vs last month"
          />
          <MarketStatBadge
            label="24H Volume"
            value={formatVolume(MARKET_STATS.totalVolume)}
            sub="Avg across all listed devices"
          />
          <MarketStatBadge
            label="Top Gainer"
            value="Xiaomi 16 Ultra"
            sub="+3.0% (24h)"
          />
          <MarketStatBadge
            label="Active Listings"
            value={`${MARKET_STATS.activeListings}`}
            sub="Supported global markets"
          />
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)] w-max">
            {(["all", "gainers", "losers"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                  filter === f ? "bg-[var(--bg-card-hover)] text-white shadow-sm border border-[var(--border-focus)]" : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[var(--text-muted)] font-medium">Sort by:</span>
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)]">
              {(["rank", "price", "change"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                    sortBy === s ? "bg-[var(--bg-card-hover)] text-white border border-[var(--border-focus)]" : "text-[var(--text-secondary)] hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStocks.map((stock, i) => (
            <PhoneCard
              key={stock.id}
              stock={stock}
              onClick={setSelectedStock}
              index={i}
            />
          ))}
        </div>

        {/* Modal - Simplified and elegant */}
        {selectedStock && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedStock(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full max-w-lg bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)] flex items-center justify-center text-2xl">
                    {selectedStock.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">{selectedStock.name}</h3>
                    <div className="text-[11px] font-mono text-[var(--text-secondary)] mt-1">{selectedStock.ticker}</div>
                  </div>
                </div>
                <button onClick={() => setSelectedStock(null)} className="text-[var(--text-muted)] hover:text-white p-1">
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)]">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">Current Price</div>
                  <div className="text-xl font-semibold font-mono text-white">{"$" + selectedStock.price.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)]">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">AI Target (30D)</div>
                  <div className="text-xl font-semibold font-mono text-white">${selectedStock.aiPrediction.toLocaleString()}</div>
                </div>
              </div>

              <h4 className="text-xs font-semibold text-[var(--text-secondary)] mb-3 uppercase tracking-wider">Specifications</h4>
              <div className="space-y-2">
                {Object.entries(selectedStock.specs).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between py-2 border-b border-[var(--border-light)] last:border-0">
                    <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">{key}</span>
                    <span className="text-xs font-medium text-white">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
