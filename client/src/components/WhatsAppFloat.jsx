import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/env';

export default function WhatsAppFloat() {
  const whatsappUrl = getWhatsAppUrl(
    'Hello Soukaryam Events, I would like to inquire about your catering and event management services. Please share more details.'
  );

  return (
    <motion.aside
      aria-label="Direct WhatsApp Contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Tooltip */}
      <span className="pointer-events-none mr-3 hidden whitespace-nowrap rounded-full border border-[#cba135]/30 bg-[#0a1d17] px-3 py-1.5 text-xs font-medium text-[#fcfaf5] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Chat with Event Specialist
      </span>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-xl transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        {/* Notification Ping */}
        <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-[#cba135]" />
        </span>

        <MessageCircle className="h-7 w-7 fill-white/20 text-white" />
      </motion.a>
    </motion.aside>
  );
}