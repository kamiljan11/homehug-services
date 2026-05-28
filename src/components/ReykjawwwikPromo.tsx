import { motion } from "framer-motion";
import { Globe, Camera, Megaphone, Zap, ExternalLink } from "lucide-react";

const features = [
  { icon: Globe, text: "Custom Website" },
  { icon: Camera, text: "Professional Photos" },
  { icon: Megaphone, text: "Google & Facebook Ads" },
  { icon: Zap, text: "All-In-One Plan" },
];

const ReykjawwwikPromo = () => (
  <section className="py-20 sm:py-28 bg-foreground text-primary-foreground overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/35 mb-6">
          Business Autopilot
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
          Want a Website Like This<br />
          <span className="text-[#EF4444]">For Your Business?</span>
        </h2>

        <p className="text-primary-foreground/55 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          We build professional, conversion-focused websites for tradespeople, handymen, and service
          businesses in Iceland. Everything done for you — website, photos, ads, all managed.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-primary-foreground/[0.07] border border-primary-foreground/10 rounded-full px-4 py-2 text-sm text-primary-foreground/70"
            >
              <Icon className="w-4 h-4 text-primary-foreground/40" />
              {text}
            </div>
          ))}
        </div>

        <motion.a
          href="https://reykjawwwik.is"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#EF4444] text-white font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-[#EF4444]/90 transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
          <ExternalLink className="w-4 h-4" />
        </motion.a>

        <p className="text-primary-foreground/35 text-sm mt-7">
          From only 19.990 ISK/month
        </p>
        <p className="text-primary-foreground/25 text-xs mt-2">
          ⚡ Live in 7 days · Fully personalised · No long-term contracts
        </p>
      </motion.div>
    </div>
  </section>
);

export default ReykjawwwikPromo;
