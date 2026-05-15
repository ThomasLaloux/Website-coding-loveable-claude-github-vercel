import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangContext";
import { CALENDLY_URL } from "@/i18n/dictionary";

const MobileStickyCTA = () => {
  const { t } = useLang();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-sm border-t border-border p-3">
      <Button variant="cta" size="lg" className="w-full" asChild>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          {t.mobileCta}
        </a>
      </Button>
    </div>
  );
};

export default MobileStickyCTA;
