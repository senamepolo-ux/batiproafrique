"use client";

import { useEffect, useRef, useState } from "react";
import type { Fournisseur } from "@/lib/articles";

/**
 * Bloc « source vérifiée » présentant le fournisseur auprès duquel les
 * tarifs d'un article ont été relevés.
 *
 * Le parti pris visuel est délibéré : ce bloc ne doit pas ressembler à une
 * publicité mais à une citation de source. Pas de bouton d'appel à
 * l'action, pas de majuscules criardes. Le logo, les coordonnées, la date
 * du relevé, rien de plus.
 *
 * L'apparition se déclenche à l'entrée dans le champ de vision : le logo
 * arrive en premier, les informations suivent.
 */
export default function FournisseurCard({ f }: { f: Fournisseur }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respecte le réglage système de réduction des animations
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Le délai passe par un style inline : Tailwind ne compile pas les
  // classes construites dynamiquement.
  const apparait = `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return (
    <aside
      ref={ref}
      className="my-10 border-l-4 border-terracotta bg-mocha-cream rounded-r-lg overflow-hidden"
      aria-label={`Source des tarifs : ${f.nom}`}
    >
      <div className="p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        {/* Logo */}
        <div
          className={apparait}
          style={visible ? { transitionDelay: "0ms" } : undefined}
        >
          <div
            className={`shrink-0 rounded-lg flex items-center justify-center w-40 h-24 ${
              f.logoFondSombre ? "bg-mocha-deep p-4" : "bg-white-cream p-3"
            }`}
          >
            <img
              src={f.logo}
              alt={f.nom}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Informations */}
        <div className="flex-1 min-w-0">
          <div
            className={apparait}
            style={visible ? { transitionDelay: "150ms" } : undefined}
          >
            <p className="font-heading text-xl lg:text-2xl text-mocha-deep leading-tight">
              {f.nom}
            </p>
            <p className="text-cement-gray text-sm mt-1">{f.activite}</p>
            <p className="text-cement-gray text-sm">{f.implantation}</p>
          </div>

          <div
            className={`mt-4 space-y-1 text-sm ${apparait}`}
            style={visible ? { transitionDelay: "300ms" } : undefined}
          >
            {f.site && (
              <p>
                <a
                  href={`https://${f.site.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-terracotta hover:underline break-words"
                >
                  {f.site.replace(/^https?:\/\//, "")}
                </a>
              </p>
            )}
            {f.email && (
              <p>
                <a
                  href={`mailto:${f.email}`}
                  className="text-mocha-dark hover:text-terracotta transition-colors break-words"
                >
                  {f.email}
                </a>
              </p>
            )}
            {f.telephone && (
              <p>
                <a
                  href={`tel:${f.telephone.replace(/\s/g, "")}`}
                  className="text-mocha-dark hover:text-terracotta transition-colors"
                >
                  {f.telephone}
                </a>
              </p>
            )}
          </div>

          <p
            className={`mt-4 text-xs uppercase tracking-widest text-sand-gold ${apparait}`}
            style={visible ? { transitionDelay: "450ms" } : undefined}
          >
            Tarifs vérifiés en {f.dateVerification}
          </p>
        </div>
      </div>
    </aside>
  );
}
