import { useLang } from "@/i18n/LangContext";

const Positioning = () => {
  const { t } = useLang();
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.positioning.items.map((m) => (
            <div key={m.label}>
              <p className="text-xs text-text-secondary font-mono uppercase tracking-wide mb-1">
                {m.label}
              </p>
              <p className="text-sm font-medium text-foreground leading-snug">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positioning;
