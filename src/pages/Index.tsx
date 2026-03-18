import { Shield, Wrench, Tv, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-handyman.jpg";

const PHONE_NUMBER = "+3541234567";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=Hi!%20I%20need%20a%20quote%20for%20QuickFix%20services.`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <img src={logo} alt="QuickFix Reykjavik" className="w-28 h-28 mx-auto mb-6 drop-shadow-lg" />
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
            QuickFix Reykjavík
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-body">
            Handyman Services & Repairs — Reykjavík, Njardvík, Keflavík & Grindavík
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading text-lg px-8 py-6 gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-heading text-lg px-8 py-6 gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Snap a photo, send it on WhatsApp, and get a free quote within minutes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Shield className="w-8 h-8 text-primary" />}
            title="Deposit Saver"
            description="Moving out? We fix everything so you get your full deposit back."
            features={[
              "Wall patching & repainting",
              "Floor scratch repair",
              "Cabinet hinge fixes",
              "Landlord coordination (add-on)",
              "Move-out cleaning available",
            ]}
            delay={100}
            highlighted
          />
          <ServiceCard
            icon={<Wrench className="w-8 h-8 text-primary" />}
            title="IKEA Assembly"
            description="From KALLAX to PAX — we build it fast and right."
            features={[
              "All IKEA furniture",
              "Shelf & curtain rod installation",
              "TV wall mounting",
              "Desk & wardrobe assembly",
            ]}
            delay={250}
          />
          <ServiceCard
            icon={<Tv className="w-8 h-8 text-primary" />}
            title="Quick Fixes"
            description="Small repairs that make a big difference. Send a photo for a quote."
            features={[
              "Minor plumbing repairs",
              "Faucet replacement",
              "Sink unclogging",
              "Door & window adjustments",
              "General handyman work",
            ]}
            delay={400}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-card-foreground mb-14">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { step: "1", title: "Send a Photo", desc: "Take a picture of what needs fixing and send it via WhatsApp." },
              { step: "2", title: "Get a Quote", desc: "We'll reply with a clear price — no hidden fees, no surprises." },
              { step: "3", title: "We Fix It", desc: "Our handyman comes, fixes it, and sends you before & after photos." },
            ].map((item, i) => (
              <div key={i} className="opacity-0 animate-fade-up" style={{ animationDelay: `${600 + i * 150}ms` }}>
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Get It Fixed?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Serving Reykjavík, Njardvík, Keflavík & Grindavík. Fast, reliable, affordable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${PHONE_NUMBER}`}>
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading text-lg px-8 py-6 gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-heading text-lg px-8 py-6 gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} QuickFix Reykjavík. All rights reserved.</p>
        <p className="mt-1">Reykjavík · Njardvík · Keflavík · Grindavík</p>
      </footer>
    </div>
  );
};

export default Index;
