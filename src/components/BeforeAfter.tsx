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
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const { t } = useLanguage();

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, pos)));
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
      <div
        className="relative aspect-square cursor-col-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After image (full) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${10000 / sliderPos}%` }} />
        </div>
        {/* Slider line */}
        <div className="absolute top-0 bottom-0 z-10" style={{ left: `${sliderPos}%` }}>
          <div className="absolute -translate-x-1/2 w-0.5 h-full bg-primary-foreground/90 shadow-md" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
              <path d="M5 3L2 8L5 13M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-3 left-3 bg-foreground/70 text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm z-20">
          {t("gallery.before")}
        </span>
        <span className="absolute top-3 right-3 bg-accent/90 text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm z-20">
          {t("gallery.after")}
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
