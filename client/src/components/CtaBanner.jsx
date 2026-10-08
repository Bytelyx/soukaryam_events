import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from '../config/env';

export default function CtaBanner() {
  const phone = WHATSAPP_DISPLAY.replace(/\D/g, '');
  const whatsAppUrl = getWhatsAppUrl(
    'Hello Soukaryam Events, I would like to enquire about event catering.'
  );

  return (
    <section className="relative overflow-hidden bg-[#071510] py-16 text-white md:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-[#154236]/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#cba135]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cba135]/40 bg-[#154236] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8cc75]">
          <Sparkles className="h-3.5 w-3.5 text-[#cba135]" />
          Begin Your Celebration Journey
        </div>

        <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Host an Event Your Guests <br className="hidden sm:inline" />
          <span className="gold-gradient-text font-normal italic">
            Will Never Stop Praising?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 sm:text-lg">
          Book dates early for wedding seasons, auspicious dates, and festive weekends. Connect directly with our event consultants today.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0a1d17] shadow-lg transition-all hover:shadow-[0_0_25px_rgba(203,161,53,0.35)] sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              Request Detailed Quote
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#0f2f26] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#25D366] transition-colors hover:bg-[#154236] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Instant WhatsApp Chat
            </a>
          </motion.div>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Or speak directly to our catering director:{' '}
          <a
            href={`tel:${phone}`}
            className="font-semibold text-[#e8cc75] underline underline-offset-4 hover:text-white"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  );
}