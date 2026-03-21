import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ewa K.",
    text: "I had holes in every wall from shelves. They patched and painted everything — landlord didn't notice a thing. Got my full deposit back!",
    rating: 5,
    saved: "85.000 ISK",
  },
  {
    name: "Tomasz R.",
    text: "Floor scratches and a broken cabinet hinge. Fixed in one afternoon. The quote was exactly what I paid — no surprises.",
    rating: 5,
    saved: "45.000 ISK",
  },
  {
    name: "Sigurður H.",
    text: "My sofa had coffee stains everywhere. Their Kärcher cleaning made it look brand new. Landlord was impressed.",
    rating: 5,
    saved: "60.000 ISK",
  },
];

const DepositSaverTestimonials = () => (
  <section className="py-16 sm:py-24 bg-card border-y border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
          Tenants who saved their deposit
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real stories from people who kept their money.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-background border border-border rounded-2xl p-6 relative group"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-card-foreground leading-relaxed mb-5 text-sm">"{t.text}"</p>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="font-heading font-bold text-card-foreground">{t.name}</span>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                Saved {t.saved}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DepositSaverTestimonials;
