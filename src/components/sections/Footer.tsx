import { useLanguage } from "@/contexts/LanguageContext";
import { Leaf, Instagram, Youtube } from "lucide-react";

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

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/raphael.png"
                alt="Raphael Homoeocare Logo"
                className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
              />
              <span className="font-serif-display text-xl font-bold">
                Raphael Homoeocare
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-tertiary">
              {t("footer.quicklinks")}
            </h3>
            <div className="flex flex-col gap-2">
              {navKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => scrollTo(sectionIds[i])}
                  className="text-left text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-tertiary">
              {t("footer.contactus")}
            </h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>{t("contact.address")}</p>
              <p>{t("contact.phone")}</p>
              <p>{t("contact.email")}</p>
            </div>
          </div>

          {/* Follow Us - Social Media */}
          <div>
            <h3 className="font-semibold mb-4 text-tertiary">Follow Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/raphaelhomoeocare?igsh=MWx5cXo3YXhtdGxiMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@Healing_Angel_Dr.Jonitta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors group"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
