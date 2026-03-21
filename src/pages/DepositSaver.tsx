import { motion } from "framer-motion";
import {
  Shield, AlertTriangle, Camera, MessageCircle, Phone,
  ArrowDown, CheckCircle2, Wrench, PaintBucket, Footprints,
  DoorOpen, Sofa, Hammer, Clock, BadgeCheck
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PHONE_NUMBER, WHATSAPP_URL } from "@/lib/contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import heroImg from "@/assets/deposit-saver-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const problems = [
  { icon: Wrench, label: "Wall holes & cracks" },
  { icon: Footprints, label: "Floor scratches" },
  { icon: DoorOpen, label: "Loose hinges & fittings" },
  { icon: Sofa, label: "Dirty sofa & upholstery" },
];

const fixes = [
  { icon: PaintBucket, title: "Wall patching & paint touch-ups", desc: "Fill holes, sand smooth, and repaint to match" },
  { icon: Footprints, title: "Floor scratch removal", desc: "Buff out scratches and restore the finish" },
  { icon: DoorOpen, title: "Hinges, handles & fittings", desc: "Tighten, replace, and realign all hardware" },
  { icon: Wrench, title: "Cabinet & shelf repairs", desc: "Fix loose shelves, doors, and drawer slides" },
  { icon: Sofa, title: "Upholstery deep cleaning", desc: "Professional Kärcher cleaning for sofas & chairs" },
  { icon: Hammer, title: "General wear & tear", desc: "All the small fixes landlords notice" },
];

const steps = [
  { icon: Camera, num: "01", title: "Send photos", desc: "WhatsApp us pictures of the damage — it's free" },
  { icon: MessageCircle, num: "02", title: "Get a quote", desc: "We reply with a clear price — usually same day" },
  { icon: CheckCircle2, num: "03", title: "We fix it", desc: "Fast, professional repairs before your inspection" },
];

const stats = [
  { icon: AlertTriangle, value: "50.000+", label: "ISK average deposit deduction" },
  { icon: BadgeCheck, value: "80%", label: "of landlords inspect for damage" },
  { icon: Clock, value: "1–2 days", label: "is all we need to fix it" },
];

const DepositSaver = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar customLinks={[
        { label: "The Problem", href: "#problem" },
        { label: "Services", href: "#services" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
          <div className="max-w-2xl">
            <motion.div
              className="mb-6 flex items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                <Shield className="w-4 h-4" /> Deposit Saver
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-secondary">Deposit Saver</span>
              <br />
              We fix the issues that cost you your deposit.
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-2.5 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {problems.map((p, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground/80 text-sm px-4 py-2 rounded-full backdrop-blur-sm border border-primary-foreground/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                >
                  <p.icon className="w-4 h-4 text-secondary" /> {p.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
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
        </div>

        <motion.a
          href="#problem"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </section>

      {/* Stats bar */}
      <section className="py-10 sm:py-14 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
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
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  </motion.div>
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-xs sm:text-sm mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-block bg-destructive/10 text-destructive border border-destructive/20 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                ⚠️ The problem
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Small damage =
                <br />
                <span className="text-destructive">less money back.</span>
              </h2>
              <motion.p
                className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Landlords check everything — even minor issues can reduce your deposit by tens of thousands of ISK.
              </motion.p>
              <motion.p
                className="text-muted-foreground text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                A small wall hole or a few scratches on the floor? That's money out of your pocket. We fix it for a fraction of the cost.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Wrench, label: "Wall damage", desc: "Holes, cracks, scuffs" },
                { icon: Footprints, label: "Floor issues", desc: "Scratches, dents, stains" },
                { icon: DoorOpen, label: "Fittings", desc: "Hinges, handles, locks" },
                { icon: Sofa, label: "Upholstery", desc: "Stains, odors, wear" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-card border border-border rounded-xl p-5 group cursor-default"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-5 h-5 text-destructive" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section id="services" className="py-16 sm:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
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
                className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border shadow-sm group cursor-default"
                whileHover={{ y: -3, boxShadow: "0 8px 25px -8px hsl(var(--primary) / 0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <f.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="font-heading font-bold text-card-foreground mb-1">{f.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Three simple steps to saving your deposit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
                    className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-9 h-9 text-primary" />
                    <motion.span
                      className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    >
                      {item.num}
                    </motion.span>
                  </motion.div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="text-center mt-10 font-heading text-xl font-bold text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Done. ✅
          </motion.p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Transparent pricing</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-8">
              How much does it cost?
            </h2>

            <motion.div
              className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <p className="text-muted-foreground mb-3 text-sm uppercase tracking-wider font-medium">Most jobs</p>
              <p className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-3">
                30.000 – 80.000 ISK
              </p>
              <p className="text-muted-foreground mb-8">
                Depends on size and damage.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent font-semibold bg-accent/10 rounded-full px-5 py-2.5 mx-auto w-fit">
                <CheckCircle2 className="w-5 h-5" />
                <span>Usually much cheaper than losing your deposit.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/3 -translate-x-1/4"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Fix it before inspection.
              <br />
              <span className="text-secondary">Keep your deposit.</span>
            </h2>
            <p className="text-primary-foreground/70 mb-10 text-lg max-w-lg mx-auto">
              Send us photos of the damage and we'll give you a free quote — usually within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-accent/90 transition-all shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Send photos on WhatsApp
              </motion.a>
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-heading font-bold text-base px-8 py-4 rounded-xl hover:bg-primary-foreground/90 transition-all shadow-lg"
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
