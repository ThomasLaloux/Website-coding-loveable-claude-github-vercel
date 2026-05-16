import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangContext";
import { CALENDLY_URL, EMAIL } from "@/i18n/dictionary";

const Booking = () => {
  const { t } = useLang();
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          {t.contact.h2}
        </h2>
        <p className="text-text-secondary max-w-2xl mb-10 leading-relaxed">
          {t.contact.sub}
        </p>

        {/* Positioning bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pb-10 border-b border-border">
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

        <div>
          <Button variant="cta" size="xl" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              {t.contact.cta}
            </a>
          </Button>
          <p className="text-sm text-text-secondary mt-6">
            {t.contact.or}{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-cta hover:text-cta-hover underline underline-offset-2"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
