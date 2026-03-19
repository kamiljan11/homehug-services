import { motion } from "framer-motion";
import { Wrench, Clock, PiggyBank, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  const traits = [
    { icon: Wrench, label: t("about.trait1Label"), desc: t("about.trait1Desc") },
    { icon: Clock, label: t("about.trait2Label"), desc: t("about.trait2Desc") },
    { icon: PiggyBank, label: t("about.trait3Label"), desc: t("about.trait3Desc") },
    { icon: Users, label: t("about.trait4Label"), desc: t("about.trait4Desc") },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              {t("about.badge")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t("about.title1")}
              <br />
              <span className="text-primary">{t("about.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">{t("about.p1")}</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">{t("about.p2")}</p>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("about.p3")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {traits.map((trait, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <trait.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{trait.label}</h3>
                <p className="text-sm text-muted-foreground">{trait.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
