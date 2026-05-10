"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeftRight, ChevronDown } from "lucide-react";
import { PHONE_STOCKS, PhoneStock } from "@/lib/mockData";

const COMPARE_METRICS = [
  { label: "AI Score", key: "aiScore", unit: "/100", format: (v: number) => v },
  { label: "Price", key: "price", unit: "$", format: (v: number) => v.toLocaleString() },
  { label: "AI Confidence", key: "aiConfidence", unit: "%", format: (v: number) => v },
  { label: "Market Cap", key: "marketCap", unit: "B", format: (v: number) => (v / 1e9).toFixed(1) },
  { label: "Volume", key: "volume", unit: "K", format: (v: number) => (v / 1000).toFixed(0) },
];

const SPEC_KEYS = ["chip", "ram", "storage", "camera", "battery", "display", "os"] as const;

function PhoneSelector({ selected, onChange, exclude }: { selected: PhoneStock; onChange: (s: PhoneStock) => void; exclude: string; }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)] hover:border-[var(--border-focus)] hover:bg-[var(--bg-card-hover)] transition-all text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{selected.emoji}</span>
          <div>
            <div className="font-semibold text-sm text-white">{selected.name}</div>
            <div className="text-[10px] font-mono text-[var(--text-secondary)]">{selected.ticker}</div>
          </div>
        </div>
        <ChevronDown size={16} className="text-[var(--text-muted)]" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-2xl z-20 overflow-hidden">
          <div className="max-h-[300px] overflow-y-auto p-1">
            {PHONE_STOCKS.filter((s) => s.id !== exclude).map((stock) => (
              <button
                key={stock.id}
                onClick={() => { onChange(stock); setOpen(false); }}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--bg-card-hover)] transition-colors text-left"
              >
                <span className="text-xl">{stock.emoji}</span>
                <div>
                  <div className="text-xs font-semibold text-white">{stock.name}</div>
                  <div className="text-[10px] font-mono text-[var(--text-secondary)]">{stock.ticker}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CompareSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phone1, setPhone1] = useState<PhoneStock>(PHONE_STOCKS[0]);
  const [phone2, setPhone2] = useState<PhoneStock>(PHONE_STOCKS[1]);

  return (
    <section id="compare" ref={ref} className="py-24 px-6 bg-[var(--bg-secondary)] border-y border-[var(--border-light)]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">
            Side-by-Side Analysis
          </h2>
          <p className="text-[var(--text-secondary)] font-medium max-w-lg mx-auto">
            Compare technical specifications, market performance, and AI confidence scores across devices.
          </p>
        </motion.div>

        {/* Selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-8"
        >
          <PhoneSelector selected={phone1} onChange={setPhone1} exclude={phone2.id} />
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-light)] text-[var(--text-secondary)] flex-shrink-0">
            <ArrowLeftRight size={16} />
          </div>
          <PhoneSelector selected={phone2} onChange={setPhone2} exclude={phone1.id} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)] overflow-hidden"
        >
          {/* Performance Data */}
          <div className="p-6 border-b border-[var(--border-light)]">
            <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-6">Market Metrics</h3>
            <div className="space-y-4">
              {COMPARE_METRICS.map(({ label, key, unit, format }) => {
                const v1 = phone1[key as keyof PhoneStock] as number;
                const v2 = phone2[key as keyof PhoneStock] as number;
                const winner1 = v1 >= v2;
                
                return (
                  <div key={key} className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                    <div className={`text-right font-mono text-sm font-semibold ${winner1 ? "text-white" : "text-[var(--text-muted)]"}`}>
                      {unit === "$" ? "$" : ""}{format(v1)}{unit !== "$" ? unit : ""}
                    </div>
                    <div className="text-[10px] uppercase font-semibold tracking-wider text-[var(--text-secondary)] w-24 text-center">
                      {label}
                    </div>
                    <div className={`text-left font-mono text-sm font-semibold ${!winner1 ? "text-white" : "text-[var(--text-muted)]"}`}>
                      {unit === "$" ? "$" : ""}{format(v2)}{unit !== "$" ? unit : ""}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Specs Data */}
          <div className="p-6 bg-[var(--bg-primary)]">
            <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-6">Hardware Specifications</h3>
            <div className="space-y-4">
              {SPEC_KEYS.map((specKey) => (
                <div key={specKey} className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 py-2 border-b border-[var(--border-light)] last:border-0">
                  <div className="text-right text-xs font-medium text-[var(--text-secondary)]">
                    {phone1.specs[specKey]}
                  </div>
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-[var(--text-muted)] w-24 text-center">
                    {specKey}
                  </div>
                  <div className="text-left text-xs font-medium text-[var(--text-secondary)]">
                    {phone2.specs[specKey]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
