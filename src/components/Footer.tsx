import { Linkedin, Mail, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LangContext";
import { EMAIL, LINKEDIN_URL } from "@/i18n/dictionary";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer
      className="py-12"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--hero-bg)) 0%, hsl(var(--hero-bg-end)) 100%)",
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-serif text-lg text-hero-foreground mb-1">
              Thomas P. Laloux
            </p>
            <p className="text-sm text-hero-foreground/55 max-w-md">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-hero-foreground/70">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-hero-foreground transition-colors"
            >
              <Mail size={14} /> {EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-hero-foreground transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {t.footer.location}
            </span>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 mt-8 pt-6 text-xs text-hero-foreground/40 text-center">
          © {new Date().getFullYear()} Thomas P. Laloux. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
