import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer
    className="py-12"
    style={{
      background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(213 54% 24%) 100%)",
    }}
  >
    <div className="container max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-serif text-lg text-hero-foreground mb-1">Thomas Laloux</p>
          <p className="text-sm text-hero-foreground/50">
            Financial AI automation &amp; systematic trading infrastructure
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-hero-foreground/60">
          <a href="mailto:contact@thomaslaloux.com" className="flex items-center gap-2 hover:text-hero-foreground transition-colors">
            <Mail size={14} /> contact@thomaslaloux.com
          </a>
          <a href="https://linkedin.com/in/thomaslaloux" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-hero-foreground transition-colors">
            <Linkedin size={14} /> LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> Belgium
          </span>
        </div>
      </div>

      <div className="border-t border-hero-foreground/10 mt-8 pt-6 text-xs text-hero-foreground/30 text-center">
        © {new Date().getFullYear()} Thomas Laloux. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
