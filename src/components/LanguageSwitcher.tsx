import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "https://flagcdn.com/w40/gb.png", label: "English" },
  { code: "pl", flag: "https://flagcdn.com/w40/pl.png", label: "Polski" },
  { code: "is", flag: "https://flagcdn.com/w40/is.png", label: "Íslenska" },
];

const LanguageSwitcher = ({ scrolled }: { scrolled?: boolean }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`w-8 h-8 rounded-md flex items-center justify-center transition-all ${
            language === lang.code
              ? "bg-primary/20 scale-110 ring-2 ring-primary/30"
              : scrolled
              ? "hover:bg-muted opacity-60 hover:opacity-100"
              : "hover:bg-primary-foreground/10 opacity-60 hover:opacity-100"
          }`}
          title={lang.label}
          aria-label={`Switch to ${lang.label}`}
        >
          <img
            src={lang.flag}
            alt={lang.label}
            className="w-5 h-auto rounded-sm"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
