import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-handyman.jpg";
import heroMobileImg from "@/assets/hero-handyman-mobile.jpg";
import { useDemoModal } from "@/components/DemoModal";

const Hero = () => {
  const { t } = useLanguage();
  const { openDemo } = useDemoModal();

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroMobileImg} alt="" className="w-full h-full object-cover sm:hidden" />
        <img src={heroImg} alt="" className="w-full h-full object-cover object-center hidden sm:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
        <div className="max-w-2xl">

          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://flagcdn.com/w80/pl.png" alt="Poland" className="w-10 h-auto rounded-sm shadow-md hidden sm:block" />
            <span className="bg-accent text-accent-foreground text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
              ✅ {t("hero.freeQuote")}
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("hero.title1")}
            <br />
            <span className="text-secondary">{t("hero.title2")}</span>
            <br />
            {t("hero.title3")}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-primary-foreground/70 mb-8 sm:mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={() => openDemo("phone")}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              {t("hero.callNow")}
            </motion.button>
            <motion.button
              onClick={() => openDemo("whatsapp")}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero.whatsappQuote")}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default Hero;
