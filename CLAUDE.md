# BatiPro Afrique — Mémoire du Projet

> Ce fichier est la source unique de vérité du projet. Toute conversation Claude doit le lire en premier pour comprendre la vision, l'état actuel, les règles éditoriales et les prochaines étapes.

---

## 1. La Vision

### La mission d'abord, le reste ensuite

BatiPro Afrique n'est pas un blog. C'est un projet d'émancipation par la connaissance. Avant toute logique économique, le but est de faire en sorte que **plus personne ne se fasse leurrer** quand il construit au Sénégal ou ailleurs en Afrique francophone. Trop de familles ont perdu leurs économies sur des chantiers mal menés, des terrains mal achetés, des matériaux mal choisis. Ça s'arrête avec BatiPro.

Trois convictions guident ce projet :

1. **La connaissance doit circuler.** Un père de famille qui veut construire doit pouvoir comprendre les étapes, les prix, les pièges, les démarches administratives, sans avoir à payer un consultant. Cette connaissance existe ; elle est aujourd'hui enfermée dans la tête de quelques professionnels. BatiPro la met à disposition de tous.

2. **L'Afrique doit produire son propre savoir.** Les chercheurs, docteurs, architectes, ingénieurs africains ont des choses à dire. Ils publient peu, ou publient dans des revues inaccessibles au grand public. BatiPro devient une plateforme où ces acteurs peuvent partager leurs articles, leurs recherches, leurs retours d'expérience, et construire ensemble un corpus de connaissances enraciné dans les réalités africaines.

3. **Aider la communauté et gagner sa vie vont dans le même sens.** Le modèle économique sert la mission, pas l'inverse. Plus on aide, plus on gagne la confiance, plus le projet grandit. L'objectif de devenir millionnaire puis milliardaire est la conséquence du succès de la mission, pas sa finalité.

### La dimension recherche

BatiPro n'est pas qu'un blog qui vulgarise. C'est aussi un écosystème qui valorise la production scientifique et technique africaine. À terme :

- Les professionnels (architectes, ingénieurs, docteurs, chercheurs) peuvent publier leurs articles sur BatiPro
- Les étudiants en génie civil, architecture, urbanisme peuvent partager leurs mémoires et projets
- Les retours d'expérience de chantiers réels alimentent une base de données ouverte
- BatiPro devient la référence bibliographique pour qui s'intéresse à la construction en Afrique francophone

C'est ainsi qu'on construit un contrepoids au monopole occidental sur la production de savoir en architecture et en génie civil.

### Les 4 phases

**Phase 1 — Maintenant → 6 mois : Le blog, construire l'audience et la confiance**
- Revenus cible : 0 à 50 000 FCFA/mois (AdSense)
- Objectif : devenir LA référence construction au Sénégal sur Google
- Mission : démocratiser la connaissance, éviter les arnaques
- État : en cours

**Phase 2 — 6 mois → 2 ans : La plateforme, connecter les acteurs et valoriser la recherche**
- Annuaire de professionnels certifiés (architectes, BET, bureaux de contrôle, entreprises)
- Les pros payent pour être référencés
- **Volet recherche** : espace où les chercheurs, docteurs, architectes et ingénieurs peuvent publier leurs articles scientifiques, retours d'expérience, mémoires
- **Partage de savoirs** : contributions d'étudiants et de praticiens, modération éditoriale pour garantir la qualité
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
- Le partage du savoir crée une communauté d'experts africains, ce qui renforce la légitimité de la plateforme et attire toujours plus de contributeurs

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
- **12 articles publiés**, sélectionnés pour leur qualité (4 articles faibles ont été supprimés)
- Ordre par `priority` dans le frontmatter (1 = plus important)
- Image héros + photos immersives dans le texte (`sectionImages`)
- Système de crédits photos complet (`imageCredit` + `credit` sur chaque image)
- Bloc fournisseur vérifié (`fournisseurs` dans le frontmatter)

### Les 12 articles (par priority)
1. `10-etapes-construction-maison` — Guide Pratique
2. `arnaques-chantiers-senegal` — Conseils
3. `role-ingenieur-genie-civil-senegal` — Guide Pratique
4. `bim-afrique-comprendre-methode-construction` — Innovation (tiré du PFE)
5. `construire-sans-architecte-senegal` — Réglementation
6. `construire-terre-afrique-kere` — Matériaux (article phare, Kéré)
7. `cout-construction-maison-senegal-2026` — Budget
8. `documents-achat-terrain-senegal` — Réglementation
9. `guide-permis-construire-senegal` — Réglementation
10. `construire-avec-5-millions-senegal` — Budget
11. `toiture-zinc-tuile-beton-senegal` — Matériaux
12. `maison-container-senegal` — Innovation

### Email et newsletter (opérationnels)
- `contact@batiproafrique.com` : redirection Namecheap vers Gmail, plus « Envoyer en tant que » configuré dans Gmail
- Newsletter **Brevo**, formulaire branché, double opt-in, liste « Newsletter BatiPro »
- Parcours : formulaire → `/newsletter-confirmee/` → email de confirmation → `/bienvenue/`
- Domaine authentifié DKIM et DMARC
- Détail complet dans la mémoire Claude, fichier `batiproafrique_email_config.md`

### Première collaboration entreprise (août 2026)
**New Life Containers** (Dakar et Toulon) a trouvé l'article sur le conteneur et nous a transmis ses tarifs spontanément. Publié dans `maison-container-senegal` avec le bloc fournisseur.

C'est le **modèle reproductible** de la Phase 2 : l'entreprise donne ses données, BatiPro les publie avec rigueur et la cite comme source. Aucun argent n'est échangé. Prochaine cible : Elementerre.

### Indexation Google (état au 18 août 2026)
- **11 pages indexées, 6 articles jamais explorés** (statut « Détectée, actuellement non indexée », dernière exploration « Sans objet »)
- Ce n'est pas un défaut du site : Google rationne l'exploration d'un domaine jeune sans liens entrants
- Ce qui le débloque durablement : des liens depuis d'autres sites et du trafic réel, pas des réglages techniques
- Les motifs « Page avec redirection » et « Introuvable (404) » sont **normaux** : trailing slash voulu, et article supprimé. **Ne jamais cliquer « Valider la correction » dessus**, la vérification échouerait.
- 175 clics depuis Google sur la période, requête « batipro » en hausse de 164 %

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

### Sur le sourçage : la règle qui vaut toutes les autres

Cette discipline est née d'un audit d'août 2026 qui a révélé **quatre erreurs de prix dans un seul article**, dont une d'un facteur dix. Elle n'est pas théorique, elle vient d'erreurs réelles.

**Tout chiffre porte sa source et sa date.** Un prix sans date est une rumeur bien présentée. Les articles se terminent par une section Sources, et le frontmatter porte un champ `dateReleve`.

**Ne jamais se citer soi-même sans le savoir.** En cherchant à vérifier un chiffre de BatiPro, le premier résultat Google est souvent... l'article de BatiPro. Ou un site qui l'a recopié. **Toujours exclure `batiproafrique.com` des recherches de vérification.** C'est ainsi qu'une information inventée devient une vérité apparente.

**Croiser au moins deux sources indépendantes**, et vérifier par le calcul quand c'est possible. Exemple réel : les prix du fer à la barre, convertis en prix à la tonne via les masses linéiques normalisées, ont validé la cohérence de la source.

**Distinguer le prix officiel du prix payé.** Au Sénégal, les prix homologués du ciment et du fer ne sont pas appliqués sur le marché. Toujours afficher les deux. La règle donnée au lecteur : *budgétez au prix du marché, négociez au prix homologué*.

**Attention aux unités.** Le sable et le gravier se vendent au camion (benne standard de 20 m³), pas au mètre cube. Confondre les deux fausse un budget d'un facteur dix.

**Ne citer que des sources qui élèvent.** Institutions (ANSD, Primature), presse spécialisée (ArchDaily, Dezeen, Architectural Record), études, sources primaires, fournisseurs identifiés. **Jamais de blog commercial concurrent** : les citer place BatiPro à leur niveau et leur envoie de l'autorité. Si l'info n'existe que là, l'attribuer en texte sans lien.

**Dire ce qu'on ne sait pas.** Il n'existe aucune source officielle du coût au m² au Sénégal. L'article le dit. Assumer une incertitude vaut mieux qu'une fausse précision, et c'est ce qui distingue BatiPro de ses concurrents.

**Corriger sans se justifier.** Une correction se voit dans le contenu, pas dans un paragraphe d'explication. Une ligne suffit : *prix vérifiés et actualisés le [date]*.

**Ne jamais employer un superlatif invérifiable.** « Acteur incontournable », « le meilleur », « le leader » : bannis. On écrit ce qu'on peut prouver.

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

1. **Qualité > Quantité.** Mieux vaut 12 articles excellents que 30 articles moyens. Google préfère, les lecteurs préfèrent, la marque se construit mieux.
2. **Matériaux locaux mis en avant.** BTC, latérite, terre cuite, bois local. On ne copie pas les modèles européens ou américains sans réfléchir.
3. **Crédits photos rigoureux.** Toutes les photos créditent leur photographe et leur projet. Aucune photo sans crédit si la source est connue.
4. **Pas de tiret long (em dash).** Jamais, sous aucun prétexte. Virgule, parenthèse, point-virgule à la place.
5. **Pas de création d'accounts ou de transactions financières à la place de Polo.** Claude exécute, Polo décide.
6. **Montrer avant de publier.** Construire en local, faire valider par Polo, et ne pousser qu'à son feu vert explicite. Cette règle vient d'un manquement d'août 2026.
7. **Créditer les acteurs africains.** Quand un ouvrage africain est salué, on retient l'architecte star et on oublie ceux qui ont fabriqué la matière et tenu le chantier. BatiPro les nomme. C'est le sujet même du projet.
8. **Une entreprise citée est une source, pas un partenaire.** Aucun article sponsorisé, aucune promesse de référencement, aucun superlatif. La citation dit d'où vient le chiffre, rien de plus. C'est plus crédible et ça sert mieux l'entreprise.

---

## 5. Prochaines Étapes

### La priorité qui domine tout : la diffusion

Le site est techniquement solide, les articles sont rigoureux, la newsletter fonctionne. **Le goulot n'est plus la qualité, c'est que personne ne sait que ça existe.**

Six articles sur douze n'ont jamais été explorés par Google, faute d'autorité de domaine. Aucun réglage technique ne corrige ça : seuls des liens entrants et du trafic réel augmentent le budget d'exploration.

Tout le reste, calculateur compris, produit peu d'effet tant que ce point n'avance pas.

### Court terme
- **Diffuser** : message WhatsApp au réseau, réseaux sociaux, groupes de construction et de diaspora
- Demander l'indexation manuelle des 6 articles jamais explorés, dans Search Console
- Envoyer le lien de l'article container à New Life Containers, sans survendre
- Contacter **Elementerre** sur le même modèle, en s'appuyant sur l'article Kéré qui les crédite déjà
- Envoyer la première newsletter (brouillon prêt dans `content/newsletters/`) une fois qu'il y a de vrais abonnés
- Activer AdSense quand le site aura plus d'ancienneté et de trafic

### Moyen terme (3-6 mois)
- Écrire 5 à 10 nouveaux articles stratégiques, dont le sujet **maison à étage contre plain-pied**, supprimé mais que Google cherche encore
- Terminer le calculateur : compléter les postes manquants (toiture, enduits, coffrage, terrassement), puis l'interface animée
- Faire valider les hypothèses d'ingénierie du calculateur par Polo, désormais ingénieur diplômé
- Étoffer l'annuaire naissant : chaque entreprise citée est une fiche du futur annuaire
- Envisager un service payant de **relecture de devis**, qui alimenterait le contenu en prix de terrain réels

### Long terme
- Phase 2 : développer la plateforme d'annuaire
- Phase 3 : développer l'application mobile
- Phase 4 : expansion Afrique francophone, marketplace, academy, finance

---

## 6. Identité Visuelle

Cette section est la référence pour **Claude Design** et pour toute génération visuelle (maquettes, composants, landing pages, prototypes). Elle garantit que chaque nouveau design reste fidèle à l'ADN de BatiPro Afrique.

### L'esprit BatiPro en une phrase

Une identité **chaude, enracinée, africaine et sérieuse**. Pas un blog techy. Pas une startup clinique. Pas un site corporate froid. BatiPro sent la terre, la latérite chauffée par le soleil, le bois, le chantier bien tenu ; mais BatiPro est aussi rigoureux, lisible, digne de confiance.

### Palette de couleurs (Tailwind — `tailwind.config.ts`)

Toutes les couleurs sont déjà configurées dans Tailwind. **Ne jamais en inventer de nouvelles**, toujours réutiliser celles-ci :

| Nom Tailwind | Hex | Usage |
|--------------|-----|-------|
| `mocha` (DEFAULT) | `#A47764` | Accents, boutons secondaires, hover |
| `mocha-light` | `#C4A494` | Surfaces douces, séparateurs |
| `mocha-cream` | `#F5EDE8` | Fonds de sections, cartes |
| `mocha-dark` | `#6B4D3E` | Texte secondaire, éléments d'accentuation |
| `mocha-deep` | `#3D2B22` | Texte principal, titres sombres |
| `terracotta` | `#C4663A` | Couleur d'action principale, CTA, liens importants |
| `sand-gold` | `#D4A96A` | Accents chauds, highlights |
| `cement-gray` | `#8A8A8A` | Texte neutre, métadonnées, dates |
| `concrete-light` | `#E8E0D8` | Fonds alternatifs, surfaces neutres |
| `earth-green` | `#4A6741` | Accents nature, environnement, durabilité |
| `white-cream` | `#FFFDF9` | Fond principal du site (pas de blanc pur) |

**Règle d'or** : jamais de `#FFFFFF` pur ni de `#000000` pur. Le blanc, c'est `white-cream`. Le "noir", c'est `mocha-deep`.

### Typographies

Trois polices, chacune avec un rôle précis :

| Famille Tailwind | Police | Usage |
|-----------------|--------|-------|
| `font-logo` | Cormorant Garamond (serif) | Logo BatiPro Afrique uniquement |
| `font-heading` | DM Serif Display (serif) | Titres H1, H2, H3, légendes poétiques des images immersives |
| `font-body` | Source Sans 3 (sans-serif) | Corps de texte, paragraphes, UI, boutons |

Contraste serif/sans-serif voulu : les titres respirent, le corps de texte reste neutre et lisible.

### Principes visuels

1. **Chaleur avant tout.** Les couleurs dominantes sont chaudes (mocha, terracotta, sand-gold). Jamais de bleu froid générique, jamais de palette "SaaS startup".
2. **Espace et respiration.** Grandes marges, paragraphes aérés, photos immersives plein écran. Le site doit respirer comme une cour intérieure sénégalaise.
3. **Photos immersives en largeur pleine.** Les images héros et les `sectionImages` occupent la largeur complète, avec légende poétique en overlay et crédit discret.
4. **Typo serif pour les titres, sans-serif pour le corps.** Le contraste crée de l'élégance sans rigidité.
5. **Lignes simples, pas de gradients criards.** Aplats de couleur, ombres très douces, arrondis modérés (`rounded-lg`, pas de `rounded-full` partout).

### Ce qu'on veut

- Photographies réelles de constructions africaines, chantiers, matériaux locaux (latérite, BTC, bois, tuile béton)
- Projets d'architectes africains ou tropicaux (Kéré, MAPA, Jorge Bolio, Rozana Montiel, Puranun Arquitectos, etc.)
- Crédits photo systématiques
- Icônes minimalistes, filaires (lucide-react, heroicons-outline)
- Mise en page éditoriale, proche du magazine imprimé

### Ce qu'on évite absolument

- Stock photos occidentales génériques (familles blanches devant maisons de banlieue américaine)
- Illustrations vectorielles cartoon type "undraw" ou "humaaans"
- Palettes froides (bleu/violet/cyan SaaS)
- Dégradés fluos, néons, effets "glassmorphism"
- Emojis dans les titres ou le corps de texte
- Polices script fantaisie ou Comic Sans
- Images générées par IA qui montrent des doigts à six phalanges ou des proportions impossibles

### Contraintes culturelles

- **Images africaines, contextes africains.** Même pour illustrer un concept abstrait, on trouve une image qui parle au public sénégalais et ouest-africain.
- **Vocabulaire visuel local.** Latérite, BTC, moucharabieh, toit en tuile béton ou tôle bac-alu, cour intérieure, arbre à palabres, plutôt que clichés européens.
- **Dignité.** Pas d'images misérabilistes de l'Afrique. On montre des chantiers bien tenus, des familles dignes, des architectes au travail, pas des clichés de précarité.

### Composants existants à réutiliser

Avant de créer un nouveau composant, vérifier ce qui existe déjà :

- `src/components/Header.tsx` — Navigation principale
- `src/components/Footer.tsx` — Pied de page
- `src/components/ArticleCard.tsx` — Carte d'article (page d'accueil, listes)
- `src/app/articles/[slug]/page.tsx` — Template d'article avec `ImmersiveImage`

Tout nouveau composant doit s'intégrer à cette famille visuelle, pas créer une rupture stylistique.

### Brief type pour Claude Design

Quand on lance une génération visuelle, partir de ce brief :

> « Design dans l'univers BatiPro Afrique : palette mocha/terracotta/sand-gold sur fond white-cream (`#FFFDF9`), titres en DM Serif Display, corps en Source Sans 3, photos réelles de constructions africaines (latérite, BTC, tuile béton), ambiance éditoriale chaude et enracinée. Pas de bleu SaaS, pas de dégradés criards, pas de stock occidental. Respirations larges, paragraphes aérés, images immersives en largeur pleine. »

---

## 7. Sources de vérité techniques

- `content/articles/*.md` — Les articles
- `src/lib/articles.ts` — Types et fonctions de lecture
- `src/app/articles/[slug]/page.tsx` — Composant article avec images immersives et crédits
- `src/app/sitemap.ts` — Sitemap pour Google (attention : trailing slashes)
- `src/app/layout.tsx` — Metadata globale, GA4, schema.org, favicon
- `next.config.js` — `trailingSlash: true` (important pour le sitemap)

### Composants et modules ajoutés en août 2026

- `src/components/FournisseurCard.tsx` — **Bloc « source vérifiée »**. Se déclare dans le frontmatter d'un article via `fournisseurs:`, avec un champ `after` qui fonctionne comme celui des images. C'est le format des futures fiches de l'annuaire, donc **ne jamais bricoler un encadré à la main** : enrichir ce composant.
- `src/components/NewsletterSection.tsx` — Formulaire en POST natif vers Brevo. Le site étant en export statique, aucune API route n'est possible. **Trois champs obligatoires** : `EMAIL`, `email_address_check` (piège anti-robot, doit rester vide) et `locale`. Sans les deux derniers, Brevo rejette silencieusement.
- `src/lib/newsletter.ts` — URL du formulaire Brevo, point unique de configuration
- `src/lib/calculateur/` — **Moteur du calculateur, non terminé et non branché à une page.**
  - `hypotheses.ts` : toutes les hypothèses d'ingénierie, isolées et commentées, **à valider par Polo**
  - `donnees.ts` : prix, chacun avec source et date
  - `moteur.ts` : calcul des quantités
  - Principe retenu : le calculateur répond à **deux questions distinctes**. Les quantités sont calculées et vérifiables ; le budget vient de fourchettes de marché observées. Les deux ne se mélangent jamais, sous peine de fausse précision. Un premier essai qui déduisait le budget des quantités se trompait d'un facteur cinq.
  - Manquent encore : toiture, enduits, coffrage, terrassement, main d'œuvre complète
- `src/app/bienvenue/` et `src/app/newsletter-confirmee/` — pages du parcours newsletter, en `noindex`
- `public/logo-batipro.png` — logo pour signature email, identique à l'en-tête du site
- `public/images/fournisseurs/` — logos des entreprises citées
- `content/newsletters/` — brouillons de newsletters, non envoyés

### Détail technique à connaître

Node n'est pas dans le PATH sur la machine de Polo. Chemin réel : `C:\Users\Etudiant\node-v20.18.1-win-x64\node.exe`. Pour construire : `node ./node_modules/next/dist/bin/next build`.

---

## 8. Ce que je (Claude) dois toujours faire

1. **Lire ce fichier en premier** avant toute action sur le projet
2. **Respecter la formule éditoriale** pour tout nouvel article
3. **Pas de tiret long**, jamais, même si c'est "tentant"
4. **Consulter Polo** pour toute décision d'orientation (choix de sujet, direction du projet)
5. **Exécuter, pas décider** pour les questions business critiques
6. **Créer des commits propres** avec des messages en français explicites
7. **Considérer la vision long terme** (les 4 phases) quand on me demande une nouvelle fonctionnalité
8. **Vérifier avant d'affirmer.** Croiser deux sources indépendantes, exclure `batiproafrique.com` des recherches de vérification, et dire clairement ce qu'on ne sait pas.
9. **Montrer en local avant de pousser**, et attendre le feu vert explicite.
10. **Tester avant de livrer.** Le moteur du calculateur se trompait d'un facteur cinq ; seul un test sur des cas réels l'a révélé. Ne jamais présenter un résultat sans l'avoir confronté à la réalité du marché.
11. **Dire quand je me suis trompé**, sans détour et sans m'étendre. Corriger, expliquer en une phrase, continuer.
12. **Écrire des réponses courtes.** Polo l'a demandé plusieurs fois. Tableaux et listes plutôt que paragraphes, et une recommandation tranchée plutôt qu'un catalogue d'options.

---

## 9. Le Modèle Économique

Décidé en août 2026. Complète les 4 phases de la section 1 en décrivant **comment** l'argent entre.

### Le moteur en une phrase

Le contenu attire des gens qui vont construire. Les entreprises paient pour les atteindre. **La vérification est ce qui rend le tout crédible.**

### La boucle qui s'auto-alimente

```
BatiPro filme une entreprise sur son chantier
        ↓
L'article et la vidéo montrent son travail au public
        ↓
Des clients la contactent, via BatiPro
        ↓
L'entreprise constate que BatiPro lui amène du monde
        ↓
Elle paie pour rester référencée, et en parle aux autres
        ↓
D'autres entreprises demandent à être filmées
```

**La stratégie de contenu est la stratégie commerciale.** Une interview est un article et une relation nouée. Chaque reportage est une future fiche d'annuaire. Ce n'est pas deux métiers, c'est le même geste.

### L'actif défendable

Ni le site, ni le code, ni même les articles. **La base de prix sourcés et datés, et le fait qu'une citation de BatiPro veuille dire quelque chose.**

N'importe qui peut publier un annuaire. Seul BatiPro peut écrire « nous avons vérifié cette entreprise ». **Le jour où un mauvais payeur est accepté, toute la valeur s'effondre.** Savoir dire non est le produit.

### L'architecture en cinq couches

Chaque couche a besoin de celle du dessous.

| | Couche | Contenu | Revenu |
|---|---|---|---|
| **1** | **Le média** | articles sourcés, interviews, immersions chantier | marginal : AdSense, contenus techniques sponsorisés identifiés |
| **2** | **Le savoir** | chercheurs, docteurs, ingénieurs, architectes publient | **aucun, et c'est voulu** |
| **3** | **L'annuaire** | qui fait quoi, où, vérifié | **abonnement, la machine à cash** |
| **4** | **La mise en relation** | client vers pro, pro vers fournisseur, carte | paiement au contact transmis |
| **5** | **L'accompagnement** | suivi de chantier diaspora, consultance | le plus cher vendu |

**La couche 2 doit rester gratuite.** C'est le fossé défensif : un concurrent copie un annuaire en un mois, il ne copie pas deux ans de contributions d'universitaires.

### Les tarifs retenus

| Produit | Prix | Quand |
|---|---|---|
| Relecture de devis | 25 000 à 50 000 F par devis | immédiat |
| Référencement annuaire | 20 000 à 50 000 F par mois et par entreprise | 6 à 18 mois |
| Contact qualifié transmis | 2 000 à 5 000 F par contact | 12 mois |
| Suivi de chantier diaspora | 50 000 à 150 000 F par chantier | 18 à 24 mois |

**Abonnement fixe, jamais de commission sur contrat signé** : la transaction est invisible, donc invérifiable et impayable.

### Projection du référencement

| Entreprises | Par mois | Par an |
|---|---|---|
| 10 | 200 000 à 500 000 F | 2,4 à 6 M |
| 30 | 600 000 à 1,5 M | 7 à 18 M |
| 100 | 2 à 5 M | 24 à 60 M |

Signer 100 entreprises prend des années. **Dix à vingt la première année est déjà un bon résultat.**

### Le produit le plus fort, et le plus sous-estimé

**Le suivi de chantier pour la diaspora.** Quelqu'un à Paris ou à New York envoie des millions et ne voit rien. Photos datées, avancement, vérification des livraisons face au devis, contrôle par un ingénieur.

C'est le seul segment où le particulier paie volontiers, et il en a les moyens. C'est aussi la réponse la plus directe à la mission : ne plus se faire leurrer, même à cinq mille kilomètres.

### La vérité sur l'objectif

Le référencement ne rend pas milliardaire. **60 millions par an permet de vivre, d'embaucher et de financer la suite.** Le milliard, s'il vient, viendra de la Phase 3 et 4, quand BatiPro prendra une part sur des transactions au lieu de facturer des abonnements.

**Le référencement finance le chemin, il n'est pas la destination.**

### Ce qui est difficile, à ne pas sous-estimer

- **La carte des fournisseurs** n'est pas un problème de code mais de terrain. Recenser des centaines de quincailleries avec adresses vérifiées demande des mois. Commencer par une ville.
- **Le pro vers pro** est le côté le plus dur à monétiser : les professionnels se connaissent déjà.
- **L'application** ne se construit pas avant que le site n'ait prouvé le besoin.

### L'ordre

1. **Maintenant** : diffuser. Interviews et immersions, qui servent le contenu et le commerce à la fois
2. **3 mois** : l'annuaire, avec les entreprises rencontrées en reportage
3. **6 mois** : ouvrir la couche savoir aux universitaires et praticiens
4. **12 mois** : la mise en relation, d'abord manuelle pour apprendre, puis automatisée
5. **18 à 24 mois** : le suivi diaspora

**Les places de marché meurent de vouloir lancer tous leurs côtés en même temps.** BatiPro a une chance rare : son média a de la valeur pour les particuliers même avec zéro entreprise inscrite. Un côté à la fois.

---

## 10. Stratégie de Diffusion

Le contenu doit être **propre, atypique et soigné**, conforme à l'identité visuelle de la section 6. Pas de visuels bâclés, pas de stickers, pas de format générique.

### Chaque réseau sert une couche différente

| Réseau | Public atteint | Ce que ça nourrit |
|---|---|---|
| **YouTube** | recherche, format long | **capitalise comme les articles** |
| **LinkedIn** | architectes, BET, ingénieurs, entreprises | **l'annuaire, la Phase 2** |
| **TikTok** | grand public sénégalais et diaspora | trafic, notoriété |
| **Instagram** | même public, plus visuel | marque, mémorisation |
| Snapchat | jeunes, usage privé | faible retour, à ignorer pour l'instant |

**LinkedIn est le réseau le plus stratégique**, et celui auquel personne ne pense dans le secteur : c'est là que se trouvent ceux qui paieront pour être référencés.

**YouTube est le seul réseau où le contenu capitalise.** Deuxième moteur de recherche au monde, ses vidéos remontent aussi dans Google, et une vidéo bien faite ramène des spectateurs pendant des années là où un TikTok meurt en deux jours. Une même enquête donne un article et une vidéo.

### Ce qui fonctionne, par plateforme

**YouTube** : format long pour les interviews et immersions, Shorts pour la découverte. Titres pensés comme des recherches. Descriptions travaillées, les liens y fonctionnent réellement.

**LinkedIn** : texte long, ton professionnel. Le statut d'ingénieur compte. L'article BIM, le PFE sur le R+8, l'analyse des prix homologués non appliqués sont faits pour ce réseau.

**TikTok** : découverte pure, aucun abonné requis pour percer. Temps de visionnage et réécoute sont les signaux. Accroche dans la première seconde, vertical natif sans watermark. Formats efficaces : révélation de prix, avant-après, « ce que ce maçon fait mal ».

**Instagram** : partages et enregistrements pèsent plus que les likes. Un carrousel de prix sourcés s'enregistre.

### Le piège que presque tous ignorent

**Toutes ces plateformes pénalisent les liens sortants.** L'objectif sur les réseaux n'est donc pas le clic, mais que le nom **BatiPro** soit retenu.

La requête « batipro » a bondi de 164 % d'impressions en août 2026. **La recherche de marque contourne tous les algorithmes.** Donner toute la valeur dans la publication, sans réclamer le clic : le nom fait le travail.

### Deux erreurs à éviter

- **Publier la même chose partout.** Même sujet, format refait pour chaque plateforme.
- **Le rythme intenable.** Deux publications par semaine tenues un an valent mieux que sept par semaine pendant un mois. Produire en lot, programmer, oublier.

### Sur un éventuel associé technique

Polo n'est pas développeur et envisage d'associer un ami développeur.

Le besoin réel n'est pas le code aujourd'hui, mais quelqu'un qui porte le projet dans la durée, puis l'application de la Phase 3 et la carte des fournisseurs, tous deux à douze ou dix-huit mois.

**Règle à respecter : vesting sur quatre ans**, mis par écrit maintenant, quand le projet ne vaut encore rien. Le scénario qui tue les projets entre amis est un partage 50-50 dans l'enthousiasme, suivi d'un départ au bout de trois mois avec la moitié des parts.

Et ne pas recruter sur la promesse du milliard : celui qui vient pour l'argent part quand les six premiers mois ne rapportent rien. Montrer des preuves, pas des promesses.
