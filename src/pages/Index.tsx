import { Helmet } from "react-helmet-async";
import { useLang } from "@/i18n/LangContext";
import { LINKEDIN_URL } from "@/i18n/dictionary";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Positioning from "@/components/Positioning";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const seo = {
  en: {
    title:
      "Thomas P. Laloux — AI Automation, Agentic Systems & Systematic Trading",
    description:
      "Independent automation architect building workflow automations, AI agentic systems, predictive models and systematic trading infrastructure for startups, scale-ups and financial firms.",
  },
  fr: {
    title:
      "Thomas P. Laloux — Automatisation IA, Systèmes Agentiques & Trading Systématique",
    description:
      "Architecte en automatisation et développeur indépendant — automatisation de workflows, systèmes agentiques IA, modèles prédictifs et infrastructures de trading systématique pour startups, scale-ups et acteurs financiers.",
  },
};

const Index = () => {
  const { lang } = useLang();
  const meta = seo[lang];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thomas P. Laloux",
    alternateName: "Thomas Laloux",
    jobTitle:
      "Business-Driven Automation Architect | AI Workflows & Predictive Systems Builder",
    sameAs: [LINKEDIN_URL, "https://www.tpl-consulting.com"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Thomas P. Laloux",
    description: meta.description,
    areaServed: "Europe",
    knowsAbout: [
      "Workflow Automation",
      "AI Agentic Systems",
      "Predictive Modeling",
      "Systematic Trading",
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang={lang} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://www.tpl-consulting.com/${lang}`} />
        <link rel="alternate" hrefLang="en" href="https://www.tpl-consulting.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://www.tpl-consulting.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.tpl-consulting.com/en" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.tpl-consulting.com/${lang}`} />
        <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <Approach />
      <Services />
      <About />
      <Process />
      <Positioning />
      <Booking />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
