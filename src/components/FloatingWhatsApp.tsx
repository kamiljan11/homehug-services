import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useDemoModal } from "@/components/DemoModal";

const FloatingWhatsApp = () => {
  const { openDemo } = useDemoModal();

  return (
    <motion.button
      onClick={() => openDemo("whatsapp")}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.button>
  );
};

export default FloatingWhatsApp;
