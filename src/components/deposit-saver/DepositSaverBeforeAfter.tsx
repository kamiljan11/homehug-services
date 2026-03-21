import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  { label: "Wall hole patched & painted", before: "🕳️ Visible nail holes and scuffs", after: "✨ Smooth, freshly painted wall" },
  { label: "Floor scratches removed", before: "😬 Deep scratches from furniture", after: "✨ Buffed and restored finish" },
  { label: "Cabinet hinge fixed", before: "🔧 Loose, hanging door", after: "✨ Aligned and secure" },
];

const ExampleCard = ({ example, index }: { example: typeof examples[0]; index: number }) => {
  const [showAfter, setShowAfter] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -3 }}
      onClick={() => setShowAfter(!showAfter)}
    >
      <div className="relative h-48 bg-muted flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={showAfter ? "after" : "before"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-center px-6"
          >
            <p className="text-4xl mb-2">{showAfter ? "✅" : "⚠️"}</p>
            <p className="text-sm font-medium text-muted-foreground">
              {showAfter ? example.after : example.before}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-3 left-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${showAfter ? "bg-accent/20 text-accent" : "bg-destructive/20 text-destructive"}`}>
            {showAfter ? "AFTER" : "BEFORE"}
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="font-heading font-bold text-card-foreground text-sm">{example.label}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {isMobile ? "Tap" : "Click"} to toggle before/after
        </p>
      </div>
    </motion.div>
  );
};

const DepositSaverBeforeAfter = () => (
  <section className="py-16 sm:py-24 bg-muted/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Results</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Before & After
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          See the kind of fixes that save deposits.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((ex, i) => (
          <ExampleCard key={i} example={ex} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default DepositSaverBeforeAfter;
