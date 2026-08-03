/**
 * Configuration de la newsletter BatiPro Afrique.
 *
 * Le site est en export statique (`output: "export"`), il n'y a donc pas
 * d'API route côté serveur. Le formulaire poste directement vers Brevo,
 * qui redirige ensuite vers /newsletter-confirmee/.
 *
 * Formulaire Brevo utilisé : "Newsletter BatiPro Afrique"
 * Liste de destination : "Newsletter BatiPro"
 * Double opt-in : activé (conformité RGPD)
 * Redirection après envoi : /newsletter-confirmee/
 *
 * Le formulaire attend trois champs, tous obligatoires côté Brevo :
 * - EMAIL               : l'adresse saisie par le visiteur
 * - email_address_check : piège anti-robot, doit rester vide
 * - locale              : langue des messages Brevo ("fr")
 *
 * Tant que l'URL est vide, le formulaire s'affiche désactivé plutôt que
 * de faire croire aux visiteurs qu'ils sont inscrits.
 */
export const BREVO_FORM_ACTION =
  "https://405998e4.sibforms.com/serve/MUIFALrwCEZNnzqPwKTDEPuXon_PPgZ4kaMM15Ybc_3ycp2XbdOgbVCv1UxrAXbjuJ4WdqCIQV6FiA4oRsIyF5MJ8dm8KOFzyCAwWdQ1bmy3IAXTz8qB-l4BUn7RgexLpUgbmwdFNfQkrqvbGbLhVNOzK7qOgXju8msAPKODLr0EtcqSBC5c4aWaEyDOP8uga7YukaE8zLbgZr0PEw==";

export const isNewsletterConfigured = BREVO_FORM_ACTION.length > 0;
