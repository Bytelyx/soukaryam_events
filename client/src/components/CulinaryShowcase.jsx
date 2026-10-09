import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../config/env';
import sadhyaImage from '../assets/culinary/sadhya.png';
import biryaniImage from '../assets/culinary/biriyani.png';
import liveCountersImage from '../assets/services/LiveFood.png';
import dessertsImage from '../assets/culinary/desserts.jpg';

const CATEGORIES = [
  {
    id: 'sadhya',
    label: 'Royal Kerala Sadhya',
    subtitle: 'The Soul of Traditional Celebrations',
    description:
      'Served traditionally on fresh banana leaves with up to 28 distinct heritage delicacies, prepared by experienced culinary masters using pure coconut oil, fresh grated coconuts, and natural ingredients.',
    items: [
      'Ada Pradhaman & Palada Payasam',
      'Authentic Kerala Red Rice / Kuruva',
      'Avial, Olan, Theeyal, & Kaalan',
      'Parippu Curry with Pure Desi Ghee',
      'Mambazha Pulissery & Kootu Curry',
      'Injipuli, Naranga & Nellikka Pickles',
      'Crispy Sharkara Varatti & Banana Chips',
      'Papadum, Moru Kachiyathu & Rasam',
    ],
    image: sadhyaImage,
    stat: '28+ Dishes',
  },

  {
    id: 'biryani',
    label: 'Royal Dum Biryani',
    subtitle: 'Fragrant Malabar & Dum Specialities',
    description:
      'Slow-cooked in sealed copper deghs with fragrant short-grain Kaima/Jeerakasala rice, tender marinades, fried crisp onions, cashews, and raisins, served with signature date-lime chutney and refreshing raita.',
    items: [
      'Authentic Thalassery Mutton Biryani',
      'Malabar Chicken Dum Biryani',
      'Vegetable & Paneer Tikka Biryani',
      'Crispy Kozhi Porichathu (Malabar Fried Chicken)',
      'Rich Mutton Rogan Josh & Kurma',
      'Fresh Mint & Onion Raita with Pappadam',
      'Dates & Lime Sweet-Spicy Chutney',
      'Sulaimani Black Tea with Mint & Spices',
    ],
    image: biryaniImage,
    stat: 'Slow-Cooked Deghs',
  },

  {
    id: 'live-counters',
    label: 'Live Culinary Stations',
    subtitle: 'Interactive Gourmet Entertainment',
    description:
      'Engage your guests with the sizzle and aroma of live cooking stations. Our chefs customize each dish right on the spot to individual guest preferences.',
    items: [
      'Live Appam & Stew / Roast Counters',
      'Artisan Dosa Lounge (20+ Varieties)',
      'Tossed Italian Pasta with Choice of Sauces',
      'Charcoal Tandoori Kebabs & Tikka Skewers',
      'Delhi Style Live Chaat & Pani Puri Bar',
      'Smoked Mongolian Wok Stir-Fry Station',
      'Wood-Fired Mini Pizzas & Garlic Bread',
      'Live Nitro Ice-Cream & Sizzling Brownies',
    ],
    image: liveCountersImage,
    stat: 'Customized on Spot',
  },

  {
    id: 'desserts',
    label: 'Desserts & Payasams',
    subtitle: 'A Sweet Grand Finale',
    description:
      'No celebration is complete without decadent desserts. Experience our celebrated array of rich slow-boiled payasams, North Indian royal sweets, and contemporary pastries.',
    items: [
      'Signature Palada Payasam (Pink & Creamy)',
      'Parippu Payasam with Jaggery & Coconut Milk',
      'Gothambu (Wheat) & Chakka (Jackfruit) Pradhaman',
      'Warm Gulab Jamun with Pistachio Rabri',
      'Fresh Fruit Custard Tartlets & Mousse',
      'Kesar Pista Rasmalai',
      'Artisan Kulfi on Sticks (Malai & Mango)',
      'Gourmet Pastry & Macaron Towers',
    ],
    image: dessertsImage,
    stat: 'Pure Ghee Sweets',
  },
];

export default function CulinaryShowcase() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  const activeCategory =
    CATEGORIES.find((cat) => cat.id === activeTab) || CATEGORIES[0];

  const waMessage = getWhatsAppUrl(
    `Hello Soukaryam Events, I am interested in your ${activeCategory.label} menu. Please share menu options and pricing.`
  );

  return (
    <section className="relative overflow-hidden bg-[#0a1d17] py-20 text-white md:py-28">

      {/* Glow Backgrounds */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#154236]/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#cba135]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#cba135]/30 bg-[#154236] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8cc75]">
            <ChefHat className="h-3.5 w-3.5 text-[#cba135]" />

            Masterful Gastronomy
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Curated Flavors &{' '}

            <span className="gold-gradient-text font-normal italic">
              Signature Menus
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-300 sm:text-lg">
            Every dish is prepared using premium, farm-fresh ingredients,
            unadulterated spices, and time-tested heritage secrets.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">

          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all sm:text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-[#e8cc75] to-[#cba135] text-[#0a1d17] shadow-lg shadow-[#cba135]/20'
                    : 'border border-white/10 bg-[#0f2f26]/80 text-gray-300 hover:bg-[#154236] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}

        </div>

        {/* Showcase Panel */}
        <div className="rounded-3xl border border-[#cba135]/25 bg-[#0f2f26]/60 p-6 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeCategory.id}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.3,
              }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >

              {/* Media Preview */}
              <div className="relative lg:col-span-6">

                <div className="relative h-[360px] overflow-hidden rounded-2xl border border-[#cba135]/30 shadow-2xl sm:h-[420px]">

                  <motion.img
                    initial={{
                      scale: 1.05,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    src={activeCategory.image}
                    alt={activeCategory.label}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d17]/80 via-transparent to-transparent" />

                </div>

              </div>

              {/* Menu Details */}
              <div className="space-y-6 lg:col-span-6">

                {/* Title */}
                <div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#cba135]">
                    {activeCategory.subtitle}
                  </span>

                  <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
                    {activeCategory.label}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {activeCategory.description}
                  </p>

                </div>

                {/* Items List */}
                <div>

                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Sample Inclusions & Delicacies:
                  </h4>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                    {activeCategory.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs text-gray-200 sm:text-sm"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#cba135]/40 bg-[#154236] text-[#e8cc75]">
                          <Check className="h-2.5 w-2.5" />
                        </div>

                        <span>{item}</span>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">

                  {/* Request Quote */}
                  <Link
                    to={`/contact?eventType=${encodeURIComponent(
                      activeCategory.label
                    )}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0a1d17] transition-shadow hover:shadow-lg"
                  >
                    Request Custom Menu & Quote
                  </Link>

                  {/* WhatsApp */}
                  <a
                    href={waMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#071510] px-5 py-3 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#0f2f26]"
                  >
                    WhatsApp Inquiry
                  </a>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}