"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine
} from "recharts";
import { PHONE_STOCKS, PhoneStock, formatPrice } from "@/lib/mockData";

const TIME_RANGES = ["1H", "24H", "7D", "1M", "1Y"] as const;
type TimeRange = typeof TIME_RANGES[number];

function getChartData(stock: PhoneStock, range: TimeRange) {
  const history = stock.priceHistory;
  const limits: Record<TimeRange, number> = {
    "1H": 1,
    "24H": 24,
    "7D": 168,
    "1M": Math.min(history.length, 720),
    "1Y": history.length,
  };
  const slice = history.slice(-limits[range]);

  return slice.map((p, i) => {
    const date = new Date(p.time);
    let label = "";
    if (range === "1H") label = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    else if (range === "24H") label = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    else if (range === "7D") label = date.toLocaleDateString([], { weekday: "short" });
    else if (range === "1M") label = date.toLocaleDateString([], { month: "short", day: "numeric" });
    else label = date.toLocaleDateString([], { month: "short" });

    return { ...p, label, index: i };
  });
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null;
  const val = payload[0]?.value;
  return (
    <div className="rounded-lg p-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-xl">
      <div className="text-[10px] mb-1 font-semibold uppercase tracking-wider text-[var(--text-muted)]">{label}</div>
      <div className="text-sm font-semibold font-mono text-white">
        ${val?.toLocaleString()}
      </div>
    </div>
  );
}

export default function ChartsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedStock, setSelectedStock] = useState<PhoneStock>(PHONE_STOCKS[0]);
  const [timeRange, setTimeRange] = useState<TimeRange>("24H");
  const [chartData, setChartData] = useState(() => getChartData(PHONE_STOCKS[0], "24H"));

  useEffect(() => {
    setChartData(getChartData(selectedStock, timeRange));
  }, [selectedStock, timeRange]);

  const isUp = selectedStock.changePercent >= 0;
  const strokeColor = isUp ? "var(--color-up)" : "var(--color-down)";
  const firstPrice = chartData[0]?.price ?? selectedStock.price;
  const lastPrice = chartData[chartData.length - 1]?.price ?? selectedStock.price;
  const chartChange = ((lastPrice - firstPrice) / firstPrice) * 100;

  return (
    <section id="charts" ref={ref} className="py-24 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
            Advanced Charts
          </h2>
          <p className="text-[var(--text-secondary)] font-medium">
            Analyze historical price trends with precision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
          {/* Main chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)] overflow-hidden flex flex-col"
          >
            <div className="p-6 pb-4 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border-light)]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{selectedStock.emoji}</span>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {selectedStock.name}
                  </h3>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-card-hover)] font-mono text-[var(--text-secondary)] border border-[var(--border-light)]">
                    {selectedStock.ticker}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold font-mono text-white tracking-tight">
                    {formatPrice(selectedStock.price)}
                  </span>
                  <span
                    className={`text-sm font-medium font-mono ${chartChange >= 0 ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}
                  >
                    {chartChange >= 0 ? "+" : ""}{chartChange.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Time ranges */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-light)]">
                {TIME_RANGES.map((r) => (
                  <button
                    key={r}
                    onClick={() => setTimeRange(r)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      timeRange === r ? "bg-[var(--bg-primary)] text-white shadow-sm border border-[var(--border-focus)]" : "text-[var(--text-secondary)] hover:text-white"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedStock.id}-${timeRange}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-[360px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={strokeColor} stopOpacity={0.1} />
                          <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
                      <XAxis
                        dataKey="label"
                        tick={{ fill: "var(--text-muted)", fontSize: 10, fontWeight: 500 }}
                        tickLine={false}
                        axisLine={false}
                        interval="preserveStartEnd"
                        dy={10}
                      />
                      <YAxis
                        tick={{ fill: "var(--text-muted)", fontSize: 10, fontWeight: 500, fontFamily: "monospace" }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => `$${v}`}
                        domain={["auto", "auto"]}
                        dx={-10}
                        orientation="right"
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ stroke: "var(--border-focus)", strokeWidth: 1, strokeDasharray: "4 4" }} />
                      <ReferenceLine y={firstPrice} stroke="var(--border-light)" strokeDasharray="3 3" />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke={strokeColor}
                        strokeWidth={2}
                        fill="url(#chartGradient)"
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <h4 className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2 px-1">Watchlist</h4>
            {PHONE_STOCKS.map((stock) => (
              <button
                key={stock.id}
                onClick={() => setSelectedStock(stock)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all border text-left ${
                  selectedStock.id === stock.id 
                    ? "bg-[var(--bg-card-hover)] border-[var(--border-focus)] shadow-sm" 
                    : "bg-[var(--bg-card)] border-[var(--border-light)] hover:border-[var(--border-focus)] hover:bg-[var(--bg-card-hover)]"
                }`}
              >
                <span className="text-xl">{stock.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{stock.model}</div>
                  <div className="text-[10px] font-mono text-[var(--text-secondary)]">{stock.ticker}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-medium text-white">${stock.price.toLocaleString()}</div>
                  <div className={`text-[10px] font-mono font-medium ${stock.changePercent >= 0 ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}>
                    {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
