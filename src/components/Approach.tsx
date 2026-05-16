import { Target, Zap, UserCheck } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

const icons = [Target, Zap, UserCheck];

const Approach = () => {
  const { t } = useLang();
  return (
    <section id="approach" className="py-20 md:py-28 bg-background"">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          {t.approach.h2}
        </h2>
        <p className="text-text-secondary mb-12 max-w-2xl leading-relaxed">
          {t.approach.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.approach.pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <div
                key={p.title}
                className="border border-border rounded-xl bg-card p-6 md:p-7"
                style={{ borderTop: "2px solid hsl(var(--accent))" }}
              >
                <div className="p-2 rounded-md bg-accent/10 text-accent w-fit mb-4">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
