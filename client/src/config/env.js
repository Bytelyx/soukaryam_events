const env = import.meta.env;

export const WHATSAPP_NUMBER = env.VITE_WHATSAPP_NUMBER || '918086852813';
export const WHATSAPP_DISPLAY = env.VITE_WHATSAPP_DISPLAY || '+91 80868 52813';
export const API_BASE_URL = (env.VITE_API_URL || env.VITE_BACKEND_URL || '').replace(/\/$/, '');
export const CONTACT_EMAIL = env.VITE_CONTACT_EMAIL || 'info@soukaryamevents.com';

export const getWhatsAppUrl = (text = '') => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};