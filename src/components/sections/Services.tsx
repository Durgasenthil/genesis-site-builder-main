import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceGroups = [
  {
    title: "General Homoeopathic Consultation",
    items: [
      "Personalized treatment for acute and chronic illnesses",
    ],
  },
  {
    title: "Chronic Disease Management",
    items: [
      "Long-term care for recurring and persistent conditions",
    ],
  },
  {
    title: "Women's Health Care",
    items: [
      "Hormonal imbalance",
      "Menstrual issues",
      "PCOS",
      "Thyroid concerns",
    ],
  },
  {
    title: "Child Health Care",
    items: [
      "Safe remedies for infants and growing children",
    ],
  },
  {
    title: "Skin Disorders",
    items: [
      "Eczema",
      "Psoriasis",
      "Acne",
      "Other chronic skin issues",
    ],
  },
  {
    title: "Lifestyle & Stress Disorders",
    items: [
      "Anxiety",
      "Sleep disturbances",
      "Fatigue",
      "Stress-related conditions",
    ],
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-sage-light/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceGroups.map((g) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card p-6 rounded-2xl shadow-md"
            >
              <h3 className="font-semibold text-foreground mb-3 font-serif-display text-lg">
                {g.title}
              </h3>
              <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
