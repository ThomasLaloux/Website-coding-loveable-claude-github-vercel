import { Euro, Calendar, MapPin, Clock } from "lucide-react";

const metrics = [
  { icon: Euro, label: "Daily rate", value: "On request" },
  { icon: Calendar, label: "Availability", value: "Accepting new projects" },
  { icon: MapPin, label: "Location", value: "Belgium (remote EU/UK)" },
  { icon: Clock, label: "Typical engagement", value: "2–12 weeks" },
];

const Rates = () => (
  <section className="py-12 bg-card border-y border-border">
    <div className="container max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-start gap-3">
            <div className="p-1.5 rounded bg-cta/10 text-cta shrink-0 mt-0.5">
              <m.icon size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-mono uppercase tracking-wide">{m.label}</p>
              <p className="text-sm font-medium text-foreground mt-0.5">{m.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rates;
