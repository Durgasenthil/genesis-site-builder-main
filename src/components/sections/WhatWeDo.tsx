import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  Pill,
  RefreshCw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { key: "step1", icon: ClipboardList },
  { key: "step2", icon: Search },
  { key: "step3", icon: Pill },
  { key: "step4", icon: RefreshCw },
  { key: "step5", icon: Sparkles },
];

const WhatWeDo = () => {
  const { t } = useLanguage();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [1, 2, 3];

  const next = () => setTestimonialIndex((i) => (i + 1) % 3);
  const prev = () => setTestimonialIndex((i) => (i - 1 + 3) % 3);

  return (
    <section id="whatwedo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("whatwedo.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("whatwedo.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-border" />

            {steps.map(({ key, icon: Icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex md:flex-col items-center gap-3 md:gap-2 relative z-10 flex-1"
              >
                <div className="h-14 w-14 rounded-full bg-tertiary text-tertiary-foreground flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {t(`whatwedo.${key}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-center mb-6">
            {t("whatwedo.desc")}
          </p>
          <ul className="space-y-3">
            {[1, 2, 3].map((n) => (
              <li
                key={n}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                {t(`whatwedo.point${n}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-sage-light rounded-2xl p-8 text-center relative"
          >
            <Quote className="h-8 w-8 text-primary/20 mx-auto mb-4" />
            <p className="text-foreground italic leading-relaxed mb-4">
              {t(`testimonial.${testimonials[testimonialIndex]}.text`)}
            </p>
            <p className="text-primary font-semibold">
              — {t(`testimonial.${testimonials[testimonialIndex]}.name`)}
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full h-9 w-9"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${i === testimonialIndex ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full h-9 w-9"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
