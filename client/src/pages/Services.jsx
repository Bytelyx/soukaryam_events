import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CtaBanner from '../components/CtaBanner';
import {  Sparkles, Check, HelpCircle, ChevronDown, ArrowRight, MessageCircle} from 'lucide-react';
import { getWhatsAppUrl } from '../config/env';
import SignatureServices from '../components/SignatureServices';

const packages = [
  {
    name: 'Silver Heritage',
    tier: 'Essential Luxury',
    price: 'From ₹350 / plate',
    bestFor: 'Intimate gatherings, Housewarmings, Family Puja ceremonies',
    features: [
      'Authentic vegetarian or non-veg main courses',
      'Freshly prepared starters & welcome beverage',
      'Traditional Payasam or dessert',
      'Uniformed catering crew & hygiene captains',
      'Quality melamine/banana-leaf presentation',
      'Standard buffet station setup'
    ],
    highlight: false
  },
  {
    name: 'Gold Imperial',
    tier: 'Most Celebrated',
    price: 'From ₹650 / plate',
    bestFor: 'Grand Weddings, Engagements, Corporate Annual Dinners',
    features: [
      'Comprehensive multi-cuisine course spread',
      '2 Live cooking stations (Appam/Dosa/Tandoor/Pasta)',
      '3 Signature desserts including Palada & Rasmalai',
      'Welcome mocktail bar & fruit punch lounge',
      'Luxury roll-top chafing sets & fine bone china',
      'Dedicated banquet manager & VIP hospitality team'
    ],
    highlight: true
  },
  {
    name: 'Royal Diamond Sovereign',
    tier: 'Ultra Luxury & VIP',
    price: 'From ₹1,100 / plate',
    bestFor: 'Celebrity weddings, VVIP banquets, Multi-day destination events',
    features: [
      'Unlimited bespoke gourmet live counters',
      'Exotic seafood, imported cuts & artisanal cheeses',
      'Liquid nitrogen desserts & signature flambé',
      'Gold-trimmed porcelain dinnerware & crystal stemware',
      'Executive Master Chef on-site coordination',
      'Pre-event multi-course private tasting session included'
    ],
    highlight: false
  }
];

const faqs = [
  {
    q: 'Do you arrange a food tasting session prior to confirmation?',
    a: 'Yes! For weddings and large celebrations with over 300 guests, we arrange a curated tasting session where you and your family can sample our signature dishes, provide feedback, and fine-tune spice levels.'
  },
  {
    q: 'What is your operational coverage area?',
    a: 'We operate across the entirety of Kerala (Kochi, Trivandrum, Kozhikode, Thrissur, Kottayam, Palakkad, Kannur) as well as major metro hubs across South India including Bengaluru, Coimbatore, and Chennai.'
  },
  {
    q: 'What is the minimum and maximum guest capacity you serve?',
    a: 'Our central catering kitchens are equipped to cater intimate events starting from 50 guests up to mega-feasts exceeding 5,000 guests, maintaining absolute flavor and temperature consistency.'
  },
  {
    q: 'Can you customize menus for specific dietary or religious needs?',
    a: 'Absolutely. We prepare 100% pure vegetarian Brahmin/Jain sadhyas in separate dedicated cookware, as well as Halal-certified meats, gluten-free, and vegan options upon request.'
  },
  {
    q: 'Do you handle crockery, cutlery, and service personnel?',
    a: 'Yes, all our catering packages include complete infrastructure: roll-top stainless/copper chafers, fine bone china, stainless steel cutlery, drinking water setups, and well-groomed, uniformed service staff.'
  },
  {
    q: 'How far in advance should we secure our event date?',
    a: 'We advise booking 2 to 6 months in advance for peak wedding and festival seasons (e.g. Chingam, festive months, December/January) as auspicious dates fill up very quickly.'
  }
];

const steps = [
  {
    step: '01',
    title: 'Consultation & Vision',
    description: 'We listen to your celebration ideas, guest profile, favorite flavors, and budget parameters to formulate an initial blueprint.'
  },
  {
    step: '02',
    title: 'Menu Tasting & Curation',
    description: 'Our culinary master crafts a bespoke menu. For milestone events, you participate in an intimate tasting to finalize every nuance.'
  },
  {
    step: '03',
    title: 'Logistics & Fresh Sourcing',
    description: 'Ingredients are sourced farm-fresh at dawn. Central preparation runs under stringent FSSAI temperature and hygiene controls.'
  },
  {
    step: '04',
    title: 'Flawless Celebration Day',
    description: 'Our banquet team arrives 2 hours prior to start. Live counters sizzle, buffets gleam, and our captains serve your guests royally.'
  }
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <PageTransition>
      <div className="w-full bg-[#fcfaf5]">
        
        {/* Services Page Hero */}
        <section className="bg-[#0a1d17] text-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(203,161,53,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#154236] border border-[#cba135]/40 text-[#e8cc75] text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#cba135]" />
              <span>Full-Spectrum Hospitality</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight"
            >
              Bespoke Menus &{' '}
              <span className="gold-gradient-text italic font-normal">
                Celebration Packages
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Discover comprehensive catering tiers and event coordination designed to make your occasion effortless, opulent, and utterly delicious.
            </motion.p>
          </div>
        </section>

        {/* Signature Services Section (CTA Button Disabled) */}
        <SignatureServices showFooterCta={false} />

        {/* Catering Packages Comparison */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#154236]">
              Transparent Hospitality Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1d17] mt-1">
              Curated Catering Packages
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3">
              Every package can be customized to your exact dish preferences, guest demographics, and theme colors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => {
              const whatsappText = `Hello Soukaryam Events, I would like to enquire about the "${pkg.name}" (${pkg.tier}) catering package at ${pkg.price}. Please provide availability and quote.`;
              const pkgWhatsappUrl = getWhatsAppUrl(whatsappText);

              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-[#0a1d17] text-white shadow-2xl border-2 border-[#cba135] scale-105 z-10'
                      : 'bg-white text-[#1a1f1e] shadow-lg border border-gray-200 hover:border-[#cba135]/60'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] text-[#0a1d17] text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      Host Favorite
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${pkg.highlight ? 'text-[#cba135]' : 'text-[#154236]'}`}>
                          {pkg.tier}
                        </span>
                        <h3 className={`text-2xl font-serif font-bold mt-1 ${pkg.highlight ? 'text-white' : 'text-[#0a1d17]'}`}>
                          {pkg.name}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`text-2xl font-serif font-bold ${pkg.highlight ? 'text-[#e8cc75]' : 'text-[#154236]'}`}>
                        {pkg.price}
                      </span>
                      <span className={`text-xs ml-1 ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                        (customizable)
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed mb-6 italic ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                      Ideal for: {pkg.bestFor}
                    </p>

                    <div className={`space-y-3 pt-6 border-t ${pkg.highlight ? 'border-[#154236]' : 'border-gray-100'}`}>
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? 'text-[#e8cc75]' : 'text-[#154236]'}`} />
                          <span className={pkg.highlight ? 'text-gray-200' : 'text-gray-700'}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 space-y-2">
                    <a href={pkgWhatsappUrl} target="_blank" rel="noopener noreferrer"className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                        pkg.highlight
                          ? 'bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] text-[#0a1d17] hover:shadow-lg'
                          : 'bg-[#154236] text-white hover:bg-[#0a1d17]'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Choose {pkg.name} on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <Link to={`/contact?eventType=${encodeURIComponent(pkg.name)}`} className="block text-center text-[11px] text-gray-400 hover:text-[#cba135] underline pt-1">
                      Or submit detailed proposal request
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </section>

        {/* How We Work: 4 Steps */}
        <section className="py-20 bg-[#f7f3ea] text-[#1a1f1e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#154236]">
                Flawless Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1d17] mt-1">
                How We Bring Your Feast to Life
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                From the first conversation to the final sweet course, our refined workflow ensures total peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((st) => (
                <div key={st.step} className="bg-white rounded-2xl p-6 border border-[#cba135]/25 shadow-md relative">
                  <span className="text-4xl font-serif font-black text-[#cba135]/30 absolute top-4 right-4">
                    {st.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#154236] text-[#e8cc75] flex items-center justify-center font-bold text-sm mb-4">
                    {st.step}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0a1d17] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#154236]/10 text-[#154236] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#cba135]" />
              <span>Host Queries Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1d17]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <button type="button" onClick={() => toggleFaq(idx)} className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors">
                    <span className="font-serif font-bold text-sm sm:text-base text-[#0a1d17]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#cba135] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-xs text-gray-500">
            Have a unique question not listed here?{' '}
            <a href={getWhatsAppUrl("Hello Soukaryam Events, I have a question regarding catering.")} target="_blank" rel="noopener noreferrer" className="text-[#154236] font-bold underline">
              Ask our event planner on WhatsApp
            </a>
          </div>
        </section>

        {/* Bottom CTA */}
        <CtaBanner />

      </div>
    </PageTransition>
  );
}