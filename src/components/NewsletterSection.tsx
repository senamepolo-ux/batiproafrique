"use client";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-mocha-deep relative overflow-hidden">
      <div className="grain-overlay absolute inset-0" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <span className="text-sand-gold text-sm uppercase tracking-widest font-semibold">
          Newsletter
        </span>
        <h2 className="font-heading text-3xl lg:text-4xl text-white-cream mt-3 mb-4">
          Recevez nos prochains guides gratuitement
        </h2>
        <p className="text-mocha-light mb-8 max-w-xl mx-auto">
          Rejoignez notre communauté et soyez les premiers informés de nos nouveaux
          articles, guides de prix et conseils pratiques.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Votre adresse email"
            className="newsletter-input flex-1 px-5 py-3.5 rounded-full bg-mocha-dark/50 border border-mocha/30 text-white-cream placeholder-mocha-light text-sm"
            required
          />
          <button
            type="submit"
            className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-terracotta/25 transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            S&apos;inscrire
          </button>
        </form>
        <p className="text-mocha/50 text-xs mt-4">
          Pas de spam. Désabonnement en un clic.
        </p>
      </div>
    </section>
  );
}
