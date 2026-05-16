export type Lang = "en" | "fr";

export const CALENDLY_URL =
  "https://calendly.com/thomas_laloux/20-minute-discovery-call";
export const EMAIL = "thomas_laloux@outlook.com";
export const LINKEDIN_URL = "https://linkedin.com/in/thomaslaloux";

type Dict = typeof en;

const en = {
  nav: {
    approach: "Approach",
    services: "Services",
    about: "About",
    process: "How I work",
    contact: "Contact",
    bookCall: "Book a call",
  },
  hero: {
    h1Line1: "AI and workflow automation",
    h1Line2: "for growing companies",
    sub: "I help startups, scale-ups and growing companies leverage workflow automation, AI systems and data, to reduce operational friction, improve decision-making, and support scalable growth.",
    support:
      "Business-driven and pragmatic approach. From scoping to production.\nAvailable for freelance projects and contracts.",
    primary: "Book a free discovery call",
    secondary: "See how I work ↓",
    photoAlt:
      "Thomas P. Laloux — Independent AI Automation & Systematic Trading Engineer",
  },
  approach: {
    h2: "A business-driven approach",
    intro:
      "Most automations and AI projects fail because they start from the technology, not the business. I work the other way around.",
    pillars: [
      {
        title: "Business context",
        body: "Every system I build starts from your context, objectives and constraints. Operational reality first, technology second.",
      },
      {
        title: "Custom & pragmatic execution",
        body: "I prioritize pragmatism over unnecessary complexity. Working systems in real conditions — not prototypes or over-engineered platforms.",
      },
      {
        title: "Autonomous delivery",
        body: "I architect, build and deliver end-to-end. AI-native approach to execution, iteration and problem solving — one person, full ownership.",
      },
    ],
  },
  services: {
    h2: "What I deliver",
    intro:
      "Four service areas, from simple automations to full agentic systems and quantitative infrastructure.",
    timelineLabel: "Typical timeline",
    bestForLabel: "Best for",
    recentProjectLabel: "Recent project",
    recentProjectsLabel: "Recent projects",
    cards: [
      {
        title: "Autonomous AI Agentic Systems",
        subtitle:
          "Multi-agent workflows with RAG, LLMs, and human-in-the-loop control.",
        items: [
          "Single/Multi-agent architecture, depending on the operational context",
          "Retrieval-augmented generation over your internal data",
          "Local SLMs or cloud LLMs, chosen depending on constraints (hardware, cost, latency and confidentiality)",
          "Human-in-the-loop validation steps for control and risk management",
          "Docker-based deployment for portability, depending on the case",
        ],
        timeline: "4–10 weeks",
        bestFor:
          "Companies wanting to automate complex, judgement-heavy work while keeping a human safety net.",
        projects: [
          {
            title: "AI-powered document workflow automation",
            badge: "DELIVERED",
            what: "Multi-agent system automating repetitive text-based operational tasks.",
            scope:
              "N8n (orchestration layer) and Python (multi-agent layer); RAG over local historical data; human-in-the-loop validation steps allowing the client to keep control.",
            stack: "Python, N8n, Docker, Postgres / Qdrant, local or cloud LLMs.",
            outcome:
              "20–40h a month saved on operations, with full traceability and preserved confidentiality.",
            whatLabel: "What",
            scopeLabel: "Architecture",
            outcomeLabel: "Outcome",
          },
        ],
      },
      {
        title: "Workflow Automation",
        subtitle:
          "Replace manual operational processes with reliable, scalable workflows not requiring IA.",
        items: [
          "Process mapping and bottleneck identification",
          "Orchestration, e.g. through N8n or custom Python",
          "Integration with existing tools, APIs and data sources",
          "Monitoring, alerting, and clean handover",
        ],
        timeline: "2–6 weeks",
        bestFor: "Teams losing hours per week on repetitive operational tasks.",
        projects: [
          {
            title: "Automated equity & crypto screening engine",
            badge: "Production deployment",
            what: "Production-grade market screener for equity and crypto markets.",
            scope:
              "Automated data ingestion, multi-factor screening, signal generation, daily scheduled operation and reporting.",
            stack: "Matlab, including standard libraries.",
            outcome:
              "Fully automated daily screening across a dozen international markets, replacing manual research workflow and capturing advanced custom criteria.",
            whatLabel: "What",
            scopeLabel: "Scope",
            outcomeLabel: "Outcome",
          },
        ],
      },
      {
        title: "Systematic Trading Systems",
        subtitle:
          "From fast strategy backtesting to live, production-grade development and execution.",
        items: [
          "Strategy development, e.g. MFT market structure, order flow, regime switching",
          "Walk-forward backtesting frameworks with realistic cost/slippage modeling",
          "Risk management and execution monitoring",
          "Live deployment — Python-based, production-grade",
        ],
        timeline: "4–12 weeks",
        bestFor:
          "Proprietary/hedge funds desks building or upgrading systematic capabilities.",
        projects: [
          {
            title: "Production-grade systematic trading infrastructure",
            badge: "Production deployment",
            what: "End-to-end research, backtesting and live execution engine.",
            scope:
              "Regime-switching strategy logic, walk-forward validation, custom parameter optimization, modular architecture, live execution pipeline.",
            stack:
              "Python, modular components (clarity and scalability), production deployment.",
            outcome:
              "Architecture meeting small/mid hedge fund and prop trading firm standards; live execution on demo/live accounts.",
            whatLabel: "What",
            scopeLabel: "Scope",
            outcomeLabel: "Outcome",
          },
        ],
      },
      {
        title: "Predictive Modeling & Data Analysis",
        subtitle: "Predictive systems and decision-support analytics.",
        items: [
          "Predictive models and scenario analysis",
          "Data analysis, data quality assessment and remediation",
          "Business-related dashboards and visualizations",
          "Models built to be understood, not just deployed",
        ],
        timeline: "2–8 weeks",
        bestFor:
          "Companies sitting on data but lacking the analytical layer to act on it.",
        projects: [
          {
            title: "Predictive modeling & data analysis",
            badge: "DELIVERED",
            what: "Product quality prediction and decision-support analytics.",
            scope:
              "Data quality assessment, exploratory data analysis, predictive model.",
            stack: "Python — numpy, pandas, matplotlib, scikit-learn.",
            outcome:
              "1.3% MSE on test set, allowing accurate quality rating and classification.",
            whatLabel: "What",
            scopeLabel: "Scope",
            outcomeLabel: "Outcome",
          },
        ],
      },
    ],
  },
  process: {
    h2: "How I work",
    intro:
      "A structured, low-risk path from first conversation to a deployed system.",
    steps: [
      {
        num: "01",
        title: "Discovery call",
        meta: "20 min, free",
        intro:
          "A short, no-commitment conversation to assess fit and direction.",
        bullets: [
          "Business context, objectives and constraints",
          "Existing tools, stack and data",
          "Indicative timeline and budget fit",
          "Whether a deeper technical discovery is needed before scoping",
        ],
        outcomeLabel: "Outcome",
        outcome:
          "a clear view of whether and how I can help. No pressure, no follow-up sales.",
      },
      {
        num: "02",
        title: "Workflow audit & technical discovery",
        meta: "Paid, fixed-fee",
        intro:
          "When the project warrants it, a focused engagement to map the ground before building.",
        bullets: [
          "Process mapping and bottleneck analysis",
          "Architecture and integration design",
          "Identification of automation opportunities and quick wins",
          "Risk, feasibility and dependency assessment",
          "Detailed implementation plan",
        ],
        outcomeLabel: "Deliverables",
        outcome:
          "architecture document, phased roadmap, and a final fixed-scope quote for implementation.",
      },
      {
        num: "03",
        title: "Implementation & delivery",
        meta: "Iterative, production-grade",
        intro:
          "Iterative build with regular checkpoints, no black-box development.",
        bullets: [
          "Build, test and validate in short cycles",
          "Iteration based on real usage and feedback",
          "Deployment to production environment",
          "Documentation, handover and transition support",
        ],
        outcomeLabel: "Outcome",
        outcome:
          "a documented, production-ready system you fully own.",
      },
    ],
  },
  about: {
    h2: "About",
    paragraphs: [
      "Thomas P. Laloux is an independent automation architect focused on workflow automation, AI systems and data, with a business-first, pragmatic approach to delivery.",
      "With a strong analytical foundation in statistics and forecasting, he began his career at ENGIE (CAC40) as an energy consumption forecaster, where he also contributed to operational process optimization. He then moved into internal consulting roles at group level, as market and business analyst, working across long-term market projections, green mobility assessment models, business planning, and predictive modeling.",
      "He later transitioned into systematic trading as a quantitative developer, designing and deploying mid-frequency strategies, advanced backtesting frameworks, and live execution infrastructure built to the production standards expected by hedge funds and proprietary trading firms.",
      "His current focus is AI-powered workflow automation and agentic systems — combining multi-agent architectures, RAG, local and cloud LLMs, and human-in-the-loop control to solve operational and scaling challenges faced by startups, scale-ups, and financial firms.",
      "Across his project portfolio, Thomas has consistently demonstrated his ability to autonomously architect, build and deliver end-to-end systems, applying an AI-native approach to execution, iteration and problem solving.",
    ],
    location: "Based in Belgium. Available remotely across Europe and internationally.",
  },
  positioning: {
    items: [
      { label: "Location", value: "Belgium — remote across EU & internationally"},
      { label: "Availability", value: "Accepting new projects" },
      { label: "Typical engagement", value: "3–12 weeks" },
      {
        label: "Pricing",
        value: "Tailored to project scope, complexity and timeline",
      },
    ],
  },
  contact: {
    h2: "Let's discuss your project",
    sub: "Book a free 20-minute call. We'll define your needs, and I'll tell you honestly whether I can help — and if so, how.",
    cta: "Book a free discovery call",
    or: "Or reach me directly at",
  },
  footer: {
    tagline:
      "Workflow automation, AI agentic systems, predictive modeling, systematic trading",
    location: "Belgium — remote across EU & internationally",
    rights: "All rights reserved.",
  },
  mobileCta: "Book a discovery call",
};

const fr: Dict = {
  nav: {
    approach: "Approche",
    services: "Services",
    about: "À propos",
    process: "Méthode",
    contact: "Contact",
    bookCall: "Réserver",
  },
  hero: {
    h1Line1: "IA et automatisation de workflows",
    h1Line2: "au service de votre croissance",
    sub: "J'aide les startups, scale-ups et entreprises en croissance à tirer parti de l'automatisation, des systèmes d'IA et de la donnée — pour réduire la friction opérationnelle, améliorer la prise de décision et soutenir une croissance maîtrisée.",
    support:
      "Approche orientée business. Du cadrage à la mise en production. Disponible pour missions freelance et contrats.",
    primary: "Réserver un appel de découverte gratuit",
    secondary: "Voir comment je travaille ↓",
    photoAlt:
      "Thomas P. Laloux — Ingénieur indépendant en automatisation IA et trading systématique",
  },
  approach: {
    h2: "Une approche orientée business",
    intro:
      "La plupart des projets d'IA et d'automatisation échouent parce qu'ils partent de la technologie, pas du business. Je fais l'inverse.",
    pillars: [
      {
        title: "Contexte business",
        body: "Chaque système que je construis part de votre contexte, vos objectifs et vos contraintes. La réalité opérationnelle d'abord, la technologie ensuite.",
      },
      {
        title: "Exécution sur mesure & pragmatique",
        body: "Je privilégie l'utilité et la vitesse à la complexité inutile. Des systèmes qui fonctionnent en conditions réelles — ni prototypes, ni plateformes sur-conçues.",
      },
      {
        title: "Livraison autonome",
        body: "J'architecture, construis et livre de bout en bout. Approche AI-native de l'exécution, de l'itération et de la résolution de problèmes — une seule personne, responsabilité complète.",
      },
    ],
  },
  services: {
    h2: "Ce que je livre",
    intro:
      "Quatre domaines d'expertise, des automatisations simples aux systèmes agentiques complets et infrastructures quantitatives.",
    timelineLabel: "Délai typique",
    bestForLabel: "Idéal pour",
    recentProjectLabel: "Réalisation récente",
    recentProjectsLabel: "Réalisations récentes",
    cards: [
      {
        title: "Systèmes agentiques IA autonomes",
        subtitle:
          "Workflows multi-agents avec RAG, LLMs et contrôle human-in-the-loop.",
        items: [
          "Architecture mono ou multi-agents, selon le contexte opérationnel",
          "Génération augmentée par la récupération (RAG) sur vos données internes",
          "SLMs locaux ou LLMs cloud, choisis en fonction des contraintes (hardware, coût, latence et confidentialité)",
          "Étapes de validation human-in-the-loop pour le contrôle et la gestion du risque",
          "Déploiement Docker pour la portabilité, en fonction du cas",
        ],
        timeline: "4 à 10 semaines",
        bestFor:
          "Entreprises qui veulent automatiser des tâches complexes à fort jugement, tout en gardant un filet humain.",
        projects: [
          {
            title: "Automatisation de workflow documentaire propulsée par IA",
            badge: "LIVRÉ",
            what: "Système multi-agents automatisant des tâches opérationnelles répétitives basées sur des données textuelles.",
            scope:
              "N8n (couche d'orchestration) et Python (couche multi-agents); RAG sur les données historiques locales; étapes de validation human-in-the-loop permettant au client de garder le contrôle.",
            stack: "Python, n8n, Docker, Postgres / Qdrant, LLMs locaux ou cloud.",
            outcome:
              "20 à 40h par mois économisées sur les opérations, avec traçabilité complète et confidentialité préservée.",
            whatLabel: "Quoi",
            scopeLabel: "Architecture",
            outcomeLabel: "Résultat",
          },
        ],
      },
      {
        title: "Automatisation de workflows",
        subtitle:
          "Remplacer les processus opérationnels manuels par des workflows fiables et scalables ne nécessitant pas d'IA.",
        items: [
          "Cartographie des processus et identification des points de friction",
          "Orchestration, par ex. via N8n ou Python sur mesure",
          "Intégration à vos outils, API et sources de données existants",
          "Monitoring, alerting et passation propre",
        ],
        timeline: "2 à 6 semaines",
        bestFor:
          "Équipes qui perdent des heures chaque semaine sur des tâches opérationnelles répétitives.",
        projects: [
          {
            title: "Moteur de screening actions & crypto automatisé",
            badge: "Déploiement production",
            what: "Screener de marché qualité production pour actions et crypto.",
            scope:
              "Ingestion automatisée des données, screening multi-facteurs, génération de signaux, exécution et reporting quotidiens planifiés.",
            stack: "Matlab, avec ses bibliothèques standard.",
            outcome:
              "Screening quotidien entièrement automatisé sur une douzaine de marchés internationaux, remplaçant un workflow manuel et capturant des critères avancés sur mesure.",
            whatLabel: "Quoi",
            scopeLabel: "Périmètre",
            outcomeLabel: "Résultat",
          },
        ],
      },
      {
        title: "Systèmes de trading systématique",
        subtitle:
          "Du backtest rapide au développement et à l'exécution en production.",
        items: [
          "Développement de stratégies — par ex. MFT, structure de marché, order flow, changement de regime",
          "Frameworks de backtesting walk-forward avec modélisation réaliste des coûts/slippage",
          "Gestion du risque et monitoring d'exécution",
          "Déploiement en live/production — Python",
        ],
        timeline: "4 à 12 semaines",
        bestFor:
          "Desks de prop trading et hedge funds qui construisent ou mettent à jour leurs capacités systématiques.",
        projects: [
          {
            title: "Infrastructure de trading systématique en production",
            badge: "Déploiement production",
            what: "Moteur complet de recherche, backtesting et exécution live.",
            scope:
              "Logique de stratégie regime-switching, validation walk-forward, optimisation paramétrique sur mesure, architecture modulaire, pipeline d'exécution live.",
            stack:
              "Python, composants modulaires (clarté et scalabilité), déploiement production.",
            outcome:
              "Architecture aux standards small/mid hedge funds et prop trading ; exécution live sur comptes démo et live.",
            whatLabel: "Quoi",
            scopeLabel: "Périmètre",
            outcomeLabel: "Résultat",
          },
        ],
      },
      {
        title: "Modélisation prédictive et analyse de données",
        subtitle:
          "Systèmes prédictifs et analytics d'aide à la décision.",
        items: [
          "Modèles prédictifs et analyses de scénarios",
          "Analyse de données, évaluation et remédiation de la qualité",
          "Tableaux de bord et visualisations orientés business",
          "Modèles construits pour être compris, pas seulement déployés",
        ],
        timeline: "2 à 8 semaines",
        bestFor:
          "Entreprises qui ont la donnée mais pas la couche analytique pour en tirer parti.",
        projects: [
          {
            title: "Modélisation prédictive et analyse de données",
            badge: "LIVRÉ",
            what: "Prédiction de qualité produit et analytics d'aide à la décision.",
            scope:
              "Évaluation de la qualité des données, analyse exploratoire, modèle prédictif.",
            stack: "Python — numpy, pandas, matplotlib, scikit-learn.",
            outcome:
              "1,3 % de MSE sur le test set, permettant un classement et une notation précise de la qualité.",
            whatLabel: "Quoi",
            scopeLabel: "Périmètre",
            outcomeLabel: "Résultat",
          },
        ],
      },
    ],
  },
  process: {
    h2: "Comment je travaille",
    intro:
      "Un parcours structuré et à faible risque, de la première conversation au système déployé.",
    steps: [
      {
        num: "01",
        title: "Appel de découverte",
        meta: "20 min, gratuit",
        intro:
          "Une conversation courte, sans engagement, pour évaluer la pertinence et la direction.",
        bullets: [
          "Contexte business, objectifs et contraintes",
          "Outils, stack et données existants",
          "Délai et budget indicatifs",
          "Pertinence d'une discovery technique plus poussée avant cadrage",
        ],
        outcomeLabel: "Résultat",
        outcome:
          "une vision claire de si — et comment — je peux aider. Pas de pression, pas de relance commerciale.",
      },
      {
        num: "02",
        title: "Audit workflow & discovery technique",
        meta: "Payant, forfait fixe",
        intro:
          "Quand le projet le justifie, une mission ciblée pour cartographier le terrain avant de construire.",
        bullets: [
          "Cartographie des processus et analyse des goulots",
          "Conception d'architecture et d'intégrations",
          "Identification des opportunités d'automatisation et quick wins",
          "Évaluation des risques, faisabilité et dépendances",
          "Plan d'implémentation détaillé",
        ],
        outcomeLabel: "Livrables",
        outcome:
          "document d'architecture, roadmap par phases, et devis final à scope fixe pour l'implémentation.",
      },
      {
        num: "03",
        title: "Implémentation & livraison",
        meta: "Itératif, qualité production",
        intro:
          "Construction itérative avec des checkpoints réguliers — pas de développement en boîte noire.",
        bullets: [
          "Construction, test et validation par cycles courts",
          "Itération basée sur l'usage réel et les retours",
          "Déploiement en environnement de production",
          "Documentation, passation et accompagnement à la transition",
        ],
        outcomeLabel: "Résultat",
        outcome:
          "un système documenté, prêt pour la production, dont vous êtes pleinement propriétaire.",
      },
    ],
  },
  about: {
    h2: "À propos",
    paragraphs: [
      "Thomas P. Laloux est un architecte indépendant en automatisation, spécialisé dans l'automatisation de workflows, les systèmes d'IA et la donnée, avec une approche pragmatique orientée business.",
      "Fort d'une solide base analytique en physique, statistiques et prévision, il a commencé sa carrière chez ENGIE (CAC40) comme prévisionniste en consommation énergétique, où il a également contribué à l'optimisation des processus opérationnels. Il a ensuite évolué vers des rôle de consultance interne au niveau du groupe en tant qu'analyste de marché et analyste business, en travaillant sur les projections de marché à long terme, des modèles d'évaluation de mobilité durable, le business planning et des modèles prédictifs.",
      "Il a ensuite rejoint le trading systématique comme développeur quantitatif, concevant et déployant des stratégies à moyenne fréquence (structure de marché, order flow, changement de régime), des frameworks de backtesting avancés et des infrastructures d'exécution live satisfaisant les standards attendus des hedge funds et sociétés de prop trading.",
      "Son focus actuel porte sur l'automatisation de workflows propulsée par IA et les systèmes agentiques — combinant architectures multi-agents, RAG, LLMs locaux et cloud, et contrôle humain-dans-la-boucle pour résoudre les défis opérationnels et de scaling rencontrés par les startups, scale-ups et acteurs financiers.",
      "Sur l'ensemble de son portefeuille de projets, Thomas a constamment démontré sa capacité à architecturer, construire et livrer de manière autonome des systèmes de bout en bout, en appliquant une approche AI-native à l'exécution, à l'itération et à la résolution de problèmes.",
    ],
    location: "Basé en Belgique. Disponible en distanciel en Europe et à l'international.",
  },
  positioning: {
    items: [
      { label: "Localisation", value: "Belgique - distanciel UE et international" },
      { label: "Disponibilité", value: "Nouveaux projets acceptés" },
      { label: "Engagement typique", value: "3 à 12 semaines" },
      {
        label: "Tarification",
        value: "Sur mesure selon le périmètre, la complexité et le délai",
      },
    ],
  },
  contact: {
    h2: "Discutons de votre projet",
    sub: "Réservez un appel gratuit de 20 minutes. Nous définirons votre besoin et je vous dirai honnêtement si — et comment — je peux vous aider.",
    cta: "Réserver un appel de découverte gratuit",
    or: "Ou contactez-moi directement à",
  },
  footer: {
    tagline:
      "Automatisation de workflows, systèmes agentiques IA, modélisation prédictive, trading systématique",
    location: "Belgique — distanciel UE et international",
    rights: "Tous droits réservés.",
  },
  mobileCta: "Réserver un appel",
};

export const dictionaries: Record<Lang, Dict> = { en, fr };
