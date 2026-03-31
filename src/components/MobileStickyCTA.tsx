import { Button } from "@/components/ui/button";

const MobileStickyCTA = () => {
  const scrollTo = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-sm border-t border-border p-3">
      <Button variant="cta" size="lg" className="w-full" onClick={scrollTo}>
        Book a discovery call
      </Button>
    </div>
  );
};

export default MobileStickyCTA;
