"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-mocha-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">
              Qui sommes-nous
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-mocha-dark mt-3 mb-6">
              L&apos;expertise du BTP africain, à portée de clic
            </h2>
            <p className="text-cement-gray leading-relaxed mb-4">
              Nous sommes une équipe d&apos;ingénieurs en génie civil, d&apos;architectes et de
              professionnels du BTP passionnés par le développement de la construction
              en Afrique francophone.
            </p>
            <p className="text-cement-gray leading-relaxed mb-6">
              Notre mission : fournir des guides pratiques, des données actualisées et
              des conseils d&apos;experts pour aider particuliers et professionnels à
              mener à bien leurs projets de construction, principalement au Sénégal.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white-cream rounded-full text-sm text-mocha-dark border border-concrete-light">
                Génie Civil
              </span>
              <span className="px-4 py-2 bg-white-cream rounded-full text-sm text-mocha-dark border border-concrete-light">
                Architecture
              </span>
              <span className="px-4 py-2 bg-white-cream rounded-full text-sm text-mocha-dark border border-concrete-light">
                Budget &amp; Coûts
              </span>
              <span className="px-4 py-2 bg-white-cream rounded-full text-sm text-mocha-dark border border-concrete-light">
                Réglementation
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="reveal relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Plans d'architecte pour un projet de construction en Afrique"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white-cream p-4 rounded-xl shadow-lg border border-concrete-light hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <span className="text-terracotta text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-mocha-dark text-sm">Données 2026</p>
                  <p className="text-cement-gray text-xs">Prix et réglementations à jour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
