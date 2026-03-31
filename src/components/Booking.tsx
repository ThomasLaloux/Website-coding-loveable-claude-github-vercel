import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    needs: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.needs.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 md:py-28 bg-background">
        <div className="container max-w-[1200px] mx-auto px-6 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <div className="text-4xl">✓</div>
            <h2 className="text-2xl font-serif text-foreground">Thank you</h2>
            <p className="text-text-secondary">
              I'll confirm your slot within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 md:py-28 bg-background">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2 text-center">
            Let's discuss your project
          </h2>
          <p className="text-text-secondary text-center mb-10">
            Book a free 20-minute call. We'll define your needs, I'll tell you honestly whether I can
            help, and if so, how.
          </p>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all ${
                  s <= step ? "w-10 bg-cta" : "w-6 bg-border"
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                <Input
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input
                  placeholder="Company name (optional)"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </div>
              <Button
                variant="cta"
                size="lg"
                className="w-full mt-2"
                onClick={() => {
                  if (!form.name.trim() || !form.email.trim()) {
                    toast.error("Name and email are required.");
                    return;
                  }
                  setStep(2);
                }}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  What do you need? *
                </label>
                <Textarea
                  placeholder="Describe your project in a few sentences..."
                  rows={4}
                  value={form.needs}
                  onChange={(e) => update("needs", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Budget range</label>
                  <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<3000">{"< €3,000"}</SelectItem>
                      <SelectItem value="3000-6000">€3,000 – €6,000</SelectItem>
                      <SelectItem value="6000-15000">€6,000 – €15,000</SelectItem>
                      <SelectItem value="15000+">€15,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Timeline</label>
                  <Select value={form.timeline} onValueChange={(v) => update("timeline", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="2-4weeks">2–4 weeks</SelectItem>
                      <SelectItem value="1month+">1+ month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  variant="cta"
                  size="lg"
                  className="flex-1"
                  onClick={() => {
                    if (!form.needs.trim()) {
                      toast.error("Please describe what you need.");
                      return;
                    }
                    setStep(3);
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-serif text-foreground">Summary</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-text-secondary">Name</span>
                  <span className="text-foreground">{form.name}</span>
                  <span className="text-text-secondary">Email</span>
                  <span className="text-foreground">{form.email}</span>
                  {form.company && (
                    <>
                      <span className="text-text-secondary">Company</span>
                      <span className="text-foreground">{form.company}</span>
                    </>
                  )}
                  <span className="text-text-secondary">Need</span>
                  <span className="text-foreground">{form.needs}</span>
                  {form.budget && (
                    <>
                      <span className="text-text-secondary">Budget</span>
                      <span className="text-foreground">{form.budget}</span>
                    </>
                  )}
                  {form.timeline && (
                    <>
                      <span className="text-text-secondary">Timeline</span>
                      <span className="text-foreground">{form.timeline}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button variant="cta" size="lg" className="flex-1" onClick={handleSubmit}>
                  Book my discovery call
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
