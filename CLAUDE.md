# BatiPro Afrique — Mémoire du Projet

> Ce fichier est la source unique de vérité du projet. Toute conversation Claude doit le lire en premier pour comprendre la vision, l'état actuel, les règles éditoriales et les prochaines étapes.

---

## 1. La Vision

BatiPro Afrique n'est pas un blog. C'est la première brique d'un écosystème qui va digitaliser la construction en Afrique francophone. L'objectif final, assumé sans détour, est de devenir millionnaire puis milliardaire en résolvant des vrais problèmes pour la communauté.

### Les 4 phases

**Phase 1 — Maintenant → 6 mois : Le blog, construire l'audience**
- Revenus cible : 0 à 50 000 FCFA/mois (AdSense)
- Objectif : devenir LA référence construction au Sénégal sur Google
- État : en cours

**Phase 2 — 6 mois → 2 ans : La plateforme, connecter les acteurs**
- Annuaire de professionnels certifiés (architectes, BET, bureaux de contrôle, entreprises)
- Les pros payent pour être référencés
- Revenus cible : 500 000 à 5 millions FCFA/mois

**Phase 3 — 2 → 5 ans : L'application, digitaliser la construction**
- Calculateur de coût en ligne
- Réservation d'architectes et d'ingénieurs
- Suivi de chantier à distance (crucial pour la diaspora)
- Commande de matériaux avec livraison
- Revenus cible : 10 à 50 millions FCFA/mois (commissions)

**Phase 4 — 5 → 10 ans : L'écosystème, devenir incontournable**
- **BatiPro Marketplace** : achat de matériaux en gros, négociation directe avec les usines
- **BatiPro Academy** : formation certifiante pour maçons, techniciens, conducteurs de travaux
- **BatiPro Finance** : partenariats bancaires pour crédits construction, commission sur chaque crédit
- **Expansion Afrique francophone** : Côte d'Ivoire, Mali, Guinée, Cameroun. Marché total : des milliers de milliards FCFA

### Pourquoi ça marchera
- Le problème est massif et concret : les gens se font arnaquer, construisent mal, perdent leurs économies
- Personne ne fait ça sérieusement en Afrique francophone
- La diaspora envoie des milliards chaque année pour construire au pays, sans pouvoir surveiller
- L'impact communautaire et le revenu vont dans le même sens, pas en opposition

---

## 2. État Actuel

### Technique
- **Stack** : Next.js 14 (App Router), export statique, TypeScript, Tailwind CSS
- **Déploiement** : GitHub → Vercel (auto-deploy)
- **Articles** : Markdown avec frontmatter gray-matter dans `content/articles/`
- **Domaine** : batiproafrique.com
- **Analytics** : Google Analytics 4 (ID : G-16JKCEH07G)
- **SEO** : Google Search Console vérifié, sitemap.xml, schema.org, canonical URLs avec trailing slash

### Contenu
- **11 articles publiés**, sélectionnés pour leur qualité (4 articles faibles ont été supprimés)
- Ordre par `priority` dans le frontmatter (1 = plus important)
- Image héros + photos immersives dans le texte (`sectionImages`)
- Système de crédits photos complet (`imageCredit` + `credit` sur chaque image)

### Les 11 articles (par priority)
1. `10-etapes-construction-maison` — Guide Pratique
2. `arnaques-chantiers-senegal` — Conseils
3. `role-ingenieur-genie-civil-senegal` — Guide Pratique
4. `construire-sans-architecte-senegal` — Réglementation
5. `construire-terre-afrique-kere` — Matériaux (article phare, Kéré)
6. `cout-construction-maison-senegal-2026` — Budget
7. `documents-achat-terrain-senegal` — Réglementation
8. `guide-permis-construire-senegal` — Réglementation
9. `construire-avec-5-millions-senegal` — Budget
10. `toiture-zinc-tuile-beton-senegal` — Matériaux
11. `maison-container-senegal` — Innovation

---

## 3. Règles Éditoriales

Ces directives viennent du mémoire PFE de Polo et sont adaptées au blog. Elles ne sont pas négociables. Elles font la signature de BatiPro.

### Sur la forme et la ponctuation

1. **Ponctuation soignée.** Chaque signe a un sens. Le point clôt une idée ; le point-virgule relie deux idées proches ; la virgule aère et rythme ; les deux-points introduisent une explication. Un texte bien ponctué se lit comme on respire.
2. **Zéro tiret long (em dash).** Remplacer systématiquement par des virgules, des parenthèses ou des points-virgules selon le contexte. Le tiret long est la signature de l'IA et brise la crédibilité du texte.
3. **Paragraphes aérés et bien construits.** Chaque paragraphe suit la structure : idée générale → argument qui la soutient → exemple qui l'illustre. Le tout relié par des connecteurs logiques (en effet, par conséquent, toutefois, ainsi, de plus, autrement dit, en définitive, c'est précisément...).
4. **Phrases de transition entre les paragraphes.** Créer un fil conducteur fluide d'un bout à l'autre de l'article. Chaque paragraphe prépare le suivant.

### Sur le style

1. **Style clair, direct, sans fioritures inutiles, mais avec de la substance et une touche personnelle.** Fidèle au style de l'introduction du mémoire PFE (posée, argumentée, enracinée dans le contexte africain).
2. **Rester atypique et original.** Le blog doit se distinguer des sites génériques. Pas de copier-coller du ton américain, pas de superlatifs creux. On parle à des Sénégalais, à des Africains, avec leurs mots et leurs réalités.
3. **Compréhensible.** Les gens doivent comprendre ce qu'on veut leur faire comprendre. Cela passe par un bon développement caractérisé par de bons paragraphes, pas par du jargon technique inutile.

### Sur le fond

1. **Zéro phrase en l'air.** Chaque chiffre, chaque affirmation technique doit être juste. Pas de fausses statistiques inventées.
2. **Contexte africain assumé.** On parle de latérite, de BTC, de baobabs, de Casamance, de Kéré, de saison sèche et d'hivernage. Pas de "mois chauds" quand on peut dire "saison sèche".
3. **Identité africaine dans l'esthétique.** Matériaux locaux, couleurs chaudes, architecture qui respire.

### Formule d'article (structure type)

Chaque article suit cette structure :

1. **HOOK** : première phrase qui plante une image forte ou un chiffre qui frappe
2. **PROBLÈME** : poser le contexte, le problème réel que le lecteur a
3. **DÉVELOPPEMENT** : sections H2 bien construites, chacune avec :
   - Idée générale
   - Argument qui la soutient
   - Exemple concret (chiffres, cas au Sénégal)
   - Transition vers la section suivante
4. **CONCLUSION ACTIONNABLE** : que faire concrètement, récapitulatif qui donne envie d'agir

### Frontmatter type

```yaml
---
title: "Titre clair avec bénéfice ou question"
slug: "slug-url-friendly"
date: "2026-MM-DD"
priority: N  # 1 = plus important
category: "Catégorie"
excerpt: "Résumé en 2 phrases qui donne envie de cliquer."
image: "/images/articles/nom.jpg"
imageCredit: "© Photographe — Projet/Architecte"
readTime: "X min"
tags: ["tag1", "tag2"]
sectionImages:
  - url: "/images/articles/image.jpg"
    alt: "Description pour SEO et accessibilité"
    caption: "Légende poétique qui dialogue avec le texte"
    after: "Titre exact du H2 après lequel insérer l'image"
    credit: "© Photographe — Projet/Architecte"
---
```

---

## 4. Règles du Projet

1. **Qualité > Quantité.** Mieux vaut 11 articles excellents que 30 articles moyens. Google préfère, les lecteurs préfèrent, la marque se construit mieux.
2. **Matériaux locaux mis en avant.** BTC, latérite, terre cuite, bois local. On ne copie pas les modèles européens ou américains sans réfléchir.
3. **Crédits photos rigoureux.** Toutes les photos créditent leur photographe et leur projet. Aucune photo sans crédit si la source est connue.
4. **Pas de tiret long (em dash).** Jamais, sous aucun prétexte. Virgule, parenthèse, point-virgule à la place.
5. **Pas de création d'accounts ou de transactions financières à la place de Polo.** Claude exécute, Polo décide.

---

## 5. Prochaines Étapes

### Court terme (semaines qui viennent)
- Surveiller l'indexation Google Search Console après correction du sitemap (trailing slashes)
- Attendre que les 6 pages "Explorées non indexées" soient indexées (délai Google : 2-6 semaines pour un nouveau site)
- Activer AdSense quand le site aura plus d'ancienneté et de trafic
- Partager les articles sur WhatsApp, Facebook, LinkedIn pour générer les premiers clics

### Moyen terme (3-6 mois)
- Écrire 5 à 10 nouveaux articles stratégiques (en respectant la qualité)
- Commencer à collecter des emails (newsletter) pour préparer la Phase 2
- Identifier les premiers architectes/ingénieurs sénégalais intéressés par un annuaire

### Long terme
- Phase 2 : développer la plateforme d'annuaire
- Phase 3 : développer l'application mobile
- Phase 4 : expansion Afrique francophone, marketplace, academy, finance

---

## 6. Sources de vérité techniques

- `content/articles/*.md` — Les articles
- `src/lib/articles.ts` — Types et fonctions de lecture
- `src/app/articles/[slug]/page.tsx` — Composant article avec images immersives et crédits
- `src/app/sitemap.ts` — Sitemap pour Google (attention : trailing slashes)
- `src/app/layout.tsx` — Metadata globale, GA4, schema.org, favicon
- `next.config.js` — `trailingSlash: true` (important pour le sitemap)

---

## 7. Ce que je (Claude) dois toujours faire

1. **Lire ce fichier en premier** avant toute action sur le projet
2. **Respecter la formule éditoriale** pour tout nouvel article
3. **Pas de tiret long**, jamais, même si c'est "tentant"
4. **Consulter Polo** pour toute décision d'orientation (choix de sujet, direction du projet)
5. **Exécuter, pas décider** pour les questions business critiques
6. **Créer des commits propres** avec des messages en français explicites
7. **Considérer la vision long terme** (les 4 phases) quand on me demande une nouvelle fonctionnalité
