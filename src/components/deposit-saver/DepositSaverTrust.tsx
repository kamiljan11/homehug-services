import { motion } from "framer-motion";
import { ShieldCheck, ThumbsUp, Clock, Banknote, Shield } from "lucide-react";

const badges = [
  { icon: ThumbsUp, title: "Trusted by Tenants", desc: "Expats and locals across Reykjavík rely on us." },
  { icon: Clock, title: "Done in 1–2 Days", desc: "Even last-minute? We'll make it work." },
  { icon: Banknote, title: "No Surprises", desc: "The price we quote is the price you pay." },
];

const DepositSaverTrust = () => (
  <section className="py-12 sm:py-20 bg-card border-y border-border">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      {/* Guarantee highlight */}
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 sm:mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
        </motion.div>
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-card-foreground mb-2">
          Satisfaction Guarantee
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          If your landlord isn't satisfied, we'll come back and fix it —{" "}
          <span className="font-semibold text-accent">free of charge.</span>
        </p>
      </motion.div>

      {/* Trust badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        {badges.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={i}
              className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-0 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-background border border-border"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center shrink-0 sm:mx-auto sm:mb-3">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="sm:text-center">
                <h3 className="font-heading font-bold text-card-foreground text-sm sm:text-sm mb-0.5 sm:mb-1">{badge.title}</h3>
                <p className="text-xs sm:text-xs text-muted-foreground leading-relaxed">{badge.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DepositSaverTrust;
