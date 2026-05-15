import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot.jpg";
import { useLang } from "@/i18n/LangContext";
import { CALENDLY_URL } from "@/i18n/dictionary";

const Hero = () => {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--hero-bg)) 0%, hsl(var(--hero-bg-end)) 100%)",
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-hero-foreground leading-[1.1]">
              {t.hero.h1Line1}
              <br />
              <span className="text-hero-foreground/85">{t.hero.h1Line2}</span>
            </h1>
            <p className="text-lg md:text-xl text-hero-foreground/75 max-w-xl leading-relaxed">
              {t.hero.sub}
            </p>
            <p className="text-sm text-hero-foreground/55 font-mono tracking-wide">
              {t.hero.support}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="cta" size="xl" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  {t.hero.primary}
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollTo("#approach")}
              >
                {t.hero.secondary}
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-2 ring-hero-foreground/15 shadow-2xl">
              <img
                src={headshot}
                alt={t.hero.photoAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:hidden flex justify-center order-first">
            <div className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-hero-foreground/15 shadow-xl">
              <img
                src={headshot}
                alt={t.hero.photoAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
