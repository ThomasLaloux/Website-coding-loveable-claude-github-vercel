const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">About</h2>
      <div className="max-w-2xl space-y-4 text-foreground/80 leading-relaxed">
        <p>
          <span className="font-medium text-foreground">Thomas Laloux</span> is a freelance Financial AI
          Automation Engineer and Systematic Trading specialist.
        </p>
        <p>
          He helps financial firms automate workflows, build data systems, and develop trading
          infrastructure — from scoping and architecture to testing and production deployment.
        </p>
        <p>
          His focus is delivering systems that work in real conditions, not prototypes. Every component
          is built to run with real capital at stake.
        </p>
        <p>
          He works with hedge funds, proprietary trading desks, family offices, asset managers,
          fintechs, crypto funds, and financial data vendors.
        </p>
        <p className="text-sm text-text-secondary font-mono">
          Based in Belgium · Available remotely across Europe and the UK
        </p>
      </div>
    </div>
  </section>
);

export default About;
