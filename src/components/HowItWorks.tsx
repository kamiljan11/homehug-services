import { motion } from "framer-motion";
import { Camera, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Snap a Photo",
    description: "Take a picture of what needs fixing — a scratched floor, broken hinge, or flat-pack box.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Get a Quote",
    description: "Send it via WhatsApp. We reply with a clear, honest price — no hidden fees, no surprises.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "We Fix It",
    description: "Our handyman arrives, gets it done, and sends you before & after photos as proof.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
            Easy as 1-2-3
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No complicated booking. Send a photo, get a price, we show up and fix it. That's it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
                )}
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                  <Icon className="w-9 h-9 text-primary" />
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
