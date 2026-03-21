import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ewa K.",
    text: "I was panicking — holes everywhere from shelves I put up. They came, patched everything, color-matched the paint. My landlord walked through and said 'looks great.' Full deposit back.",
    rating: 5,
    saved: "85.000 ISK",
  },
  {
    name: "Tomasz R.",
    text: "Floor scratches from moving furniture and a cabinet door that wouldn't close. Fixed in one afternoon. The price was exactly what they quoted — no surprises. Wish I'd known about this sooner.",
    rating: 5,
    saved: "45.000 ISK",
  },
  {
    name: "Sigurður H.",
    text: "Two years of coffee spills on the sofa. I thought I'd lose my deposit for sure. Their cleaning made it look like new. Even the landlord was impressed.",
    rating: 5,
    saved: "60.000 ISK",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-background border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 relative group min-w-[280px] snap-center shrink-0 w-[85vw] sm:w-auto">
    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/15 absolute top-3 right-3 sm:top-4 sm:right-4" />
    <div className="flex gap-0.5 mb-3 sm:mb-4">
      {Array.from({ length: t.rating }).map((_, j) => (
        <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-secondary text-secondary" />
      ))}
    </div>
    <p className="text-card-foreground leading-relaxed mb-4 sm:mb-5 text-xs sm:text-sm">"{t.text}"</p>
    <div className="flex items-center justify-between border-t border-border pt-3 sm:pt-4">
      <span className="font-heading font-bold text-card-foreground text-sm">{t.name}</span>
      <span className="text-[10px] sm:text-xs font-semibold text-accent bg-accent/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
        Saved {t.saved}
      </span>
    </div>
  </div>
);

const DepositSaverTestimonials = () => (
  <section className="py-12 sm:py-24 bg-card border-y border-border">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Real stories</span>
        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-card-foreground mt-3 mb-3 sm:mb-4">
          They were in your shoes
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          People who thought they'd lose their deposit — and didn't.
        </p>
      </motion.div>

      {/* Mobile: horizontal scroll slider */}
      <div className="sm:hidden -mx-5 px-5">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mr-5 pr-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <TestimonialCard t={t} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DepositSaverTestimonials;
