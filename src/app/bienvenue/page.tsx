import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bienvenue dans la communauté",
  description:
    "Votre inscription à la newsletter BatiPro Afrique est confirmée. Voici par où commencer.",
  robots: {
    index: false,
    follow: true,
  },
};

const guidesPourCommencer = [
  {
    href: "/articles/10-etapes-construction-maison/",
    categorie: "Guide Pratique",
    titre: "Les 12 étapes pour construire sa maison de A à Z",
    description:
      "De l'achat du terrain à la remise des clés, le parcours complet, sans zone d'ombre.",
  },
  {
    href: "/articles/arnaques-chantiers-senegal/",
    categorie: "Conseils",
    titre: "Les 8 arnaques les plus courantes sur les chantiers",
    description:
      "Vol de matériaux, faux devis, malfaçons cachées : les reconnaître avant d'en être victime.",
  },
  {
    href: "/articles/cout-construction-maison-senegal-2026/",
    categorie: "Coûts & Budget",
    titre: "Combien coûte vraiment une maison au Sénégal en 2026",
    description:
      "Prix au mètre carré, budgets types, coût des matériaux : les chiffres réels du marché.",
  },
];

export default function BienvenuePage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 bg-mocha-deep">
        <div className="grain-overlay absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="text-sand-gold text-sm uppercase tracking-widest font-semibold">
            Inscription confirmée
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl text-white-cream mt-3 mb-4">
            Bienvenue dans la communauté
          </h1>
          <p className="text-mocha-light text-lg max-w-2xl mx-auto">
            Votre adresse est validée. Vous faites désormais partie des lecteurs
            qui veulent construire en connaissance de cause.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="font-heading text-2xl text-mocha-dark mb-6">
          Ce que vous allez recevoir
        </h2>
        <p className="text-cement-gray leading-relaxed mb-6">
          Une lettre par mois, pas davantage. Chaque envoi contient nos nouveaux
          guides, l&apos;évolution réelle des prix des matériaux au Sénégal, et
          les pièges que nous voyons revenir sur les chantiers.
        </p>
        <p className="text-cement-gray leading-relaxed mb-12">
          Pas de publicité déguisée, pas de contenu de remplissage. Si un mois
          nous n&apos;avons rien d&apos;utile à vous dire, nous ne vous écrivons
          pas.
        </p>

        <h2 className="font-heading text-2xl text-mocha-dark mb-6">
          Par où commencer
        </h2>
        <p className="text-cement-gray leading-relaxed mb-8">
          En attendant la prochaine lettre, voici les trois guides que nos
          lecteurs consultent le plus.
        </p>

        <div className="space-y-4 mb-12">
          {guidesPourCommencer.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block bg-mocha-cream hover:bg-concrete-light border border-mocha-light/40 hover:border-terracotta rounded-lg p-6 transition-all group"
            >
              <span className="text-terracotta text-xs uppercase tracking-widest font-semibold">
                {guide.categorie}
              </span>
              <h3 className="font-heading text-xl text-mocha-deep mt-2 mb-2 group-hover:text-terracotta transition-colors">
                {guide.titre}
              </h3>
              <p className="text-cement-gray text-sm leading-relaxed">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>

        <h2 className="font-heading text-2xl text-mocha-dark mb-6">
          Une question, une expérience à partager
        </h2>
        <p className="text-cement-gray leading-relaxed mb-8">
          Vous construisez en ce moment et quelque chose vous bloque ? Vous avez
          vécu une situation dont d&apos;autres pourraient tirer une leçon ?
          Écrivez-nous, nous lisons tout.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact/"
            className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-terracotta/25 text-center"
          >
            Nous écrire
          </Link>
          <Link
            href="/#articles"
            className="border border-mocha/30 hover:border-terracotta text-mocha-dark hover:text-terracotta px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all text-center"
          >
            Voir tous les articles
          </Link>
        </div>
      </section>
    </div>
  );
}
