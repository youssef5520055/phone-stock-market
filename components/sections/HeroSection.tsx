"use client";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Subtle Background Mesh / Grid */}
      <div className="absolute inset-0 bg-grid-minimal pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-blue)]/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Top subtle glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--accent-blue)]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-light)] bg-[var(--bg-card)] backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[var(--color-up)]" />
          <span className="text-xs font-medium text-[var(--text-secondary)]">
            Market is Open
          </span>
          <div className="w-px h-3 bg-[var(--border-light)] mx-1" />
          <span className="text-xs font-medium text-white flex items-center gap-1">
            New Models Listed <ArrowRight size={12} />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[84px] font-semibold leading-[1.05] tracking-tight mb-8"
        >
          <span className="text-white">The Smartphone</span><br />
          <span className="text-[var(--text-secondary)]">Stock Exchange.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Trade, analyze, and track real-time phone prices with enterprise-grade data and AI-powered insights. The future of tech commodities is here.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#dashboard" className="btn-primary flex items-center gap-2 px-8 py-4 rounded-full text-[15px] w-full sm:w-auto">
            <Activity size={18} />
            View Live Markets
          </a>
          <a href="#charts" className="btn-secondary flex items-center gap-2 px-8 py-4 rounded-full text-[15px] w-full sm:w-auto">
            <BarChart3 size={18} />
            Explore Charts
          </a>
        </motion.div>
      </div>

      {/* Mockup Preview Area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1200px] mx-auto mt-24 px-6 relative z-10"
      >
        <div className="relative rounded-2xl md:rounded-[32px] bg-[#18181b] border border-[var(--border-light)] p-2 md:p-4 shadow-2xl overflow-hidden">
          {/* Mockup Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-light)] mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            <div className="ml-auto w-48 h-6 bg-[var(--bg-primary)] rounded-md border border-[var(--border-light)]" />
          </div>
          
          {/* Abstract Mockup Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 px-2">
            <div className="col-span-2 h-[300px] md:h-[400px] rounded-xl bg-[var(--bg-primary)] border border-[var(--border-light)] p-6 relative overflow-hidden">
               <div className="w-32 h-6 bg-[var(--bg-card-hover)] rounded-md mb-6" />
               <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--accent-blue)]/20 to-transparent opacity-50" />
               {/* Abstract chart line */}
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                 <path d="M0,80 Q20,90 40,60 T80,40 T100,20" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </div>
            <div className="flex flex-col gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex-1 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-light)] p-5">
                   <div className="w-10 h-10 rounded-lg bg-[var(--bg-card-hover)] mb-4" />
                   <div className="w-24 h-4 bg-[var(--bg-card-hover)] rounded mb-2" />
                   <div className="w-16 h-8 bg-white/10 rounded" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlay for blending */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#18181b] to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
