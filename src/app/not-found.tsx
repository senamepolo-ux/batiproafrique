import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white-cream flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-logo font-bold text-2xl">B</span>
          </div>
          <div className="text-left">
            <span className="font-logo text-2xl text-mocha-dark font-bold block leading-none">BatiPro</span>
            <span className="text-sand-gold text-xs tracking-[0.3em] uppercase">Afrique</span>
          </div>
        </div>

        {/* 404 */}
        <h1 className="font-heading text-8xl text-terracotta font-bold mb-4">404</h1>
        <h2 className="font-heading text-2xl text-mocha-dark mb-4">
          Page introuvable
        </h2>
        <p className="text-cement-gray mb-8 leading-relaxed">
          Cette page n'existe pas ou a été déplacée. Retournez à l'accueil pour découvrir nos guides sur la construction au Sénégal.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/articles/"
            className="border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Voir les articles
          </Link>
        </div>
      </div>
    </div>
  );
}
