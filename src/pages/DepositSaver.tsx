import { motion } from "framer-motion";
import {
  Shield, AlertTriangle, Camera, MessageCircle, Phone,
  ArrowDown, CheckCircle2, Wrench, PaintBucket, Footprints,
  DoorOpen, Sofa, Hammer, Clock, BadgeCheck, MapPin, SprayCan, Plus
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_URL } from "@/lib/contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import DepositSaverFAQ from "@/components/deposit-saver/DepositSaverFAQ";
import DepositSaverTestimonials from "@/components/deposit-saver/DepositSaverTestimonials";
import DepositSaverBeforeAfter from "@/components/deposit-saver/DepositSaverBeforeAfter";
import DepositSaverTrust from "@/components/deposit-saver/DepositSaverTrust";
import heroImg from "@/assets/deposit-saver-hero.jpg";
import AboutUs from "@/components/AboutUs";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fixes = [
  { icon: PaintBucket, title: "Wall patching & painting", desc: "Those nail holes from shelves and picture frames? Gone." },
  { icon: Footprints, title: "Floor scratch removal", desc: "Furniture marks and scuffs buffed out completely." },
  { icon: DoorOpen, title: "Hinges, handles & fittings", desc: "Everything that's loose, wobbly, or not closing right." },
  { icon: Wrench, title: "Cabinet & shelf repairs", desc: "Doors that don't close, drawers that stick — sorted." },
  { icon: Sofa, title: "Upholstery deep cleaning", desc: "Coffee stains, pet hair, everyday wear — Kärcher cleaned." },
  { icon: Hammer, title: "General wear & tear", desc: "All the little things landlords love to point out." },
];

const steps = [
  { icon: Camera, num: "01", title: "Send photos", desc: "Take a few pictures of the damage and WhatsApp them to us" },
  { icon: MessageCircle, num: "02", title: "Get your price", desc: "We'll reply with an honest quote — usually the same day" },
  { icon: CheckCircle2, num: "03", title: "We fix it", desc: "We come over, fix everything, and you're ready for inspection" },
];

const stats = [
  { icon: BadgeCheck, value: "80%", label: "of landlords check for damage" },
  { icon: Clock, value: "1–2 days", label: "and it's like you were never there" },
];

const DepositSaver = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar customLinks={[
        { label: "The Problem", href: "#problem" },
        { label: "Services", href: "#services" },
        { label: "How It Works", href: "#how-it-works" },
        
        { label: "Contact", href: "#contact" },
      ]} />

      {/* ───── HERO ───── */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-32 w-full">
          <div className="max-w-2xl">
            <motion.h1
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-secondary">Deposit Saver</span>
              <br />
              Fix the damage landlords notice. Keep your deposit.
            </motion.h1>

            <motion.p
              className="text-primary-foreground/70 text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              You've lived here. Life happened. We fix the marks it left — so your landlord has nothing to deduct.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Camera className="w-5 h-5" />
                Send photos for free quote
              </motion.a>
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-primary-foreground/20 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Call us
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#problem"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.a>
      </section>

      {/* ───── STATS + URGENCY (merged) ───── */}
      <section className="py-8 sm:py-14 bg-primary">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-md sm:max-w-lg mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mx-auto mb-1.5 sm:mb-2" />
                  <p className="font-heading text-lg sm:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-[10px] sm:text-sm mt-0.5 sm:mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── THE PROBLEM (text only, no duplicate cards) ───── */}
      <section id="problem" className="py-12 sm:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              You lived here. <span className="text-destructive">Now it shows.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              A few nail holes from hanging shelves. Scratches on the floor from moving furniture. A scuff on the wall where the sofa was. It's normal — but your landlord can use it to keep your entire deposit. We're talking 600.000–1.200.000 ISK gone. We fix it so they have nothing to hold against you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── WHAT WE FIX ───── */}
      <section id="services" className="py-12 sm:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our services</span>
            <p className="text-muted-foreground max-w-xl mx-auto mt-3">
              Just tell us what's damaged and we'll take care of it.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fixes.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-background border border-border shadow-sm group cursor-default"
                whileHover={{ y: -3, boxShadow: "0 8px 25px -8px hsl(var(--primary) / 0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-primary/10 shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="font-heading font-bold text-card-foreground mb-1">{f.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-muted-foreground text-sm sm:text-base">
              See your problem on the list?{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
              >
                Send us a photo — quote is free.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section id="how-it-works" className="py-12 sm:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">No stress</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-card-foreground mt-3 mb-4">
              As easy as texting a friend
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No forms. No appointments. Just snap a photo and send it over.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 md:gap-10">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  className="text-center relative group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                >
                  {i < steps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                      style={{ originX: 0 }}
                    />
                  )}
                  <motion.div
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-6 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6 sm:w-9 sm:h-9 text-primary" />
                    <motion.span
                      className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    >
                      {item.num}
                    </motion.span>
                  </motion.div>
                  <h3 className="font-heading text-xs sm:text-lg font-bold text-card-foreground mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-[10px] sm:text-sm leading-relaxed max-w-xs mx-auto hidden sm:block">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-heading text-lg sm:text-xl font-bold text-primary mb-2">
              That's it. Done. ✅
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium text-sm transition-colors"
              whileHover={{ x: 3 }}
            >
              <Camera className="w-4 h-4" />
              Start with step 1 — send us a photo →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ───── BEFORE & AFTER ───── */}
      <DepositSaverBeforeAfter />


      {/* ───── TRUST + GUARANTEE (merged) ───── */}
      <DepositSaverTrust />

      {/* ───── TESTIMONIALS ───── */}
      <DepositSaverTestimonials />

      {/* ───── FAQ ───── */}
      <DepositSaverFAQ />

      {/* ───── FINAL CTA ───── */}
      <section id="contact" className="py-12 sm:py-24 bg-primary relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-primary-foreground/5 rounded-full translate-y-1/3 -translate-x-1/4"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Your inspection is coming.
              <br />
              <span className="text-secondary">Let's make sure you're ready.</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 sm:mb-10 text-sm sm:text-lg max-w-lg mx-auto">
              Snap a few photos of the damage, send them on WhatsApp, and we'll tell you exactly what it'll cost to fix — for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-accent/90 transition-all shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Send photos on WhatsApp
              </motion.a>
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-primary-foreground/90 transition-all shadow-lg"
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

      {/* ───── ABOUT US ───── */}
      <AboutUs />

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default DepositSaver;
