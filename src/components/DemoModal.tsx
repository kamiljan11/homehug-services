import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";
import { PHONE_NUMBER, EMAIL } from "@/lib/contact";

type DemoAction = "whatsapp" | "phone" | "email";

interface DemoContextType {
  openDemo: (action?: DemoAction) => void;
}

const DemoContext = createContext<DemoContextType>({ openDemo: () => {} });

export const useDemoModal = () => useContext(DemoContext);

const actionConfig = {
  whatsapp: {
    icon: MessageCircle,
    iconColor: "#25D366",
    bgColor: "rgba(37, 211, 102, 0.12)",
    label: "WhatsApp",
    detail: PHONE_NUMBER,
    message: "In the real website this opens WhatsApp and starts a chat with QuickFix Iceland directly.",
  },
  phone: {
    icon: Phone,
    iconColor: "#EF4444",
    bgColor: "rgba(239, 68, 68, 0.12)",
    label: "Phone Call",
    detail: PHONE_NUMBER,
    message: "In the real website this calls QuickFix Iceland directly from your phone.",
  },
  email: {
    icon: Mail,
    iconColor: "#3B82F6",
    bgColor: "rgba(59, 130, 246, 0.12)",
    label: "Email",
    detail: EMAIL,
    message: "In the real website this opens your email app to contact QuickFix Iceland.",
  },
} as const;

interface DemoModalProps {
  action: DemoAction;
  onClose: () => void;
}

const DemoModal = ({ action, onClose }: DemoModalProps) => {
  const config = actionConfig[action];
  const Icon = config.icon;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        className="relative z-10 bg-card border border-border rounded-2xl shadow-2xl w-full max-w-sm p-6 sm:p-8"
        initial={{ scale: 0.92, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 10 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Demo badge */}
        <span className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          Demo mode
        </span>

        {/* Icon + contact detail */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: config.bgColor }}
          >
            <Icon className="w-6 h-6" style={{ color: config.iconColor }} />
          </div>
          <div>
            <p className="font-heading font-bold text-foreground text-base">{config.label}</p>
            <p className="text-muted-foreground text-sm font-mono">{config.detail}</p>
          </div>
        </div>

        {/* Message */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {config.message}
        </p>

        {/* Got it button */}
        <button
          onClick={onClose}
          className="w-full bg-primary text-primary-foreground font-heading font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors mb-4"
        >
          Got it!
        </button>

        {/* Reykjawwwik promo */}
        <a
          href="https://reykjawwwik.is"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Want a website like this?{" "}
          <span className="font-semibold text-primary underline underline-offset-2 ml-1">
            reykjawwwik.is
          </span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </motion.div>
    </div>
  );
};

export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<DemoAction>("whatsapp");

  const openDemo = (a: DemoAction = "whatsapp") => {
    setAction(a);
    setOpen(true);
  };

  return (
    <DemoContext.Provider value={{ openDemo }}>
      {children}
      <AnimatePresence>
        {open && <DemoModal action={action} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </DemoContext.Provider>
  );
};
