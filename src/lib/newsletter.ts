/**
 * Configuration de la newsletter BatiPro Afrique.
 *
 * Le site est en export statique (`output: "export"`), il n'y a donc pas
 * d'API route côté serveur. Le formulaire poste directement vers Brevo,
 * qui redirige ensuite vers /newsletter-confirmee/.
 *
 * POUR ACTIVER LA NEWSLETTER :
 * 1. Créer un compte sur brevo.com (plan gratuit)
 * 2. Aller dans Contacts > Formulaires > Créer un formulaire
 * 3. Récupérer l'URL d'action du formulaire (de la forme
 *    https://sibforms.com/serve/XXXXXXXXXXXX)
 * 4. Coller cette URL ci-dessous à la place de la chaîne vide
 * 5. Dans Brevo, configurer la redirection après inscription vers
 *    https://batiproafrique.com/newsletter-confirmee/
 * 6. Activer le double opt-in dans Brevo (conformité RGPD)
 *
 * Tant que l'URL est vide, le formulaire s'affiche désactivé plutôt que
 * de faire croire aux visiteurs qu'ils sont inscrits.
 */
export const BREVO_FORM_ACTION = "";

export const isNewsletterConfigured = BREVO_FORM_ACTION.length > 0;
