import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import beforeWall from "@/assets/before-wall.jpg";
import afterWall from "@/assets/after-wall.jpg";
import beforeFloor from "@/assets/before-floor.jpg";
import afterFloor from "@/assets/after-floor.jpg";
import beforeSofa from "@/assets/before-sofa.jpg";
import afterSofa from "@/assets/after-sofa.jpg";

const projects = [
  { before: beforeWall, after: afterWall, labelKey: "gallery.wallRepair" as const },
  { before: beforeFloor, after: afterFloor, labelKey: "gallery.floorRepair" as const },
  { before: beforeSofa, after: afterSofa, labelKey: "gallery.sofaClean" as const },
];

const BeforeAfterCard = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const { t } = useLanguage();

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/5] cursor-col-resize select-none touch-none overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          draggable={false}
        />
        <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-md z-10" style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }} />
        <motion.div
          className="absolute top-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center -translate-y-1/2"
          style={{ left: `${sliderPos}%`, transform: `translateX(-50%) translateY(-50%)` }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronLeft className="w-4 h-4 text-foreground/70 -mr-1" />
          <ChevronRight className="w-4 h-4 text-foreground/70 -ml-1" />
        </motion.div>
        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-foreground/70 text-primary-foreground backdrop-blur-sm z-20">
          {t("gallery.before")}
        </span>
        <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground backdrop-blur-sm z-20">
          {t("gallery.after")}
        </span>
      </div>
      <div className="p-4">
        <p className="font-heading font-semibold text-card-foreground text-sm">{label}</p>
      </div>
    </motion.div>
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
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