"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : "bg-mocha-deep/90"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-terracotta rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
              <span className="text-white font-logo font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-logo text-xl lg:text-2xl text-white-cream font-bold leading-tight tracking-wide">
                BatiPro
              </span>
              <span className="text-sand-gold text-xs tracking-[0.25em] uppercase -mt-1">
                Afrique
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-mocha-cream hover:text-sand-gold transition-colors text-sm tracking-wide uppercase"
            >
              Accueil
            </Link>
            <Link
              href="/#articles"
              className="text-mocha-cream hover:text-sand-gold transition-colors text-sm tracking-wide uppercase"
            >
              Articles
            </Link>
            <Link
              href="/a-propos/"
              className="text-mocha-cream hover:text-sand-gold transition-colors text-sm tracking-wide uppercase"
            >
              À Propos
            </Link>
            <Link
              href="/contact/"
              className="text-mocha-cream hover:text-sand-gold transition-colors text-sm tracking-wide uppercase"
            >
              Contact
            </Link>
            <button className="bg-terracotta hover:bg-terracotta/80 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-terracotta/25 transform hover:-translate-y-0.5">
              Newsletter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white-cream p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-mocha/30 mt-2 pt-4 space-y-3">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block text-mocha-cream hover:text-sand-gold py-2 text-sm uppercase tracking-wide">
              Accueil
            </Link>
            <Link href="/#articles" onClick={() => setMenuOpen(false)} className="block text-mocha-cream hover:text-sand-gold py-2 text-sm uppercase tracking-wide">
              Articles
            </Link>
            <Link href="/a-propos/" onClick={() => setMenuOpen(false)} className="block text-mocha-cream hover:text-sand-gold py-2 text-sm uppercase tracking-wide">
              À Propos
            </Link>
            <Link href="/contact/" onClick={() => setMenuOpen(false)} className="block text-mocha-cream hover:text-sand-gold py-2 text-sm uppercase tracking-wide">
              Contact
            </Link>
            <button className="w-full bg-terracotta text-white py-2.5 rounded-full text-sm font-semibold mt-2">
              Newsletter
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
