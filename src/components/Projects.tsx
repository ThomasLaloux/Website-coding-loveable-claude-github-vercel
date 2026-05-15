import { useLang } from "@/i18n/LangContext";

const Projects = () => {
  const { t } = useLang();
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          {t.projects.h2}
        </h2>
        <p className="text-text-secondary mb-12 max-w-2xl">
          {t.projects.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((p) => (
            <div
              key={p.title}
              className="border border-border rounded-xl overflow-hidden bg-card hover:border-cta/30 transition-colors"
              style={{ borderTop: "2px solid hsl(var(--accent))" }}
            >
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-lg text-foreground leading-tight">
                    {p.title}
                  </h3>
                  <span
                    className="shrink-0 text-[10px] font-mono uppercase tracking-wider rounded px-2 py-0.5 border"
                    style={{
                      color: "hsl(var(--accent))",
                      borderColor: "hsl(var(--accent) / 0.4)",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground">
                      {p.whatLabel}:{" "}
                    </span>
                    <span className="text-foreground/75">{p.what}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      {p.scopeLabel}:{" "}
                    </span>
                    <span className="text-foreground/75">{p.scope}</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-text-secondary">
                      Stack: {p.stack}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-foreground/85">
                    <span className="font-medium text-foreground">
                      {p.outcomeLabel}:{" "}
                    </span>
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
};

export default Projects;
