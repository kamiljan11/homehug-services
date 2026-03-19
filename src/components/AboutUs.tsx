import { motion } from "framer-motion";
import { Wrench, Clock, PiggyBank, Users } from "lucide-react";

const traits = [
  { icon: Wrench, label: "Złote ręce", desc: "Years of hands-on experience fixing everything" },
  { icon: Clock, label: "Fast & efficient", desc: "We get the job done quickly, no delays" },
  { icon: PiggyBank, label: "Cheapest solutions", desc: "We always find the most affordable way" },
  { icon: Users, label: "Word of mouth", desc: "Built on trust — friends recommend friends" },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              🇵🇱 About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Polish Golden Hands,
              <br />
              <span className="text-primary">Now in Iceland.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Polish handymen who fix everything — from deposit-saving repairs to IKEA assembly. Reliable, affordable, no surprises. Snap a photo, get a quote.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Need a shelf hung? A door fixed? A leaky tap sorted? We've done it all, hundreds of times. No unnecessary upselling, no inflated quotes — just honest work at honest prices.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our English might not be perfect, but our work speaks for itself. 💪
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {traits.map((trait, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <trait.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{trait.label}</h3>
                <p className="text-sm text-muted-foreground">{trait.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
