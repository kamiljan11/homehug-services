import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE_NUMBER = "+3541234567";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=${encodeURIComponent("Hi! I need a quote for QuickFix services.")}`;

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="QuickFix Iceland" className="w-11 h-11 brightness-150" />
              <span className="font-heading font-bold text-lg text-primary-foreground">QuickFix Iceland</span>
            </div>
            <p className="text-sm leading-relaxed">
              Polish handymen serving Greater Reykjavík & Reykjanesbær. We fix everything — fast, reliable, best prices.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Deposit Saver</li>
              <li>IKEA & Furniture Assembly</li>
              <li>Kärcher Deep Clean</li>
              <li>Minor Plumbing</li>
              <li>Shelf & Curtain Rod Installation</li>
              <li>General Repairs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary-foreground transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Greater Reykjavík & Reykjanesbær
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} QuickFix Reykjavík. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
