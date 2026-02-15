import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Wind,
  Heart,
  Bone,
  Headphones,
  Pill,
  Activity,
  Droplet,
  Zap,
  Scissors,
  Shield,
} from "lucide-react";

const specialties = [
  { key: "chronic_allergies", icon: Wind },
  { key: "asthma", icon: Heart },
  { key: "arthritis", icon: Bone },
  { key: "migraine", icon: Headphones },
  { key: "digestive_disorders", icon: Pill },
  { key: "thyroid_disorders", icon: Activity },
  { key: "pcos", icon: Droplet },
  { key: "skin_problems", icon: Zap },
  { key: "hair_fall", icon: Scissors },
  { key: "child_immunity", icon: Shield },
];

const Specialties = () => {
  const { t } = useLanguage();

  return (
    <section id="specialties" className="py-20 md:py-28 bg-sage-light/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("specialties.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("specialties.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {specialties.map(({ key, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t(`specialties.${key}`)}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
