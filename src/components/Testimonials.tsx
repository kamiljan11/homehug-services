import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/lib/contact";

const testimonials = [
  { name: "Ewa K.", location: "Reykjavík", text: "Moving out was so stressful, but QuickFix saved my deposit! They patched the walls and fixed the floor scratches in one visit. Landlord didn't even notice.", rating: 5 },
  { name: "Tomasz R.", location: "Keflavík", text: "Bought a whole kitchen from IKEA. These guys assembled everything in a day. Professional, clean, and on time. Highly recommend!", rating: 5 },
  { name: "Anna S.", location: "Njardvík", text: "Quick, honest, and affordable. Sent a WhatsApp photo of my leaky faucet and had it fixed the next day. Great communication throughout.", rating: 5 },
];

const GoogleBadge = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      className="flex items-center justify-center gap-3 mb-10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex items-center gap-2.5 bg-card border border-border rounded-full px-5 py-2.5 shadow-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div className="flex items-center gap-1.5">
          <span className="font-heading font-bold text-card-foreground text-sm">4.9</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
              </div>
            ))}
          </div>
        </div>
        <span className="text-muted-foreground text-xs">
          {t("testimonials.googleReviews")}
        </span>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("testimonials.subtitle")}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <GoogleBadge />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-card rounded-2xl p-8 shadow-md border border-border relative overflow-hidden group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-10 h-10" />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">"{item.text}"</p>
              <div>
                <p className="font-heading font-semibold text-card-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-8 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Join them.{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
          >
            Get your free quote now.
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;