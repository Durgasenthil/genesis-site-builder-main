import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceGroups = [
  {
    title: "General Homoeopathic Treatment",
    items: [
      "Acute & chronic diseases",
      "Fever, cold, cough, viral infections",
      "Allergies & sinusitis",
      "Headache & migraine",
    ],
  },
  {
    title: "Women's Health (Homoeopathy)",
    items: [
      "PCOS / PCOD",
      "Thyroid problems",
      "Irregular periods, Fibroids & cysts",
      "Infertility support",
    ],
  },
  {
    title: "Child Care (Paediatric Homoeopathy)",
    items: [
      "Recurrent cold & cough, Tonsillitis",
      "Worm infestation, Growth & immunity boosting",
      "Behavioural issues (ADHD tendencies, irritability)",
    ],
  },
  {
    title: "Skin & Hair Treatment",
    items: [
      "Acne, eczema, psoriasis",
      "Corns, pigmentation, vitiligo",
      "Hair fall, dandruff, fungal infections",
    ],
  },
  {
    title: "Renal Disorders (Kidney Related)",
    items: [
      "Kidney stone management",
      "Recurrent UTI",
      "Early CKD supportive care",
      "Renal colic pain relief",
    ],
  },
  {
    title: "Lifestyle & Metabolic Disorders",
    items: [
      "Diabetes (supportive care)",
      "Hypertension",
      "Obesity / Weight management",
      "Thyroid issues",
    ],
  },
  {
    title: "Mental & Emotional Wellness",
    items: [
      "Anxiety, stress, depression tendencies",
      "Sleep disturbances, exam fear",
      "Emotional balancing remedies",
    ],
  },
  {
    title: "Neurological Disorders (Supportive Care)",
    items: [
      "Supportive care for Parkinsonism",
      "Paraplegia (symptom management & rehabilitation support)",
      "Neuralgia & neuropathic pain",
      "Migraine & neural headaches",
    ],
  },
  {
    title: "Bone & Joint Care",
    items: [
      "Arthritis",
      "Cervical & lumbar spondylosis",
      "Sciatica, joint pains, sprains",
    ],
  },
  {
    title: "Stomach & Digestive Disorders",
    items: ["Gastritis, acidity", "IBS", "Constipation", "Ulcers"],
  },
  {
    title: "Cancer Care (Supportive Treatment)",
    items: [
      "Supportive care along with ongoing medical/oncology treatment",
      "Symptom relief (pain, nausea, fatigue, sleep issues)",
      "Emotional support & stress reduction",
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
