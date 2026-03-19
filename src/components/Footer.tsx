import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";
import { PHONE_NUMBER, WHATSAPP_URL, EMAIL } from "@/lib/contact";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {i === 0 && (
                <>
                  <div className="flex items-center gap-2.5 mb-4">
                    <img src={logo} alt="QuickFix Iceland" className="w-11 h-11 brightness-150" />
                    <span className="font-heading font-bold text-lg text-primary-foreground">QuickFix Iceland</span>
                  </div>
                  <p className="text-sm leading-relaxed">{t("footer.description")}</p>
                </>
              )}
              {i === 1 && (
                <>
                  <h4 className="font-heading font-semibold text-primary-foreground mb-4">{t("footer.services")}</h4>
                  <ul className="space-y-2 text-sm">
                    <li>{t("footer.depositSaver")}</li>
                    <li>{t("footer.ikeaAssembly")}</li>
                    <li>{t("footer.karcherClean")}</li>
                    <li>{t("footer.plumbing")}</li>
                    <li>{t("footer.shelfInstall")}</li>
                    <li>{t("footer.generalRepairs")}</li>
                  </ul>
                </>
              )}
              {i === 2 && (
                <>
                  <h4 className="font-heading font-semibold text-primary-foreground mb-4">{t("footer.contact")}</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 shrink-0" />
                      <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary-foreground transition-colors">{PHONE_NUMBER}</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">WhatsApp</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 shrink-0" />
                      <a href={`mailto:${EMAIL}`} className="hover:text-primary-foreground transition-colors">{EMAIL}</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" />
                      Greater Reykjavík & Reykjanesbær
                    </li>
                  </ul>
                </>
              )}
              {i === 3 && (
                <>
                  <h4 className="font-heading font-semibold text-primary-foreground mb-4">{t("footer.hours")}</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      {t("footer.weekdays")}
                    </li>
                    <li className="pl-6">{t("footer.saturday")}</li>
                    <li className="pl-6">{t("footer.sunday")}</li>
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-primary-foreground/10 pt-8 text-center text-xs flex flex-col sm:flex-row items-center justify-between gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} QuickFix Reykjavík. {t("footer.rights")}</p>
          <Link to="/privacy" className="hover:text-primary-foreground transition-colors underline">
            {t("footer.privacy")}
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
