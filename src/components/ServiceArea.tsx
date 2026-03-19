import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const areas = [
  "Reykjavík",
  "Kópavogur",
  "Hafnarfjörður",
  "Garðabær",
  "Mosfellsbær",
  "Keflavík",
  "Njarðvík",
  "Grindavík",
];

const ServiceArea = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-lg font-bold text-foreground">{t("areas.title")}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {areas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/15 text-foreground text-sm font-medium px-3.5 py-1.5 rounded-full cursor-default transition-colors hover:bg-primary/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {area}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t("areas.other")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;
