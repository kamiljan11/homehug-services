import { motion } from "framer-motion";
import { Shield, AlertTriangle, Camera, MessageCircle, Phone, ArrowRight, ArrowDown, CheckCircle2, Wrench, PaintBucket, Footprints, DoorOpen, Sofa } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_URL } from "@/lib/contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const problems = [
  { icon: Wrench, label: "Wall holes & cracks" },
  { icon: Footprints, label: "Floor scratches" },
  { icon: DoorOpen, label: "Loose hinges & fittings" },
  { icon: Sofa, label: "Dirty sofa & upholstery" },
];

const fixes = [
  { icon: PaintBucket, label: "Wall patching & paint touch-ups" },
  { icon: Footprints, label: "Floor scratch removal" },
  { icon: DoorOpen, label: "Hinges, handles & fittings" },
  { icon: Wrench, label: "Cabinet & shelf repairs" },
  { icon: Sofa, label: "Upholstery deep cleaning" },
];

const steps = [
  { num: "1", title: "Send photos", desc: "WhatsApp us pictures of the damage" },
  { num: "2", title: "Get a quote", desc: "We reply with a price — usually same day" },
  { num: "3", title: "We fix it", desc: "Fast repairs before your inspection" },
];

const DepositSaver = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-foreground to-foreground" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-28 sm:py-36 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
              <Shield className="w-4 h-4" /> Deposit Saver
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Moving out?
            <br />
            <span className="text-secondary">We fix the issues</span>
            <br />
            that cost you your deposit.
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {problems.map((p, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground/80 text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                <p.icon className="w-4 h-4 text-secondary" /> {p.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Camera className="w-5 h-5" />
              Send photos for free quote
            </motion.a>
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-primary-foreground/20 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Call us
            </motion.a>
          </motion.div>
        </div>

        <motion.a
          href="#problem"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-16 sm:py-24 bg-destructive/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Small damage = less money back.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Landlords check everything — even minor issues can reduce your deposit by tens of thousands of ISK. A small wall hole or a few scratches on the floor? That's money out of your pocket.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { amount: "50.000+", label: "ISK average deposit deduction" },
              { amount: "80%", label: "of landlords inspect for damage" },
              { amount: "1-2 days", label: "is all we need to fix it" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm"
              >
                <p className="font-heading text-3xl font-bold text-primary mb-1">{s.amount}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What we fix
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We fix the most common move-out problems. Focused fixes — no unnecessary work.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fixes.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-primary/10 shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-card-foreground">{f.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            How it works
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground font-heading text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-center mt-8 font-heading text-xl font-bold text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Done. ✅
          </motion.p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Pricing
            </h2>
            <div className="inline-block bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <p className="text-muted-foreground mb-2">Most jobs:</p>
              <p className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-2">
                30.000 – 80.000 ISK
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Depends on size and damage.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Usually much cheaper than losing your deposit.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Fix it before inspection.
              <br />
              <span className="text-secondary">Keep your deposit.</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Send us photos of the damage and we'll give you a free quote — usually within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Send photos on WhatsApp
              </motion.a>
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-primary-foreground/25 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Request quote by phone
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default DepositSaver;
