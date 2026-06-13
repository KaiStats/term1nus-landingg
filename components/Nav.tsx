"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(26, 29, 41, 0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--divider)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <polygon
              points="15,1 28,8.5 28,21.5 15,29 2,21.5 2,8.5"
              stroke="#d4af37"
              strokeWidth="1.5"
              fill="none"
              className="transition-opacity group-hover:opacity-70"
            />
            <polygon
              points="15,7 22.5,11.5 22.5,18.5 15,23 7.5,18.5 7.5,11.5"
              fill="#d4af37"
              fillOpacity="0.1"
            />
            <circle cx="15" cy="15" r="3.5" fill="#d4af37" fillOpacity="0.85" />
          </svg>
          <span className="font-bold text-xl tracking-tight" style={{ color: "var(--copy)" }}>
            Term<span style={{ color: "var(--gold)" }}>1</span>nus
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#security" className="nav-link">Security</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="nav-link hidden sm:block text-sm font-medium">
            Sign in
          </a>
          <a href="#pricing" className="btn-gold px-5 py-2.5 text-sm">
            Start Free
          </a>
        </div>
      </div>
    </nav>
  );
}
