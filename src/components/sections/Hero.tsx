import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-light via-mint to-cream" />

      {/* Decorative floating leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Leaf className="absolute top-20 left-[10%] h-16 w-16 text-primary/10 animate-float" />
        <Leaf
          className="absolute top-40 right-[15%] h-12 w-12 text-primary/10 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Leaf
          className="absolute bottom-32 left-[20%] h-10 w-10 text-primary/10 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Leaf
          className="absolute bottom-20 right-[25%] h-14 w-14 text-primary/10 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            Raphael Homoeocare
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {t("hero.headline")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtext")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("appointment")}
              className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-shadow"
            >
              {t("hero.cta.book")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("about")}
              className="rounded-full px-8 text-base border-primary/30 hover:bg-primary/5"
            >
              {t("hero.cta.learn")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
