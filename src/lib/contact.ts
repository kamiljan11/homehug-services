export const PHONE_NUMBER = "+3547655175";

const WHATSAPP_NUMBER = PHONE_NUMBER.replace(/\D/g, "");
const WHATSAPP_TEXT = "Hi! I need a quote for QuickFix services.";

export const WHATSAPP_URL = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_TEXT)}`;
