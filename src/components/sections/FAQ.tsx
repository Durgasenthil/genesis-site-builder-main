import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqKeys = [1, 2, 3, 4, 5, 6];

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 md:py-28 bg-sage-light/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('faq.title')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((n) => (
              <AccordionItem
                key={n}
                value={`faq-${n}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                  {t(`faq.q${n}`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(`faq.a${n}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
