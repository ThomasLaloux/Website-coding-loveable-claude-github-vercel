import { useState } from "react";
import { Bot, Workflow, TrendingUp, LineChart, ChevronDown } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

const icons = [Bot, Workflow, TrendingUp, LineChart];

const Services = () => {
  const { t } = useLang();
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (cardTitle: string) => {
    setOpenProjects((prev) => ({ ...prev, [cardTitle]: !prev[cardTitle] }));
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          {t.services.h2}
        </h2>
        <p className="text-text-secondary mb-12 max-w-2xl">
          {t.services.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {t.services.cards.map((s, i) => {
            const Icon = icons[i];
            const hasProjects = s.projects && s.projects.length > 0;
            const isOpen = openProjects[s.title] ?? false;
            const projectLabel =
              s.projects && s.projects.length > 1
                ? t.services.recentProjectsLabel
                : t.services.recentProjectLabel;

            return (
              <div
                key={s.title}
                className="group border border-border rounded-xl hover:border-cta/40 transition-colors bg-card flex flex-col"
                style={{ borderTop: "2px solid hsl(var(--accent))" }}
              >
                {/* Main card content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-md bg-cta/10 text-cta shrink-0">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-foreground">
                        {s.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground/80 flex gap-2"
                      >
                        <span className="text-cta mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Timeline / Best for separator — pinned to bottom */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-secondary border-t border-border pt-4 mt-auto">
                    <span>
                      <span className="font-medium text-foreground">
                        {t.services.timelineLabel}:
                      </span>{" "}
                      {s.timeline}
                    </span>
                    <span>
                      <span className="font-medium text-foreground">
                        {t.services.bestForLabel}:
                      </span>{" "}
                      {s.bestFor}
                    </span>
                  </div>
                </div>

                {/* Expandable project proof */}
                {hasProjects && (
                  <div className="border-t border-border">
                    <button
                      onClick={() => toggleProject(s.title)}
                      className="w-full flex items-center justify-between px-6 md:px-8 py-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "hsl(var(--accent))" }}
                        />
                        {projectLabel}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 md:px-8 pb-6 space-y-6">
                        {s.projects.map((p) => (
                          <div
                            key={p.title}
                            className="rounded-lg bg-background/60 border border-border/60 p-4 space-y-3"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="font-serif text-sm text-foreground leading-tight">
                                {p.title}
                              </h4>
                              <span
                                className="shrink-0 text-[9px] font-mono uppercase tracking-wider rounded px-1.5 py-0.5 border"
                                style={{
                                  color: "hsl(var(--accent))",
                                  borderColor: "hsl(var(--accent) / 0.4)",
                                }}
                              >
                                {p.badge}
                              </span>
                            </div>

                            <div className="space-y-2 text-xs">
                              <div>
                                <span className="font-medium text-foreground">
                                  {p.whatLabel}:{" "}
                                </span>
                                <span className="text-foreground/75">
                                  {p.what}
                                </span>
                              </div>
                              <div>
                                <span className="font-medium text-foreground">
                                  {p.scopeLabel}:{" "}
                                </span>
                                <span className="text-foreground/75">
                                  {p.scope}
                                </span>
                              </div>
                              <div>
                                <span className="font-mono text-[11px] text-text-secondary">
                                  Stack: {p.stack}
                                </span>
                              </div>
                            </div>

                            <div className="border-t border-border/60 pt-2">
                              <p className="text-xs text-foreground/85">
                                <span className="font-medium text-foreground">
                                  {p.outcomeLabel}:{" "}
                                </span>
                                {p.outcome}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
