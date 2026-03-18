import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We serve the Greater Reykjavík area (Reykjavík, Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær) and Reykjanesbær (Keflavík, Njardvík, Hafnir). Contact us if you're nearby — we may still be able to help!",
  },
  {
    q: "How does the Deposit Saver service work?",
    a: "Send us photos of any damage in your rental before you move out — scratched floors, wall holes, broken hinges, etc. We'll give you a clear quote and our handyman will fix everything in one visit. We can also coordinate directly with your landlord as an add-on service.",
  },
  {
    q: "How quickly can you come?",
    a: "Most jobs are scheduled within 1-3 days. For urgent requests, we'll do our best to come the same or next day — just let us know via WhatsApp.",
  },
  {
    q: "How do I get a quote?",
    a: "Simply take a photo of what needs fixing and send it to us via WhatsApp. We'll reply with a clear price — no obligation, no hidden fees.",
  },
  {
    q: "Do I need to buy the materials?",
    a: "For most small jobs, we bring everything needed. For larger jobs (e.g., specific paint colors, furniture), we'll let you know in advance what's needed.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer (millifærsla) and cash. Payment is due after the job is completed to your satisfaction.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-card border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
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

export default FAQ;
