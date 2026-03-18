import { Phone, MessageCircle, Wrench, Tv, Droplets, Shield, SlidersHorizontal, Hammer } from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE_NUMBER = "+3541234567";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=Hi!%20I%20need%20a%20quote%20for%20QuickFix%20services.`;

const services = [
  { icon: Shield, label: "Deposit Saver" },
  { icon: Wrench, label: "IKEA Assembly" },
  { icon: Tv, label: "TV Mounting" },
  { icon: SlidersHorizontal, label: "Shelf & Curtain Rods" },
  { icon: Droplets, label: "Minor Plumbing" },
  { icon: Hammer, label: "Quick Fixes" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
          {/* Top section */}
          <div className="px-8 pt-10 pb-8 text-center">
            <img src={logo} alt="QuickFix Reykjavík" className="w-24 h-24 mx-auto mb-5" />
            <h1 className="font-heading text-3xl font-bold text-primary tracking-tight">
              QuickFix
            </h1>
            <p className="font-heading text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground mt-1">
              Reykjavík
            </p>
            <p className="text-foreground mt-5 text-lg font-medium">
              Handyman Services & Repairs
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Greater Reykjavík · Reykjanesbær
            </p>
          </div>

          {/* Services grid */}
          <div className="px-6 pb-8">
            <div className="grid grid-cols-3 gap-3">
              {services.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <Icon className="w-8 h-8 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs text-center font-medium text-foreground leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 border-t border-border">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-lg py-5 hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL NOW
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-card text-accent font-heading font-bold text-lg py-5 hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} QuickFix Reykjavík
        </p>
      </div>
    </div>
  );
};

export default Index;
