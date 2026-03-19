import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const PHONE_NUMBER = "+3541234567";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=${encodeURIComponent("Hi! I need a quote for QuickFix services.")}`;

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="QuickFix Iceland" className="w-11 h-11 brightness-150" />
              <span className="font-heading font-bold text-lg text-primary-foreground">QuickFix Iceland</span>
            </div>
            <p className="text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.depositSaver")}</li>
              <li>{t("footer.ikeaAssembly")}</li>
              <li>{t("footer.karcherClean")}</li>
              <li>{t("footer.plumbing")}</li>
              <li>{t("footer.shelfInstall")}</li>
              <li>{t("footer.generalRepairs")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">{t("footer.contact")}</h4>
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
          <p>© {new Date().getFullYear()} QuickFix Reykjavík. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
