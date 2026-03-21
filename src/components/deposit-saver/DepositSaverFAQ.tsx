import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How fast can you fix everything before my inspection?",
    a: "Most jobs take 1–2 days. If your inspection is soon, let us know — we'll prioritize your booking.",
  },
  {
    q: "What if the damage is too big to fix?",
    a: "We'll tell you upfront. If a repair won't save you money compared to the deduction, we'll be honest about it.",
  },
  {
    q: "Do I need to be home during the repairs?",
    a: "Not necessarily. Many clients leave us a key or arrange access. We'll coordinate what works best for you.",
  },
  {
    q: "Is the quote really free?",
    a: "Yes — send us photos on WhatsApp and we'll reply with a price. No obligation, no hidden fees.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover the greater Reykjavík area including Kópavogur, Hafnarfjörður, and Garðabær.",
  },
  {
    q: "Can you match the exact paint color on my walls?",
    a: "Yes. We color-match to your existing paint so patches blend seamlessly with the rest of the wall.",
  },
];

const DepositSaverFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Common questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about our Deposit Saver service.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-card-foreground hover:bg-muted/50 transition-colors"
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepositSaverFAQ;
