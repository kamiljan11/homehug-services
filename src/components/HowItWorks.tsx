import { motion } from "framer-motion";
import { Camera, MessageCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Camera, step: "01", title: t("how.step1Title"), description: t("how.step1Desc") },
    { icon: MessageCircle, step: "02", title: t("how.step2Title"), description: t("how.step2Desc") },
    { icon: CheckCircle, step: "03", title: t("how.step3Title"), description: t("how.step3Desc") },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("how.subtitle")}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
            {t("how.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("how.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                className="text-center relative group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                    style={{ originX: 0 }}
                  />
                )}
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-9 h-9 text-primary" />
                  <motion.span
                    className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + i * 0.2, stiffness: 500 }}
                  >
                    {item.step}
                  </motion.span>
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;