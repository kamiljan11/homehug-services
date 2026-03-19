import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PHONE_NUMBER = "+3547655175";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=${encodeURIComponent("Hi! I need a quote for QuickFix services.")}`;

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-primary-foreground/70 mb-10 text-lg max-w-lg mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-primary-foreground/90 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {t("hero.callNow")}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-accent/90 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero.whatsappQuote")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
