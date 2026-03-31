import { Bot, TrendingUp, Database, Package } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-powered workflow automation",
    subtitle: "Turn manual financial processes into reliable, scalable systems",
    items: [
      "Automated research and screening pipelines",
      "Data ingestion, cleaning and processing systems",
      "AI-enhanced reporting and analysis workflows",
      "Integration with existing tools and data sources",
    ],
    timeline: "2–6 weeks",
    bestFor: "Firms drowning in manual data work who want to free up analyst time",
  },
  {
    icon: TrendingUp,
    title: "Systematic trading systems",
    subtitle: "From strategy research to live execution",
    items: [
      "Strategy development (market structure, order flow, regime switching)",
      "Advanced backtesting with walk-forward validation",
      "Risk management and execution monitoring",
      "Live deployment — Python-based, mid-frequency, production-grade",
    ],
    timeline: "4–12 weeks",
    bestFor: "Funds building or upgrading systematic trading capabilities",
  },
  {
    icon: Database,
    title: "Financial data engineering",
    subtitle: "Clean data, reliable pipelines, scalable architecture",
    items: [
      "Data pipelines in Python and SQL",
      "Market data integration and normalization",
      "Scalable architecture design",
      "Structured, queryable datasets from messy sources",
    ],
    timeline: "2–8 weeks",
    bestFor: "Firms whose data infrastructure is holding back their analysis",
  },
  {
    icon: Package,
    title: "End-to-end project delivery",
    subtitle: "I own the full chain — you get a working system",
    items: [
      "Technical requirements and scoping",
      "Architecture design and methodology selection",
      "Build, test, validate, deploy",
      "Documentation and handover",
    ],
    timeline: "Project-dependent",
    bestFor: "Firms who need one person to take a project from idea to production",
  },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-card">
    <div className="container max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Services</h2>
      <p className="text-text-secondary mb-12 max-w-lg">
        Focused capabilities for financial firms that need production-grade systems.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group border border-border rounded-lg p-6 md:p-8 hover:border-cta/30 transition-colors bg-card"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-md bg-cta/10 text-cta shrink-0">
                <s.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-foreground/80 flex gap-2">
                  <span className="text-cta mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-secondary border-t border-border pt-4">
              <span>
                <span className="font-medium text-foreground">Timeline:</span> {s.timeline}
              </span>
              <span>
                <span className="font-medium text-foreground">Best for:</span> {s.bestFor}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
