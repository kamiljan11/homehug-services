import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { EMAIL } from "@/lib/contact";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
          {t("privacy.title")}
        </h1>
        <div className="prose prose-sm sm:prose text-muted-foreground space-y-6">
          <p>{t("privacy.intro")}</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.collectTitle")}</h2>
          <p>{t("privacy.collectText")}</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.useTitle")}</h2>
          <p>{t("privacy.useText")}</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.contactTitle")}</h2>
          <p>
            {t("privacy.contactText")}{" "}
            <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
