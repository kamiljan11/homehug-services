import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

import beforeWall from "@/assets/before-wall.jpg";
import afterWall from "@/assets/after-wall.jpg";
import beforeFloor from "@/assets/before-floor.jpg";
import afterFloor from "@/assets/after-floor.jpg";
import beforeSofa from "@/assets/before-sofa.jpg";
import afterSofa from "@/assets/after-sofa.jpg";

const projects = [
  {
    before: beforeWall,
    after: afterWall,
    labelKey: "gallery.wallRepair" as const,
  },
  {
    before: beforeFloor,
    after: afterFloor,
    labelKey: "gallery.floorRepair" as const,
  },
  {
    before: beforeSofa,
    after: afterSofa,
    labelKey: "gallery.sofaClean" as const,
  },
];

const BeforeAfterCard = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [showAfter, setShowAfter] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
      <div
        className="relative aspect-square cursor-pointer select-none"
        onClick={() => setShowAfter(!showAfter)}
      >
        <img
          src={showAfter ? after : before}
          alt={showAfter ? "After" : "Before"}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {/* Label badge */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm z-20 transition-colors duration-300 ${
          showAfter
            ? "bg-accent/90 text-accent-foreground"
            : "bg-foreground/70 text-primary-foreground"
        }`}>
          {showAfter ? t("gallery.after") : t("gallery.before")}
        </span>
        {/* Tap hint */}
        <span className="absolute bottom-3 right-3 bg-foreground/50 text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm z-20">
          {showAfter ? t("gallery.tapBefore") : t("gallery.tapAfter")}
        </span>
      </div>
      <div className="p-4">
        <p className="font-heading font-semibold text-card-foreground text-sm">{label}</p>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("gallery.subtitle")}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            {t("gallery.description")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BeforeAfterCard
                before={project.before}
                after={project.after}
                label={t(project.labelKey)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
