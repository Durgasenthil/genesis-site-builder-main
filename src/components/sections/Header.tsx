import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navKeys = [
  "home",
  "about",
  "services",
  "whatwedo",
  "faq",
  "contact",
  "appointment",
] as const;
const sectionIds = [
  "home",
  "about",
  "services",
  "whatwedo",
  "faq",
  "contact",
  "appointment",
];

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
        >
          <img
            src="/images/raphael.png"
            alt="Raphael Homoeocare Logo"
            className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
          />
          <span className="font-serif-display text-xl font-bold text-foreground tracking-tight">
            Raphael <span className="text-primary">Homoeocare</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </nav>

        {/* Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span
              className={language === "en" ? "text-primary font-semibold" : ""}
            >
              EN
            </span>
            <Switch
              checked={language === "ta"}
              onCheckedChange={(checked) => setLanguage(checked ? "ta" : "en")}
            />
            <span
              className={language === "ta" ? "text-primary font-semibold" : ""}
            >
              தமிழ்
            </span>
          </div>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="flex flex-col py-4 px-6 gap-3">
              {navKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => scrollTo(sectionIds[i])}
                  className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
