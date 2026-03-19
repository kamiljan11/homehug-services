import { motion } from "framer-motion";
import { Shield, Wrench, Hammer, Droplets, ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/3541234567?text=${encodeURIComponent("Hi! I need a quote for QuickFix services.")}`;

const services = [
  {
    icon: Shield,
    title: "Deposit Saver",
    description: "Moving out? We fix scratches, patch walls, repair hinges — so you get your full deposit back.",
    features: ["Wall patching & painting", "Floor scratch repair", "Cabinet & hinge fixes", "Landlord coordination (add-on)", "Move-out cleaning available"],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    icon: Wrench,
    title: "IKEA Assembly",
    description: "From KALLAX to PAX — we build your furniture fast, right, and without the headache.",
    features: ["All IKEA furniture", "Shelf & curtain rod installation", "TV wall mounting", "Desk & wardrobe assembly"],
    highlighted: false,
  },
  {
    icon: Droplets,
    title: "Kärcher Deep Clean",
    description: "Professional deep cleaning for sofas, carpets, and upholstery using Kärcher equipment. Like-new results guaranteed.",
    features: ["Sofa & armchair cleaning", "Carpet & rug deep cleaning", "Stain removal", "Pet odor treatment"],
    highlighted: false,
  },
  {
    icon: Hammer,
    title: "Quick Fixes",
    description: "Small repairs that make a big difference. Send a photo and get a free quote within minutes.",
    features: ["Minor plumbing repairs", "Faucet replacement & sink unclogging", "Door & window adjustments", "General handyman work"],
    highlighted: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Fix</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Golden Hands at Your Service
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            If it's broken, we fix it. If it needs building, we build it. Polish craftsmanship, lowest prices guaranteed.
          </p>
        </motion.div>

        {/* Row 1: Deposit Saver large + 2 side by side */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Deposit Saver - highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-8 bg-primary text-primary-foreground shadow-xl shadow-primary/20 ring-1 ring-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute -top-3 left-8 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Most Popular
            </span>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary-foreground/15">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Deposit Saver</h3>
            <p className="text-sm leading-relaxed mb-6 text-primary-foreground/75">
              Moving out? We fix scratches, patch walls, repair hinges — so you get your full deposit back.
            </p>
            <ul className="space-y-2.5 mb-8">
              {["Wall patching & painting", "Floor scratch repair", "Cabinet & hinge fixes", "Landlord coordination (add-on)", "Move-out cleaning available"].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-secondary" />
                  {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
              <MessageCircle className="w-4 h-4" /> Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right column: IKEA + Kärcher stacked */}
          <div className="grid gap-6">
            {[services[1], services[2]].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                  className="rounded-2xl p-8 bg-card shadow-lg hover:shadow-xl border border-border hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                      <p className="text-sm leading-relaxed mb-4 text-muted-foreground">{service.description}</p>
                      <ul className="space-y-1.5 mb-4">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        <MessageCircle className="w-4 h-4" /> Get a Free Quote <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Quick Fixes full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl p-8 bg-card shadow-lg hover:shadow-xl border border-border hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                <Hammer className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold mb-2 text-card-foreground">Quick Fixes</h3>
              <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                Small repairs that make a big difference. Send a photo and get a free quote within minutes.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-4">
                {["Minor plumbing repairs", "Faucet replacement & sink unclogging", "Door & window adjustments", "General handyman work"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                <MessageCircle className="w-4 h-4" /> Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
