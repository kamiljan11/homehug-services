import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/lib/contact";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1"), cta: "Need a fix? Send us a photo →" },
    { q: t("faq.q2"), a: t("faq.a2"), cta: "Get a free quote now →" },
    { q: t("faq.q3"), a: t("faq.a3"), cta: "Book your repair today →" },
    { q: t("faq.q4"), a: t("faq.a4"), cta: "Message us — no commitment →" },
    { q: t("faq.q5"), a: t("faq.a5"), cta: "Check if we cover your area →" },
    { q: t("faq.q6"), a: t("faq.a6"), cta: "Tell us what you need →" },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-card border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("faq.subtitle")}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
            {t("faq.title")}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-medium text-foreground pr-4 group-hover:text-primary transition-colors">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      <p>{faq.a}</p>
                      <span className="block mt-3">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-primary hover:text-primary/80 transition-colors underline underline-offset-2 text-sm"
                        >
                          {faq.cta}
                        </a>
                      </span>
                    </div>
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