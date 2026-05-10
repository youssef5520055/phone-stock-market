"use client";
import { Globe, MessageCircle, Share2, PlayCircle, Mail, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Dashboard", "Charts", "AI Predictions", "Compare", "Portfolio", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Partners", "Security"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"],
  Support: ["Help Center", "Contact", "Status", "Community", "Discord"],
};

const SOCIAL_LINKS = [
  { icon: MessageCircle, label: "Twitter / X" },
  { icon: Globe, label: "GitHub" },
  { icon: Share2, label: "LinkedIn" },
  { icon: PlayCircle, label: "YouTube" },
  { icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-light)] pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black" />
              </div>
              <span className="font-semibold text-white tracking-tight text-[15px]">PhoneX Market</span>
            </a>
            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed max-w-sm mb-8">
              The world&apos;s first enterprise-grade smartphone stock market. Professional tools for tracking tech commodity valuations.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors group flex items-center gap-1 w-max"
                    >
                      {link}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-[var(--text-muted)]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border-light)] gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} PhoneX Market Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-up)]" />
              <span className="text-xs font-medium text-[var(--text-secondary)]">All systems operational</span>
            </div>
            <select className="bg-transparent text-xs text-[var(--text-secondary)] outline-none cursor-pointer hover:text-white transition-colors">
              <option value="en">English (US)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
