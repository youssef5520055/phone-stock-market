"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { PhoneStock, formatPrice, formatLargeNumber, formatVolume } from "@/lib/mockData";

interface PhoneCardProps {
  stock: PhoneStock;
  onClick: (stock: PhoneStock) => void;
  index: number;
}

function MiniChart({ data, trend }: { data: { price: number }[]; trend: string }) {
  const chartData = data.slice(-24);
  const color = trend === "down" ? "var(--color-down)" : "var(--color-up)";
  
  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={chartData}>
        <Line
          type="monotone"
          dataKey="price"
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function PhoneCard({ stock, onClick, index }: PhoneCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const isUp = stock.changePercent >= 0;
  const TrendIcon = isUp ? TrendingUp : TrendingDown;
  const trendClass = isUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(stock)}
      className="cursor-pointer rounded-2xl bg-[var(--bg-card)] border border-[var(--border-light)] hover:border-[var(--border-focus)] transition-colors p-5 flex flex-col group relative"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-light)] flex items-center justify-center text-xl">
            {stock.emoji}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{stock.name}</h3>
            <div className="text-[11px] font-mono text-[var(--text-secondary)] mt-0.5">
              {stock.ticker}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold font-mono text-white tracking-tight">
            {formatPrice(stock.price)}
          </div>
          <div className={`text-[11px] font-medium font-mono flex items-center justify-end gap-1 ${trendClass}`}>
            <TrendIcon size={12} />
            {isUp ? "+" : ""}{stock.changePercent.toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="my-2 -mx-2">
        <MiniChart data={stock.priceHistory} trend={stock.trend} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-[var(--border-light)]">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">
            Volume
          </div>
          <div className="text-[11px] font-mono text-[var(--text-secondary)]">
            {formatVolume(stock.volume)}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">
            Mkt Cap
          </div>
          <div className="text-[11px] font-mono text-[var(--text-secondary)]">
            {formatLargeNumber(stock.marketCap)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
