import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Wrench, Hammer, Droplets, Sparkles, Home, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import { useDemoModal } from "@/components/DemoModal";

const iconFloat = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 5, scale: 1.05, transition: { duration: 0.3 } },
};

const arrowSlide = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.25 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  features: string[];
  price: string;
  t: (key: TranslationKey) => string;
  compact?: boolean;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, desc, features, t, compact, className = "" }: ServiceCardProps) => {
  const { openDemo } = useDemoModal();
  return (
    <motion.div
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      className={`rounded-2xl p-6 sm:p-8 bg-card shadow-lg border border-border transition-all duration-300 cursor-default ${className}`}
    >
      <motion.div
        className={`${compact ? "w-11 h-11 rounded-lg mb-4" : "w-14 h-14 rounded-xl mb-6"} flex items-center justify-center bg-primary/10`}
        variants={iconFloat}
      >
        <Icon className={`${compact ? "w-5 h-5" : "w-7 h-7"} text-primary`} />
      </motion.div>
      <h3 className={`font-heading ${compact ? "text-lg" : "text-xl"} font-bold mb-2 text-card-foreground`}>{title}</h3>
      <p className="text-sm leading-relaxed mb-4 text-muted-foreground">{desc}</p>
      <ul className={`${compact ? "space-y-1" : "space-y-1.5"} mb-4`}>
        {features.map((f, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.06 }}
          >
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent" />
            {f}
          </motion.li>
        ))}
      </ul>
      <motion.button
        onClick={() => openDemo("whatsapp")}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        whileHover="hover"
        initial="rest"
      >
        <MessageCircle className="w-4 h-4" /> {t("services.getFreeQuote")} <motion.span variants={arrowSlide}><ArrowRight className="w-4 h-4" /></motion.span>
      </motion.button>
    </motion.div>
  );
};

const Services = () => {
  const { t, tArray } = useLanguage();
  const { openDemo } = useDemoModal();

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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">
            {t("services.subtitle")}
          </span>
          <p className="text-muted-foreground max-w-xl mx-auto mt-3">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Deposit Saver — wide featured card */}
          <motion.div
            variants={fadeUp}
            initial="rest"
            whileHover="hover"
            className="md:col-span-7 relative rounded-2xl p-6 sm:p-8 bg-primary text-primary-foreground shadow-xl shadow-primary/20 ring-1 ring-primary/30 transition-all duration-300 cursor-default"
          >
            <span className="absolute -top-3 left-8 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {t("services.mostPopular")}
            </span>
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary-foreground/15"
              variants={iconFloat}
            >
              <Shield className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <h3 className="font-heading text-2xl font-bold mb-2">{t("services.depositSaver")}</h3>
            <p className="text-sm leading-relaxed mb-6 text-primary-foreground/75">
              {t("services.depositSaverDesc")}
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
              {tArray("services.depositFeatures").map((f, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-primary-foreground/80"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-secondary" />
                  {f}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                onClick={() => openDemo("whatsapp")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                whileHover="hover"
                initial="rest"
              >
                <MessageCircle className="w-4 h-4" /> {t("services.getFreeQuote")} <motion.span variants={arrowSlide}><ArrowRight className="w-4 h-4" /></motion.span>
              </motion.button>
              <Link
                to="/deposit-saver"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-secondary hover:bg-secondary/90 px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:scale-105"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* IKEA — narrower right */}
          <div className="md:col-span-5">
            <ServiceCard
              icon={Wrench}
              title={t("services.ikeaAssembly")}
              desc={t("services.ikeaDesc")}
              features={tArray("services.ikeaFeatures")}
              price="8.000 ISK"
              t={t}
              className="h-full"
            />
          </div>

          {/* Kärcher */}
          <div className="md:col-span-4">
            <ServiceCard
              icon={Droplets}
              title={t("services.karcherClean")}
              desc={t("services.karcherDesc")}
              features={tArray("services.karcherFeatures")}
              price="10.000 ISK"
              t={t}
              className="h-full"
            />
          </div>

          {/* Deep Clean */}
          <div className="md:col-span-4">
            <ServiceCard
              icon={Sparkles}
              title={t("services.deepClean")}
              desc={t("services.deepCleanDesc")}
              features={tArray("services.deepCleanFeatures")}
              price="16.000 ISK"
              t={t}
              className="h-full"
            />
          </div>

          {/* Regular Cleaning */}
          <div className="md:col-span-4">
            <ServiceCard
              icon={Home}
              title={t("services.regularCleaning")}
              desc={t("services.regularCleaningDesc")}
              features={tArray("services.regularCleaningFeatures")}
              price="8.000 ISK"
              t={t}
              className="h-full"
            />
          </div>

          {/* Quick Fixes — full width bottom */}
          <div className="md:col-span-12">
            <motion.div
              variants={fadeUp}
              initial="rest"
              whileHover="hover"
              className="rounded-2xl p-6 sm:p-8 bg-card shadow-lg border border-border transition-all duration-300 cursor-default"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 shrink-0"
                  variants={iconFloat}
                >
                  <Hammer className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-2 text-card-foreground">{t("services.quickFixes")}</h3>
                  <p className="text-sm leading-relaxed mb-4 text-muted-foreground">{t("services.quickFixesDesc")}</p>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1.5 mb-4">
                    {tArray("services.quickFixesFeatures").map((f, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() => openDemo("whatsapp")}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    whileHover="hover"
                    initial="rest"
                  >
                    <MessageCircle className="w-4 h-4" /> {t("services.getFreeQuote")} <motion.span variants={arrowSlide}><ArrowRight className="w-4 h-4" /></motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;