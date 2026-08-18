import { MetadataRoute } from "next";

/**
 * Le site n'avait aucun robots.txt.
 *
 * Ce n'est pas anodin pour l'icône affichée dans les résultats Google :
 * le robot qui récupère les favicons doit pouvoir accéder aux fichiers.
 * En l'absence de robots.txt, certains outils considèrent l'exploration
 * comme indéterminée. On l'explicite, et on y déclare le sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Pages de service, sans intérêt pour la recherche
      disallow: ["/newsletter-confirmee/", "/bienvenue/"],
    },
    sitemap: "https://batiproafrique.com/sitemap.xml",
  };
}
