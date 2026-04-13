"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-mocha-deep via-mocha-deep/70 to-mocha-deep/30" />

      {/* Grain Texture */}
      <div className="grain-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo Animation */}
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="w-14 h-14 bg-terracotta rounded-xl flex items-center justify-center shadow-xl">
              <span className="text-white font-logo font-bold text-3xl">B</span>
            </div>
            <div className="text-left">
              <span className="font-logo text-4xl lg:text-5xl text-white-cream font-bold block leading-none">
                BatiPro
              </span>
              <span className="text-sand-gold text-sm tracking-[0.35em] uppercase">
                Afrique
              </span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`font-heading text-4xl sm:text-5xl lg:text-7xl text-white-cream leading-tight mb-6 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Construire en Afrique,{" "}
          <span className="text-terracotta">autrement</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-mocha-cream text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Guides experts, prix actualisés et conseils pratiques pour réussir
          votre projet de construction au Sénégal et en Afrique francophone.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#articles"
            className="inline-flex items-center space-x-2 bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:shadow-xl hover:shadow-terracotta/30 transform hover:-translate-y-1"
          >
            <span>Découvrir nos guides</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#articles" className="animate-bounce-slow block">
          <svg className="w-8 h-8 text-mocha-cream/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Ad Slot - Banner sous le hero */}
      {/* GOOGLE ADSENSE : Hero Banner */}
    </section>
  );
}
