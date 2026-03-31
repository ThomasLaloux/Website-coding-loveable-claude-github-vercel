import { Phone, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "Discovery call",
    subtitle: "20 min, free",
    desc: "We define your needs, constraints, timeline and budget. No commitment. You'll know within the call whether I'm the right fit.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Proposal & architecture",
    subtitle: "Within a few days",
    desc: "A clear document with scope, approach, architecture choices, timeline, and pricing. No ambiguity.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Build & deliver",
    subtitle: "Iterative, production-grade",
    desc: "I build iteratively with regular checkpoints. You get a production-ready system, documented and deployed. Not a prototype.",
  },
];

const Process = () => (
  <section id="process" className="py-20 md:py-28 bg-background">
    <div className="container max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">How I work</h2>
      <p className="text-text-secondary mb-12 max-w-lg">
        A straightforward process designed to reduce risk and keep things moving.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="relative">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-4 z-0" />
            )}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-cta font-medium">{s.num}</span>
                <div className="p-2 rounded-md bg-cta/10 text-cta">
                  <s.icon size={18} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-1">{s.title}</h3>
              <p className="text-xs text-text-secondary font-mono mb-3">{s.subtitle}</p>
              <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
