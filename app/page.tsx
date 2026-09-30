"use client";

import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarketDashboard from "@/components/sections/MarketDashboard";
import ChartsSection from "@/components/sections/ChartsSection";
import TrendingSection from "@/components/sections/TrendingSection";
import AISection from "@/components/sections/AISection";
import CompareSection from "@/components/sections/CompareSection";
import NewsSection from "@/components/sections/NewsSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/sections/Footer";
import MarketTicker from "@/components/ui/MarketTicker";

export default function HomePage() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--border-light)] shadow-sm">
        <Navbar />
        <div className="border-t border-[var(--border-light)]">
          <MarketTicker />
        </div>
      </div>

      <main style={{ paddingTop: 104 }}>
        <HeroSection />
        <MarketDashboard />
        <ChartsSection />
        <TrendingSection />
        <AISection />
        <CompareSection />
        <NewsSection />
        <PricingSection />
      </main>

      <Footer />
    </>
  );
}
