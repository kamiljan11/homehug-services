import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  { name: "Ewa K.", location: "Reykjavík", text: "Moving out was so stressful, but QuickFix saved my deposit! They patched the walls and fixed the floor scratches in one visit. Landlord didn't even notice.", rating: 5 },
  { name: "Tomasz R.", location: "Keflavík", text: "Bought a whole kitchen from IKEA. These guys assembled everything in a day. Professional, clean, and on time. Highly recommend!", rating: 5 },
  { name: "Anna S.", location: "Njardvík", text: "Quick, honest, and affordable. Sent a WhatsApp photo of my leaky faucet and had it fixed the next day. Great communication throughout.", rating: 5 },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("testimonials.subtitle")}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-card rounded-2xl p-8 shadow-md border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{item.text}"</p>
              <div>
                <p className="font-heading font-semibold text-card-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
