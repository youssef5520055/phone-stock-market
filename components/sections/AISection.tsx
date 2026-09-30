"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Brain, LineChart, Target, AlertTriangle } from "lucide-react";
import { AI_PREDICTIONS } from "@/lib/mockData";

export default function AISection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai" ref={ref} className="relative py-32 px-6 bg-[var(--bg-primary)] overflow-hidden">
      {/* Refined mesh gradient background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-light)] text-xs font-semibold text-[var(--accent-blue-light)] mb-6">
              <Sparkles size={14} /> Intelligence
            </div>
            
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              Predictive Market Intelligence.
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] mb-8 font-light leading-relaxed">
              Our proprietary machine learning models analyze historical pricing, supply chain metrics, and consumer sentiment to forecast smartphone valuation shifts with up to 94% accuracy.
            </p>

            <div className="space-y-6">
              {[
                { icon: Brain, title: "Sentiment Analysis", desc: "Real-time parsing of global tech news and social metrics." },
                { icon: LineChart, title: "Pattern Recognition", desc: "Historical price depreciation curve matching." },
                { icon: Target, title: "Price Targets", desc: "30, 60, and 90-day predictive valuation targets." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-light)] flex items-center justify-center flex-shrink-0 text-[var(--accent-blue-light)]">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Data Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)] shadow-2xl p-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-6 border-b border-[var(--border-light)] pb-4">
                <h3 className="text-sm font-semibold text-white">Model Confidence</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] border border-[var(--border-light)] px-2 py-0.5 rounded">Live Data</span>
              </div>

              <div className="space-y-4 relative z-10">
                {AI_PREDICTIONS.map((pred, i) => (
                  <div key={pred.id} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-light)] flex items-center justify-between group hover:border-[var(--border-focus)] transition-all">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">??</div>
                      <div>
                        <div className="text-sm font-semibold text-white">{pred.name}</div>
                        <div className="text-[10px] uppercase font-semibold text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                          {pred.confidence > 85 ? <Sparkles size={10} className="text-[var(--accent-blue)]" /> : <AlertTriangle size={10} className="text-yellow-500" />}
                          {pred.confidence}% Confidence
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs font-semibold text-[var(--text-secondary)] mb-1">Target</div>
                      <div className="text-lg font-mono font-semibold text-white tracking-tight">${pred.predictedPrice}</div>
                    </div>

                    <div className="hidden sm:block text-right">
                      <div className="text-xs font-semibold text-[var(--text-secondary)] mb-1">Signal</div>
                      <div className={`text-xs font-semibold px-2 py-1 rounded border ${
                        pred.signal === "BUY" ? "bg-[rgba(16,185,129,0.1)] text-[var(--color-up)] border-[rgba(16,185,129,0.2)]" :
                        pred.signal === "SELL" ? "bg-[rgba(239,68,68,0.1)] text-[var(--color-down)] border-[rgba(239,68,68,0.2)]" :
                        "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-light)]"
                      }`}>
                        {pred.signal}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Abstract decorative graphic behind the list */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] border-y border-[var(--border-light)] opacity-50 flex flex-col justify-center gap-8 z-0 pointer-events-none">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-blue-light)] to-transparent opacity-20" />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent opacity-30" />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-blue-light)] to-transparent opacity-20" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
