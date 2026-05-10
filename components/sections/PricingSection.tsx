"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { SUBSCRIPTION_PLANS } from "@/lib/mockData";

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" ref={ref} className="py-24 px-6 bg-[var(--bg-secondary)] border-y border-[var(--border-light)] relative overflow-hidden">
      
      {/* Background glow for popular plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--accent-blue)]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Plans for every investor.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-xl mx-auto font-light">
            Whether you&apos;re a hobbyist tracking your next upgrade or an institution analyzing global supply chains.
          </p>

          <div className="inline-flex items-center p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                !isAnnual ? "bg-[var(--bg-secondary)] text-white shadow-sm border border-[var(--border-focus)]" : "text-[var(--text-secondary)] hover:text-white border border-transparent"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual ? "bg-[var(--bg-secondary)] text-white shadow-sm border border-[var(--border-focus)]" : "text-[var(--text-secondary)] hover:text-white border border-transparent"
              }`}
            >
              Annually <span className="text-[10px] uppercase font-bold text-[var(--accent-blue-light)]">Save 25%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan, i) => {
            const price = isAnnual && plan.price > 0 ? Math.floor(plan.price * 0.75) : plan.price;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  isPopular 
                    ? "bg-[var(--bg-primary)] border border-[var(--accent-blue)]/50 shadow-2xl shadow-[var(--accent-blue)]/10 ring-1 ring-[var(--accent-blue)]/20" 
                    : "bg-[var(--bg-card)] border border-[var(--border-light)]"
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-[var(--accent-blue)] text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      {plan.price === 0 ? "Free" : `$${price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-sm text-[var(--text-muted)] font-medium">/mo</span>
                    )}
                  </div>
                  {isAnnual && plan.price > 0 && (
                    <div className="text-xs text-[var(--color-up)] font-medium mt-2">
                      Billed ${price * 12} yearly
                    </div>
                  )}
                </div>

                <button className={`w-full py-3 rounded-xl text-sm font-semibold transition-all mb-8 ${
                  isPopular ? "bg-[var(--accent-blue)] text-white hover:bg-[var(--accent-blue-light)]" : "bg-[var(--bg-card-hover)] text-white border border-[var(--border-light)] hover:border-[var(--border-focus)]"
                }`}>
                  {plan.cta}
                </button>

                <div className="flex-1">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">Includes</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                        <Check size={16} className={`mt-0.5 flex-shrink-0 ${isPopular ? "text-[var(--accent-blue-light)]" : "text-white"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
