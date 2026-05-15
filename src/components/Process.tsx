import { useLang } from "@/i18n/LangContext";

const Process = () => {
  const { t } = useLang();
  return (
    <section id="process" className="py-20 md:py-28 bg-card">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          {t.process.h2}
        </h2>
        <p className="text-text-secondary mb-12 max-w-2xl">{t.process.intro}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {t.process.steps.map((s) => (
            <div
              key={s.num}
              className="border border-border rounded-xl bg-card p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  className="font-serif text-4xl"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  {s.num}
                </span>
                <span className="text-xs font-mono text-text-secondary uppercase tracking-wide">
                  {s.meta}
                </span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-foreground/75 mb-4 leading-relaxed">
                {s.intro}
              </p>
              <ul className="space-y-1.5 mb-5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-foreground/75 flex gap-2"
                  >
                    <span className="text-cta mt-0.5 shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground border-t border-border pt-3 mt-auto">
                <span className="font-medium">{s.outcomeLabel}:</span> {s.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
