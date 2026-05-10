"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Markets", href: "#dashboard" },
  { label: "Charts", href: "#charts" },
  { label: "Analysis", href: "#ai" },
  { label: "Compare", href: "#compare" },
  { label: "News", href: "#news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "glass border-[var(--border-light)]"
            : "bg-transparent border-transparent"
        }`}
        style={{ height: 64 }}
      >
        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black" />
              </div>
              <span className="font-semibold text-white tracking-tight text-[15px]">PhoneX</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-card-hover)] transition-all">
              <Search size={14} />
              <span>Search</span>
              <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded border border-[var(--border-light)] bg-[var(--bg-card)]">
                ⌘K
              </span>
            </button>
            <div className="hidden md:block w-px h-4 bg-[var(--border-light)]" />
            <a href="#pricing" className="hidden md:block text-sm font-medium text-white hover:text-[var(--text-secondary)] transition-colors">
              Log in
            </a>
            <a href="#pricing" className="hidden md:flex btn-primary px-4 py-1.5 rounded-full text-sm">
              Get Started
            </a>

            <button
              className="md:hidden p-2 text-[var(--text-secondary)] hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] pt-16 px-6 pb-6 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto py-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-[var(--border-light)] text-lg font-medium text-white"
                >
                  {link.label}
                  <ChevronRight size={18} className="text-[var(--text-secondary)]" />
                </a>
              ))}
            </div>
            <div className="pt-6 grid gap-4">
              <a href="#pricing" className="btn-secondary w-full py-3 rounded-xl text-center font-medium">Log in</a>
              <a href="#pricing" className="btn-primary w-full py-3 rounded-xl text-center font-medium">Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
