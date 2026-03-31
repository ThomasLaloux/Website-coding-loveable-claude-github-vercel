import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(213 54% 24%) 100%)",
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-hero-foreground leading-[1.1]">
              Financial AI Automation
              <br />
              <span className="text-hero-foreground/80">&amp; Systematic Trading Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-hero-foreground/75 max-w-xl leading-relaxed">
              I help financial firms automate workflows, build data systems and develop trading
              infrastructure — from scoping to production.
            </p>
            <p className="text-sm text-hero-foreground/50 font-mono tracking-wide uppercase">
              Available for freelance projects and contracts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="cta" size="xl" onClick={() => scrollTo("#booking")}>
                Book a free discovery call
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => scrollTo("#services")}>
                View what I deliver ↓
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden ring-2 ring-hero-foreground/10 shadow-2xl">
              <img
                src={headshot}
                alt="Thomas Laloux — Financial AI Automation & Systematic Trading"
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
