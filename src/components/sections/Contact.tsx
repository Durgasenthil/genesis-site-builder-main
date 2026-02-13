import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('contact.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">{t('contact.address')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground text-sm">{t('contact.hours')}</p>
                <p className="text-muted-foreground text-sm">{t('contact.hours2')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">{t('contact.phone')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">{t('contact.email')}</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-sage-light rounded-xl text-sm text-primary font-medium text-center">
              {t('contact.walkin')}
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center overflow-hidden shadow-md">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.22!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA4MMKwMTMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0 rounded-2xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
