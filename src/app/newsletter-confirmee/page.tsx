import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscription confirmée",
  description:
    "Votre inscription à la newsletter BatiPro Afrique a bien été enregistrée.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NewsletterConfirmeePage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 bg-mocha-deep">
        <div className="grain-overlay absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="text-sand-gold text-sm uppercase tracking-widest font-semibold">
            Newsletter
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl text-white-cream mt-3 mb-4">
            Merci, votre inscription est enregistrée
          </h1>
          <p className="text-mocha-light text-lg max-w-2xl mx-auto">
            Vous recevrez nos prochains guides, analyses de prix et conseils
            pratiques directement dans votre boîte mail.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="font-heading text-2xl text-mocha-dark mb-6">
          Une dernière étape
        </h2>
        <p className="text-cement-gray leading-relaxed mb-6">
          Pour valider définitivement votre inscription, ouvrez l&apos;email de
          confirmation que nous venons de vous envoyer et cliquez sur le lien
          qu&apos;il contient. Cette étape nous permet de nous assurer que
          personne n&apos;a inscrit votre adresse à votre place.
        </p>
        <p className="text-cement-gray leading-relaxed mb-10">
          Si vous ne trouvez pas cet email dans les prochaines minutes, pensez à
          vérifier votre dossier de courriers indésirables ; les premiers messages
          d&apos;un nouvel expéditeur y atterrissent parfois.
        </p>

        <h2 className="font-heading text-2xl text-mocha-dark mb-6">
          En attendant, continuez la lecture
        </h2>
        <p className="text-cement-gray leading-relaxed mb-8">
          Nos guides les plus consultés vous attendent, du budget de construction
          aux démarches administratives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#articles"
            className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-terracotta/25 text-center"
          >
            Voir tous les articles
          </Link>
          <Link
            href="/"
            className="border border-mocha/30 hover:border-terracotta text-mocha-dark hover:text-terracotta px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all text-center"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </div>
  );
}
