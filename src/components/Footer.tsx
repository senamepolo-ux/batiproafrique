import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-mocha-deep text-mocha-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-terracotta rounded-lg flex items-center justify-center">
                <span className="text-white font-logo font-bold text-xl">B</span>
              </div>
              <div>
                <span className="font-logo text-xl text-white-cream font-bold">BatiPro</span>
                <span className="text-sand-gold text-xs tracking-[0.25em] uppercase block -mt-1">Afrique</span>
              </div>
            </div>
            <p className="text-mocha-light text-sm leading-relaxed">
              Le guide gratuit de la construction et du BTP en Afrique francophone. Conseils, guides et données actualisées pour vos projets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sand-gold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-mocha-light hover:text-white-cream transition-colors text-sm">Accueil</Link></li>
              <li><Link href="/#articles" className="text-mocha-light hover:text-white-cream transition-colors text-sm">Articles</Link></li>
              <li><Link href="/a-propos/" className="text-mocha-light hover:text-white-cream transition-colors text-sm">À Propos</Link></li>
              <li><Link href="/contact/" className="text-mocha-light hover:text-white-cream transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h4 className="font-heading text-sand-gold text-lg mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li><span className="text-mocha-light text-sm">Coûts & Budget</span></li>
              <li><span className="text-mocha-light text-sm">Matériaux</span></li>
              <li><span className="text-mocha-light text-sm">Guide Pratique</span></li>
              <li><span className="text-mocha-light text-sm">Réglementation</span></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-heading text-sand-gold text-lg mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><Link href="/mentions-legales/" className="text-mocha-light hover:text-white-cream transition-colors text-sm">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite/" className="text-mocha-light hover:text-white-cream transition-colors text-sm">Politique de confidentialité</Link></li>
            </ul>
            {/* Réseaux sociaux */}
            <div className="flex space-x-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-mocha-dark/50 flex items-center justify-center hover:bg-terracotta transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-mocha-dark/50 flex items-center justify-center hover:bg-terracotta transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-mocha-dark/50 flex items-center justify-center hover:bg-terracotta transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-mocha-dark/50 mt-12 pt-8 text-center">
          <p className="text-mocha-light text-sm">
            © {new Date().getFullYear()} BatiPro Afrique. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
