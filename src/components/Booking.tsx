import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangContext";
import { CALENDLY_URL, EMAIL } from "@/i18n/dictionary";

const Booking = () => {
  const { t } = useLang();
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: "hsl(210 40% 96%)" }}
    >
      <div className="container max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          {t.contact.h2}
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.contact.sub}
        </p>
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
    </section>
  );
};

export default Booking;
