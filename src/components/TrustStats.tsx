import { motion } from "framer-motion";
import { Hammer, Users, Clock, ThumbsUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TrustStats = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Hammer, value: "300+", labelKey: "stats.jobsDone" as const },
    { icon: Users, value: "6", labelKey: "stats.yearsExp" as const },
    { icon: Clock, value: "<60min", labelKey: "stats.replyTime" as const },
    { icon: ThumbsUp, value: "98%", labelKey: "stats.satisfaction" as const },
  ];

  return (
    <section className="py-10 sm:py-14 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                </motion.div>
                <p className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 text-xs sm:text-sm mt-1">{t(stat.labelKey)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
