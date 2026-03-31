const projects = [
  {
    title: "Production trading engine",
    badge: "Live system",
    what: "Complete research, backtesting and live trading engine",
    scope: "Regime-switching logic, walk-forward validation, custom optimization, scalable architecture, live execution pipeline",
    stack: "Python, modular architecture",
    outcome: "End-to-end system meeting small/mid hedge fund and proprietary trading firm standards",
  },
  {
    title: "Automated equity screening pipeline",
    badge: "Built for production use",
    what: "Production-grade market screener",
    scope: "Automated data ingestion, multi-factor screening, signal generation, daily reporting",
    stack: "Python, SQL",
    outcome: "Fully automated research pipeline replacing manual daily screening process",
  },
  {
    title: "Financial data infrastructure",
    badge: "Live system",
    what: "Scalable data pipeline architecture",
    scope: "Market data normalization, storage optimization, query layer, automated quality checks",
    stack: "Python, SQL",
    outcome: "Clean, reliable data foundation enabling faster research iteration",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 md:py-28 bg-card">
    <div className="container max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Recent work</h2>
      <p className="text-text-secondary mb-12 max-w-lg">
        Personal projects built to production standards — demonstrating real capability.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border border-border rounded-lg overflow-hidden bg-card hover:border-cta/30 transition-colors"
          >
            <div className="h-1 bg-cta/60" />
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg text-foreground">{p.title}</h3>
                <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/40 rounded px-2 py-0.5">
                  {p.badge}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-foreground">What: </span>
                  <span className="text-foreground/75">{p.what}</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Scope: </span>
                  <span className="text-foreground/75">{p.scope}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-text-secondary">Stack: {p.stack}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-foreground/80">
                  <span className="font-medium text-foreground">Outcome: </span>
                  {p.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
