import { useLang } from "@/i18n/LangContext";
const About = () => {
  const { t } = useLang();
  return (
    <section id="about" className="pt-10 pb-6 md:pt-12 md:pb-8 bg-background">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
          {t.about.h2}
        </h2>
        <div className="max-w-[38rem] space-y-4 text-foreground/80 leading-relaxed">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-sm text-text-secondary font-mono pt-2">
            {t.about.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
