import { Workflow, Bot, LineChart, TrendingUp } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

const icons = [Workflow, Bot, LineChart, TrendingUp];

const Services = () => {
  const { t } = useLang();

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
            return (
              <div
                key={s.title}
                className="group border border-border rounded-xl p-6 md:p-8 hover:border-cta/40 transition-colors bg-card"
                style={{ borderTop: "2px solid hsl(var(--accent))" }}
              >
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

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-secondary border-t border-border pt-4">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
