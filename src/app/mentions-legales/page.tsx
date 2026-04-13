import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site BatiPro Afrique.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 bg-mocha-deep">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl lg:text-4xl text-white-cream">
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8 text-cement-gray leading-relaxed">
          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong>batiproafrique.com</strong> est édité par BatiPro Afrique.<br />
              Adresse : Dakar, Sénégal<br />
              Email : contact@batiproafrique.com<br />
              Directeur de la publication : BatiPro Afrique
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">2. Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc.<br />
              Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
              Site web : vercel.com
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus (textes, images, graphismes, logo, icônes, etc.)
              présents sur le site batiproafrique.com est protégé par les lois relatives
              à la propriété intellectuelle. Toute reproduction, représentation,
              modification, publication ou adaptation de tout ou partie des éléments du
              site est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">4. Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et
              sont régulièrement mises à jour. Toutefois, elles peuvent contenir des
              inexactitudes ou des omissions. Les prix, réglementations et données
              techniques sont fournis à titre indicatif et ne sauraient engager la
              responsabilité de BatiPro Afrique. Nous vous recommandons de toujours
              vérifier les informations auprès de professionnels qualifiés avant toute
              décision.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">5. Cookies</h2>
            <p>
              Le site utilise des cookies pour améliorer l&apos;expérience utilisateur et à
              des fins statistiques (Google Analytics). Des cookies publicitaires
              peuvent également être déposés par nos partenaires publicitaires (Google
              AdSense). Vous pouvez configurer votre navigateur pour refuser les
              cookies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit sénégalais. En cas
              de litige, les tribunaux compétents de Dakar seront seuls compétents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
