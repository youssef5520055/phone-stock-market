"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Droplets, Target } from "lucide-react";
import { PHONE_STOCKS, PhoneStock } from "@/lib/mockData";

export default function TrendingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"hot" | "cold" | "volume">("hot");

  let sortedStocks: PhoneStock[] = [];
  if (activeTab === "hot") sortedStocks = [...PHONE_STOCKS].sort((a, b) => b.changePercent - a.changePercent);
  if (activeTab === "cold") sortedStocks = [...PHONE_STOCKS].sort((a, b) => a.changePercent - b.changePercent);
  if (activeTab === "volume") sortedStocks = [...PHONE_STOCKS].sort((a, b) => b.volume - a.volume);

  const topItems = sortedStocks.slice(0, 5);
  const TABS = [
    { id: "hot", label: "Top Gainers", icon: Flame },
    { id: "cold", label: "Top Losers", icon: Droplets },
    { id: "volume", label: "Most Active", icon: Target },
  ] as const;

  return (
    <section id="trending" ref={ref} className="py-24 px-6 bg-[var(--bg-secondary)] border-y border-[var(--border-light)]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
              Market Movers
            </h2>
            <p className="text-[var(--text-secondary)] font-medium">
              Discover the most volatile and active assets today.
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)]">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === id ? "bg-[var(--bg-card-hover)] text-white shadow-sm border border-[var(--border-focus)]" : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                <Icon size={14} className={activeTab === id ? "text-[var(--accent-blue)]" : ""} />
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Leaderboard list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)] overflow-hidden"
          >
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 p-4 text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold border-b border-[var(--border-light)]">
              <div className="w-6 text-center">#</div>
              <div>Asset</div>
              <div className="text-right">Price</div>
              <div className="text-right w-20">24H Chg</div>
            </div>
            
            <div className="divide-y divide-[var(--border-light)]">
              {topItems.map((stock, i) => {
                const isUp = stock.changePercent >= 0;
                return (
                  <div key={stock.id} className="grid grid-cols-[auto_1fr_auto_auto] gap-4 p-4 items-center hover:bg-[var(--bg-card-hover)] transition-colors">
                    <div className="w-6 text-center text-xs font-mono text-[var(--text-muted)] font-medium">{i + 1}</div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-light)] flex items-center justify-center text-sm">
                        {stock.emoji}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{stock.name}</div>
                        <div className="text-[10px] font-mono text-[var(--text-secondary)]">{stock.ticker}</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold font-mono text-white text-right">
                      ${stock.price.toLocaleString()}
                    </div>
                    <div className={`text-xs font-medium font-mono text-right w-20 ${isUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}>
                      {isUp ? "+" : ""}{stock.changePercent.toFixed(2)}%
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Minimal Heatmap Data Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 h-max"
          >
            {PHONE_STOCKS.map((stock) => {
              const isUp = stock.changePercent >= 0;
              const intensity = Math.min(Math.abs(stock.changePercent) / 5, 1);
              
              // Minimal sophisticated coloring logic based on performance
              const bgClass = isUp 
                ? "bg-[rgba(16,185,129,0.05)] border-[rgba(16,185,129,0.2)] hover:border-[rgba(16,185,129,0.4)]" 
                : "bg-[rgba(239,68,68,0.05)] border-[rgba(239,68,68,0.2)] hover:border-[rgba(239,68,68,0.4)]";

              return (
                <div 
                  key={`heat-${stock.id}`}
                  className={`rounded-xl p-4 border transition-all ${bgClass}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[11px] font-mono font-medium text-[var(--text-secondary)]">{stock.ticker}</span>
                    <span className="text-sm">{stock.emoji}</span>
                  </div>
                  <div className="text-xs font-semibold font-mono text-white mb-1">
                    ${stock.price.toLocaleString()}
                  </div>
                  <div className={`text-[10px] font-mono font-medium ${isUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}>
                    {isUp ? "+" : ""}{stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
