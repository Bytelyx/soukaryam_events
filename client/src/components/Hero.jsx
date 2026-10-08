import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, MessageCircle, Star, Award, Utensils } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const STATS = [
  { value: '500+', label: 'Banquets Executed' },
  { value: '100%', label: 'Authentic Flavors' },
  { value: '4.9/5', label: 'Client Rating', isRating: true },
];

export default function Hero() {
  return (
    <div className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a1d17] text-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(203,161,53,0.18),transparent)]" />
      <div className="pointer-events-none absolute -right-48 top-1/4 h-96 w-96 rounded-full bg-[#154236] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#cba135]/15 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Hero Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6 text-center lg:col-span-7 lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-[#cba135]/40 bg-[#0f2f26] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8cc75]">
              <Sparkles className="h-3.5 w-3.5 text-[#cba135]" />
              Premier Catering & Event Management
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every Celebration Deserves an{' '}
              <span className="gold-gradient-text font-normal italic">
                Unforgettable Feast.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-base font-light leading-relaxed text-[#e7ddcb]/90 sm:text-lg lg:mx-0">
              From royal heritage <strong className="font-semibold text-white">Traditional Kerala Sadhyas</strong> served on fresh banana leaves to opulent multi-cuisine wedding banquets and corporate galas, Soukaryam Events orchestrates every bite with bespoke elegance.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0a1d17] shadow-lg transition-transform duration-200 hover:scale-[1.02] sm:w-auto">
                <Calendar className="h-4 w-4 text-[#0a1d17]" />
                Plan Your Event
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/services" className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#cba135]/30 bg-[#0f2f26]/80 px-7 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-[#cba135] hover:bg-[#154236] sm:w-auto">
                <Utensils className="h-4 w-4 text-[#cba135]" />
                Explore Menus & Cuisines
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mx-auto grid max-w-lg grid-cols-3 gap-4 border-t border-[#154236] pt-6 text-left lg:mx-0">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center gap-1 font-serif text-2xl font-bold text-[#e8cc75] sm:text-3xl">
                    {stat.isRating && (
                      <Star className="h-4 w-4 fill-[#cba135] text-[#cba135]" />
                    )}
                    <span>{stat.value}</span>
                  </div>
                  <p className="text-xs font-medium text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#cba135]/40 via-transparent to-[#1e5e4d]/40 opacity-70 blur-xl" />

              <div className="relative overflow-hidden rounded-3xl border-2 border-[#cba135]/30 bg-[#0f2f26] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80" alt="Luxury Catering Banquet by Soukaryam Events" className="h-[430px] w-full object-cover object-center transition-transform duration-500 hover:scale-105" loading="eager" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d17] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[#cba135]/25 bg-[#0a1d17]/85 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#cba135]">
                        Signature Special
                      </p>
                      <p className="font-serif text-sm font-bold text-white">
                        Grand 28-Course Royal Sadhya
                      </p>
                    </div>
                    <span className="rounded-full border border-[#cba135]/30 bg-[#154236] px-2.5 py-1 text-xs font-semibold text-[#e8cc75]">
                      Heritage Recipe
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge - WhatsApp */}
              <motion.div initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.4 }} className="absolute -left-4 -top-5 flex items-center gap-3 rounded-2xl border border-[#cba135]/40 bg-[#071510]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-left-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Fast Response</p>
                  <p className="text-xs font-bold text-white">Instant WhatsApp Estimates</p>
                </div>
              </motion.div>

              {/* Floating Badge - Chefs */}
              <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }} className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-[#cba135]/40 bg-[#071510]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cba135]/20 text-[#cba135]">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Culinary Excellence</p>
                  <p className="text-xs font-bold text-white">20+ Master Artisans & Chefs</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}