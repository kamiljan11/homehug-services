import { motion } from "framer-motion";
import { Shield, Wrench, Hammer, Droplets, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/lib/contact";

const Services = () => {
  const { t, tArray } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("services.subtitle")}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Deposit Saver */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-6 sm:p-8 bg-primary text-primary-foreground shadow-xl shadow-primary/20 ring-1 ring-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute -top-3 left-8 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {t("services.mostPopular")}
            </span>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary-foreground/15">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-1">{t("services.depositSaver")}</h3>
            <p className="text-secondary text-sm font-semibold mb-3">{t("services.fromPrice")} 15.000 ISK</p>
            <p className="text-sm leading-relaxed mb-6 text-primary-foreground/75">
              {t("services.depositSaverDesc")}
            </p>
            <ul className="space-y-2.5 mb-8">
              {tArray("services.depositFeatures").map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-secondary" />
                  {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
              <MessageCircle className="w-4 h-4" /> {t("services.getFreeQuote")} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* IKEA + Kärcher */}
          <div className="grid gap-6">
            {([
              { icon: Wrench, title: t("services.ikeaAssembly"), desc: t("services.ikeaDesc"), features: tArray("services.ikeaFeatures"), price: "5.000 ISK" },
              { icon: Droplets, title: t("services.karcherClean"), desc: t("services.karcherDesc"), features: tArray("services.karcherFeatures"), price: "7.000 ISK" },
            ]).map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                  className="rounded-2xl p-6 sm:p-8 bg-card shadow-lg hover:shadow-xl border border-border hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-1 text-card-foreground">{service.title}</h3>
                      <p className="text-primary text-sm font-semibold mb-3">{t("services.fromPrice")} {service.price}</p>
                      <p className="text-sm leading-relaxed mb-4 text-muted-foreground">{service.desc}</p>
                      <ul className="space-y-1.5 mb-4">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        <MessageCircle className="w-4 h-4" /> {t("services.getFreeQuote")} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Fixes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl p-6 sm:p-8 bg-card shadow-lg hover:shadow-xl border border-border hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                <Hammer className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold mb-1 text-card-foreground">{t("services.quickFixes")}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{t("services.fromPrice")} 4.000 ISK</p>
              <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                {t("services.quickFixesDesc")}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-4">
                {tArray("services.quickFixesFeatures").map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                <MessageCircle className="w-4 h-4" /> {t("services.getFreeQuote")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
