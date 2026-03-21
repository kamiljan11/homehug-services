import { motion } from "framer-motion";
import { ShieldCheck, ThumbsUp, Clock, Banknote } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "Satisfaction Guaranteed", desc: "Not happy? We'll make it right — free of charge." },
  { icon: ThumbsUp, title: "Many Deposits Saved", desc: "Trusted by tenants across Reykjavík." },
  { icon: Clock, title: "Fast Turnaround", desc: "Most jobs done in 1–2 days." },
  { icon: Banknote, title: "No Hidden Fees", desc: "The quote you get is the price you pay." },
];

const DepositSaverTrust = () => (
  <section className="py-12 sm:py-16 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {badges.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={i}
              className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-heading font-bold text-card-foreground text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{badge.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DepositSaverTrust;
