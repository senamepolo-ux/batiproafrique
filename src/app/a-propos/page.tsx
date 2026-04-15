import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "BatiPro Afrique : votre guide expert pour comprendre la construction et le BTP au Sénégal et en Afrique francophone.",
};

export default function AProposPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-mocha-deep">
        <div className="grain-overlay absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl text-white-cream mb-4">
            À Propos de BatiPro Afrique
          </h1>
          <p className="text-mocha-light text-lg max-w-2xl mx-auto">
            Votre source d&apos;information de référence sur la construction et le BTP
            en Afrique francophone.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2 className="font-heading text-2xl text-mocha-dark mb-6">Notre mission</h2>
          <p className="text-cement-gray leading-relaxed mb-6">
            BatiPro Afrique est né d&apos;un constat simple : quand on veut construire
            au Sénégal, les informations fiables sur les prix, les matériaux et les
            démarches sont rares et dispersées. Nous avons créé ce guide pour aider
            tous ceux qui veulent se lancer dans un projet de construction, même sans
            connaissances techniques.
          </p>

          <h2 className="font-heading text-2xl text-mocha-dark mb-6 mt-12">Notre approche</h2>
          <p className="text-cement-gray leading-relaxed mb-6">
            BatiPro Afrique est un guide expert qui rend l&apos;information sur la
            construction accessible à tous. Nous recherchons, vérifions et
            simplifions les données pour vous aider à comprendre les coûts, choisir
            les bons matériaux et éviter les arnaques. Notre but : que chaque
            Sénégalais puisse construire en toute confiance. Partagez nos articles
            à ceux qui en ont besoin !
          </p>

          <h2 className="font-heading text-2xl text-mocha-dark mb-6 mt-12">Nos engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-mocha-cream p-6 rounded-xl">
              <h3 className="font-heading text-lg text-mocha-dark mb-2">Données vérifiées</h3>
              <p className="text-cement-gray text-sm">
                Chaque prix, chaque réglementation est vérifié auprès de sources
                professionnelles et actualisé régulièrement.
              </p>
            </div>
            <div className="bg-mocha-cream p-6 rounded-xl">
              <h3 className="font-heading text-lg text-mocha-dark mb-2">Accès gratuit</h3>
              <p className="text-cement-gray text-sm">
                Tous nos contenus sont et resteront en accès libre. La connaissance
                du BTP doit être accessible à tous.
              </p>
            </div>
            <div className="bg-mocha-cream p-6 rounded-xl">
              <h3 className="font-heading text-lg text-mocha-dark mb-2">Focus Afrique</h3>
              <p className="text-cement-gray text-sm">
                Nos contenus sont spécifiquement adaptés aux réalités du terrain
                africain : matériaux locaux, climat, réglementations.
              </p>
            </div>
            <div className="bg-mocha-cream p-6 rounded-xl">
              <h3 className="font-heading text-lg text-mocha-dark mb-2">Mises à jour</h3>
              <p className="text-cement-gray text-sm">
                Les prix et réglementations évoluent vite. Nous mettons à jour nos
                articles pour refléter la réalité du marché.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
