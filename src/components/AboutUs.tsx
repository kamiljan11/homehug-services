import { motion } from "framer-motion";
import { Wrench, Clock, PiggyBank, Users, Camera } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/lib/contact";

const AboutUs = () => {
  const { t } = useLanguage();

  const traits = [
    { icon: Wrench, label: t("about.trait1Label"), desc: t("about.trait1Desc") },
    { icon: Clock, label: t("about.trait2Label"), desc: t("about.trait2Desc") },
    { icon: PiggyBank, label: t("about.trait3Label"), desc: t("about.trait3Desc") },
    { icon: Users, label: t("about.trait4Label"), desc: t("about.trait4Desc") },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              {t("about.badge")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t("about.title1")}
              <br />
              <span className="text-primary">{t("about.title2")}</span>
            </h2>
            <motion.p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t("about.p1")}
            </motion.p>
            <motion.p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {t("about.p2")}
            </motion.p>
            <motion.p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {t("about.p3")}
            </motion.p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary font-heading font-bold text-sm sm:text-base hover:text-primary/80 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ x: 3 }}
            >
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              Snap a photo, get a quote →
            </motion.a>
          </motion.div>

          <div className="hidden sm:grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-5 group cursor-default"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <motion.div
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <trait.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="font-heading font-bold text-foreground mb-1">{trait.label}</h3>
                <p className="text-sm text-muted-foreground">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;