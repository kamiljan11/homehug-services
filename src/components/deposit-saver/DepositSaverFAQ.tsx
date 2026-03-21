import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
const faqs = [
  {
    q: "My inspection is in 3 days — can you still help?",
    a: "Most likely yes. Most jobs take 1–2 days. Send us photos now and we'll tell you right away if we can make it in time.",
  },
  {
    q: "What if the damage is too serious to fix?",
    a: "We'll tell you honestly. If a repair won't save you money compared to the deduction, we won't waste your time or money.",
  },
  {
    q: "Do I need to be home while you work?",
    a: "Nope. Most clients just leave a key or arrange access with the building. We'll coordinate whatever works for you.",
  },
  {
    q: "Is the quote really free? No catch?",
    a: "Zero catch. Send us photos on WhatsApp, we reply with a price. If you don't want to go ahead, no hard feelings.",
  },
  {
    q: "What areas do you cover?",
    a: "Greater Reykjavík — Kópavogur, Hafnarfjörður, Garðabær, and Reykjanesbær. If you're nearby, just ask.",
  },
  {
    q: "Can you match my wall paint exactly?",
    a: "Yes — we color-match to your existing paint so the patches blend in completely. Your landlord won't be able to tell.",
  },
];

const DepositSaverFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground mt-3 mb-3 sm:mb-4">
            Questions you probably have
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            We get it — it's your money. Here are honest answers.
          </p>
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-heading font-bold text-card-foreground text-sm sm:text-base hover:bg-muted/50 transition-colors"
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground shrink-0 ml-3 sm:ml-4" />
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
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-muted-foreground leading-relaxed text-sm">
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
