import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Award, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorHighlight = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="doctor" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("doctor.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("doctor.subtitle")}
            </p>
          </motion.div>

          {/* Doctor Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl shadow-lg overflow-hidden mb-10"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
              {/* Doctor Image Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-sage-light to-mint flex items-center justify-center shadow-md">
                  <User className="h-32 w-32 text-primary/30" />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {t("doctor.name")}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    {t("doctor.credentials")}
                  </p>
                  <p className="text-muted-foreground mb-3">
                    {t("doctor.registration")}
                  </p>
                </div>

                <div className="flex items-start gap-2 mb-6 p-4 bg-primary/5 rounded-lg">
                  <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">
                    {t("doctor.description")}
                  </p>
                </div>

                <Button
                  className="w-full md:w-auto rounded-full"
                  onClick={() => scrollTo("appointment")}
                >
                  {t("doctor.cta")}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-10 rounded-2xl bg-gradient-to-r from-sage-light to-mint"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("doctor.cta_title")}
            </h3>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
              {t("doctor.cta_subtitle")}
            </p>
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() => scrollTo("appointment")}
            >
              {t("hero.cta.book")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorHighlight;
