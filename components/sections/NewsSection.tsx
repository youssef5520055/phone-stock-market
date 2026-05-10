"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Bell, ArrowRight } from "lucide-react";
import { NEWS_FEED, NewsItem } from "@/lib/mockData";

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const impactColors = {
    high: "bg-red-500/10 text-red-500 border-red-500/20",
    medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    low: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border-light)] hover:border-[var(--border-focus)] transition-all cursor-pointer flex flex-col h-full"
    >
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {item.ticker && (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--bg-card-hover)] border border-[var(--border-light)] text-[var(--text-secondary)]">
            {item.ticker}
          </span>
        )}
        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${impactColors[item.impact]}`}>
          {item.impact.toUpperCase()} IMPACT
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-medium text-[var(--text-muted)]">
          {item.category}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-white leading-relaxed mb-4 flex-1 group-hover:text-[var(--accent-blue-light)] transition-colors">
        {item.headline}
      </h3>

      <div className="flex items-center justify-between pt-4 border-t border-[var(--border-light)]">
        <div className="text-[11px] font-medium text-[var(--text-secondary)]">
          {item.source}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-[var(--text-muted)]">{item.time}</span>
          <ExternalLink size={12} className="text-[var(--text-muted)] group-hover:text-[var(--accent-blue-light)] transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}

export default function NewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" ref={ref} className="py-24 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Breaking News Ticker Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)] mb-12"
        >
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500 text-white text-[10px] font-bold tracking-widest uppercase">
            <Bell size={10} /> Breaking
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-xs font-medium text-[var(--text-secondary)] flex gap-8">
              {NEWS_FEED.map((n, i) => <span key={i}><span className="text-white">{n.headline}</span> — {n.source}</span>)}
              {NEWS_FEED.map((n, i) => <span key={`dup-${i}`}><span className="text-white">{n.headline}</span> — {n.source}</span>)}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
              Market Intelligence
            </h2>
            <p className="text-[var(--text-secondary)] font-medium">
              Real-time news and analysis driving market volatility.
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-xs font-semibold text-[var(--accent-blue-light)] hover:text-white transition-colors">
            View All News <ArrowRight size={14} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {NEWS_FEED.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
