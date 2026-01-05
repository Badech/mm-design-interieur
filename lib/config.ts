export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212XXXXXXXXX";

export function buildWhatsAppMessage(defaultMessage: string, context?: { page?: string; language?: string }) {
  const parts = [defaultMessage];
  if (context?.page) parts.push(`\n\nPage: ${context.page}`);
  if (context?.language) parts.push(`\nLang: ${context.language}`);
  return parts.join("");
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
