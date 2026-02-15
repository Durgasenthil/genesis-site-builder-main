import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Leaf, Shield, Heart, Sparkles } from "lucide-react";

const badges = [
  { key: "natural", icon: Leaf },
  { key: "safe", icon: Shield },
  { key: "holistic", icon: Heart },
  { key: "noside", icon: Sparkles },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage-light to-mint flex items-center justify-center shadow-lg relative overflow-hidden group">
              {/* Background image */}
              <img
                src="/images/raphael-whitebg.jpeg"
                alt="Raphael Homoeo Care Clinic"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

              {/* Content */}
              {/* <div className="text-center p-8 relative z-10">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {t("about.tagline")}
                </h3>
              </div> */}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-5">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.p2")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.p3")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {badges.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-center gap-3 bg-sage-light rounded-xl p-4 transition-transform hover:scale-105"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {t(`about.badge.${key}`)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
