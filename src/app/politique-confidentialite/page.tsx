import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et gestion des données personnelles de BatiPro Afrique.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 bg-mocha-deep">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl lg:text-4xl text-white-cream">
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8 text-cement-gray leading-relaxed">
          <p>
            <strong className="text-mocha-dark">Dernière mise à jour :</strong> 12 avril 2026
          </p>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">1. Introduction</h2>
            <p>
              BatiPro Afrique (ci-après « nous ») s&apos;engage à protéger la vie privée
              des visiteurs de son site batiproafrique.com. Cette politique de
              confidentialité décrit les types de données que nous collectons, comment
              nous les utilisons et les mesures que nous prenons pour les protéger.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">2. Données collectées</h2>
            <p>Nous pouvons collecter les types de données suivants :</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite</li>
              <li>Données fournies volontairement : nom, adresse email (formulaire de contact, newsletter)</li>
              <li>Cookies : cookies techniques, analytiques et publicitaires</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">3. Utilisation des données</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Améliorer le contenu et la navigation du site</li>
              <li>Analyser le trafic via Google Analytics 4</li>
              <li>Envoyer des newsletters (uniquement si vous vous êtes inscrit)</li>
              <li>Afficher des publicités personnalisées via Google AdSense</li>
              <li>Répondre à vos demandes de contact</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">4. Google Analytics</h2>
            <p>
              Ce site utilise Google Analytics 4, un service d&apos;analyse web fourni par
              Google LLC. Google Analytics utilise des cookies pour analyser votre
              utilisation du site. Les informations générées sont transmises et stockées
              par Google sur des serveurs aux États-Unis. Nous avons activé
              l&apos;anonymisation des adresses IP.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">5. Google AdSense</h2>
            <p>
              Ce site utilise Google AdSense, un service de publicité fourni par Google
              LLC. Google AdSense utilise des cookies pour afficher des publicités
              pertinentes en fonction de vos visites sur ce site et d&apos;autres sites sur
              Internet. Vous pouvez désactiver la publicité personnalisée en visitant
              les paramètres de publicité Google (adssettings.google.com).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">6. Cookies</h2>
            <p>
              Les cookies sont de petits fichiers texte stockés sur votre appareil. Nous
              utilisons :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques</strong> : Google Analytics, pour comprendre comment le site est utilisé</li>
              <li><strong>Cookies publicitaires</strong> : Google AdSense, pour afficher des publicités pertinentes</li>
            </ul>
            <p className="mt-3">
              Vous pouvez configurer votre navigateur pour bloquer les cookies. Cela
              pourrait toutefois affecter certaines fonctionnalités du site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">7. Vos droits</h2>
            <p>
              Conformément à la loi sénégalaise sur la protection des données
              personnelles, vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données. Pour exercer ces droits, contactez-nous à :
              contact@batiproafrique.com
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">8. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications seront publiées sur cette
              page avec une date de mise à jour.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-mocha-dark mb-3">9. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité,
              contactez-nous par email : <strong>contact@batiproafrique.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
