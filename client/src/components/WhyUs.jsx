import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Clock, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../config/env';

const REASONS = [
  {
    icon: Award,
    title: 'Master Culinary Lineage',
    description:
      'Headed by heritage chefs with over 25 years of mastery in authentic South Indian feasts, royal Mughlai banquets, and modern fusion gastronomy.',
  },
  {
    icon: Leaf,
    title: 'Farm-to-Fork Freshness',
    description:
      'We source pure cold-pressed coconut oil, fresh farm vegetables at dawn, and premium spices without artificial colors or preservatives.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromised FSSAI Hygiene',
    description:
      'Modern ISO-compliant central kitchens, sanitized preparation zones, temperature-controlled transport, and strict hygiene protocols.',
  },
  {
    icon: Clock,
    title: 'Punctual & Flawless Execution',
    description:
      'Your feast is set up 45 minutes prior to guest arrival. We guarantee zero delays, warm courses, and continuous attentive replenishment.',
  },
  {
    icon: Users,
    title: 'Dedicated Hospitality Crew',
    description:
      'Polite, impeccably groomed waitstaff and experienced banquet managers ensure every single guest receives warm royal hospitality.',
  },
  {
    icon: Sparkles,
    title: 'Turnkey Event Infrastructure',
    description:
      'From luxury roll-top chafing sets to fine bone china, decorative live counters, and complete dining hall setup, we manage it all.',
  },
];

export default function WhyUs() {
  const tastingSessionUrl = getWhatsAppUrl(
    'Hello Soukaryam Events, I would like to schedule a food tasting session for my upcoming event.'
  );

  return (
    <section className="relative bg-[#0a1d17] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#cba135]/30 bg-[#154236] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8cc75]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#cba135]" />
            The Soukaryam Guarantee
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Discerning Hosts{' '}
            <span className="gold-gradient-text font-normal italic">
              Trust Our Kitchens
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-300 sm:text-lg">
            Catering is more than food—it is the lasting memory your guests take home. Here is how we guarantee absolute perfection.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} whileHover={{ y: -6 }} className="rounded-2xl border border-[#cba135]/20 bg-[#0f2f26]/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#cba135]/60 hover:shadow-[0_0_25px_rgba(203,161,53,0.15)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#cba135]/30 bg-[#154236] text-[#e8cc75]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2.5 font-serif text-xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}