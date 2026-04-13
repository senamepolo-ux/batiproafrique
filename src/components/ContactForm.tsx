"use client";

export default function ContactForm() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-mocha-dark mb-2">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-concrete-light bg-white-cream focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-mocha-dark mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-concrete-light bg-white-cream focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
            placeholder="votre@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-mocha-dark mb-2">
            Sujet
          </label>
          <input
            id="subject"
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-concrete-light bg-white-cream focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
            placeholder="Le sujet de votre message"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-mocha-dark mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-concrete-light bg-white-cream focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors resize-none"
            placeholder="Votre message..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3.5 rounded-xl font-semibold tracking-wide transition-all hover:shadow-lg"
        >
          Envoyer le message
        </button>
      </form>

      <div className="mt-12 text-center text-cement-gray text-sm">
        <p>Vous pouvez aussi nous écrire directement à :</p>
        <p className="text-mocha-dark font-semibold mt-1">contact@batiproafrique.com</p>
      </div>
    </section>
  );
}
