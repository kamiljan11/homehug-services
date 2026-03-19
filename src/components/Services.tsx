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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional handyman services for your home. Transparent pricing, quality work, photo updates after every job.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.highlighted
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 ring-1 ring-primary/30"
                    : "bg-card shadow-lg hover:shadow-xl border border-border"
                }`}
              >
                {service.badge && (
                  <span className="absolute -top-3 left-8 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    service.highlighted ? "bg-primary-foreground/15" : "bg-primary/10"
                  }`}
                >
                  <Icon className={`w-7 h-7 ${service.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                </div>

                <h3 className={`font-heading text-xl font-bold mb-3 ${service.highlighted ? "" : "text-card-foreground"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${service.highlighted ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2.5 text-sm ${
                        service.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${service.highlighted ? "bg-secondary" : "bg-accent"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    service.highlighted
                      ? "text-secondary hover:text-secondary/80"
                      : "text-primary hover:text-primary/80"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
