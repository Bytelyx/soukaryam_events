import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  UtensilsCrossed,
  Briefcase,
  PartyPopper,
  Flame,
  Sparkles,
  ArrowRight,
  Users,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import gsap from 'gsap';
import { getWhatsAppUrl } from '../config/env';

const SERVICES = [
  {
    id: 'wedding-catering',
    title: 'Luxury Wedding Banquets',
    category: 'Weddings & Receptions',
    description:
      'Impeccable royal banquets designed to be the highlight of your special day. From welcome mocktail lounges to majestic multi-course dinners.',
    icon: HeartHandshake,
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    capacity: '100 – 5,000+ Guests',
    highlights: [
      'Bespoke Multi-Cuisine Buffets',
      'Royal Table Setup & Chafing Dishware',
      'Dedicated Hospitality Captains',
      'Custom Welcome Beverage Lounge',
    ],
  },
  {
    id: 'biriyani-menu',
    title: 'Royal Biriyani Experience',
    category: 'Biriyani & Rice Specialities',
    description:
      'A grand celebration of fragrant basmati rice, slow-cooked meats and handpicked spices. From traditional Kerala flavours to rich Arabian and Hyderabadi preparations, every plate is crafted for unforgettable celebrations.',
    icon: UtensilsCrossed,
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=85',
    capacity: '50 – 5,000+ Guests',
    highlights: [
      'Traditional Dum-Cooked Biriyanis',
      'Chicken, Beef, Mutton & Fish Specialities',
      'Premium Basmati Rice & Handpicked Spices',
      'Perfect for Weddings & Large Celebrations',
    ],
  },
  {
    id: 'traditional-sadhya',
    title: 'Authentic Royal Sadhya',
    category: 'Heritage South Indian',
    description:
      'The pinnacle of Kerala gastronomic culture. Up to 28+ authentic vegetarian delicacies served in disciplined harmony on fresh plantain leaves.',
    icon: UtensilsCrossed,
    image:
      'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=85',
    capacity: '50 – 3,000+ Guests',
    highlights: [
      '28+ Dishes (Avial, Olan, Thoran, Kalan)',
      '4 Varieties of Traditional Payasams',
      'Pure Ghee & Handpicked Spices',
      'Traditional Pandal Serving Squad',
    ],
  },
  {
    id: 'corporate-catering',
    title: 'Corporate Galas & Conferences',
    category: 'Corporate Hospitality',
    description:
      'Sophisticated culinary service for annual general meetings, corporate retreats, executive lunches, product launches, and gala dinners.',
    icon: Briefcase,
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    capacity: '30 – 2,000+ Attendees',
    highlights: [
      'High-Tea & Artisan Finger Bites',
      'Continental & Indian Executive Buffets',
      'Punctual Corporate Scheduling',
      'Dietary & Vegan Customized Options',
    ],
  },
  {
    id: 'live-counters',
    title: 'Live Gourmet Food Stations',
    category: 'Culinary Theatrics',
    description:
      'Interactive culinary theater that dazzles your guests. Master chefs preparing delicacies right before their eyes.',
    icon: Flame,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    capacity: 'Any Event Size',
    highlights: [
      'Live Charcoal Tandoor & Grills',
      'Artisan Wood-Fired Pizza & Pasta Bar',
      'Signature Dosa & Appam Stations',
      'Live Chaat Counters',
    ],
  },
  {
    id: 'private-parties',
    title: 'Intimate Soirées & Birthdays',
    category: 'Private Gatherings',
    description:
      'Celebrations with family and dear friends made memorable with customized menus, chic presentations, and attentive care.',
    icon: PartyPopper,
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
    capacity: '25 – 200 Guests',
    highlights: [
      'Theme-Coordinated Menus',
      'Gourmet Sliders & Canapés',
      'Specialty Kids Menus',
      'Complete Cleanup Assistance',
    ],
  },
];

export default function SignatureServices({ showFooterCta = true }) {
  const navigate = useNavigate();

  const [isTransitioning, setIsTransitioning] = useState(false);

  const biriyaniCardRef = useRef(null);
  const transitionRef = useRef(null);

  const handleBiriyaniClick = () => {
    if (isTransitioning) return;

    const card = biriyaniCardRef.current;

    if (!card) {
      navigate('/biriyani-menu');
      return;
    }

    const rect = card.getBoundingClientRect();

    setIsTransitioning(true);

    requestAnimationFrame(() => {
      const overlay = transitionRef.current;

      if (!overlay) {
        navigate('/biriyani-menu');
        return;
      }

      gsap.set(overlay, {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        borderRadius: 24,
      });

      gsap.to(overlay, {
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => {
          navigate('/biriyani-menu');
        },
      });
    });
  };

  return (
    <>
      {/* ================================
          GSAP PAGE TRANSITION
      ================================= */}
      {isTransitioning && (
        <div
          ref={transitionRef}
          className="fixed z-[9999] overflow-hidden bg-[#0a1d17]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1d17] via-[#154236] to-[#0a1d17]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#cba135]/40 bg-[#cba135]/10 backdrop-blur-xl">
              <div className="h-8 w-8 animate-pulse rounded-full bg-[#cba135]" />
            </div>
          </div>
        </div>
      )}

      <section className="relative bg-[#fcfaf5] py-20 text-[#1a1f1e] md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ================================
              HEADER
          ================================= */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#154236]/20 bg-[#154236]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#154236]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#cba135]" />
              Our Signature Offerings
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-serif text-3xl font-bold tracking-tight text-[#0a1d17] sm:text-4xl lg:text-5xl"
            >
              Culinary Craftsmanship for{' '}
              <br className="hidden sm:inline" />

              <span className="text-[#1e5e4d]">
                Every Occasion.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              We blend time-honored traditional recipes with contemporary
              culinary artistry to create dining experiences that delight your
              guests and honor your milestone.
            </motion.p>
          </div>

          {/* ================================
              SERVICES GRID
          ================================= */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              const waUrl = getWhatsAppUrl(
                `Hello Soukaryam Events, I would like to enquire about "${service.title}" (${service.category}) for an estimated capacity of ${service.capacity}. Please share availability and menu packages.`
              );

              const isBiriyani = service.id === 'biriyani-menu';

              return (
                <motion.div
                  key={service.id}
                  ref={isBiriyani ? biriyaniCardRef : null}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  onClick={isBiriyani ? handleBiriyaniClick : undefined}
                  role={isBiriyani ? 'button' : undefined}
                  tabIndex={isBiriyani ? 0 : undefined}
                  onKeyDown={(event) => {
                    if (
                      isBiriyani &&
                      (event.key === 'Enter' ||
                        event.key === ' ')
                    ) {
                      event.preventDefault();
                      handleBiriyaniClick();
                    }
                  }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#cba135]/20 bg-white shadow-md transition-all duration-300 hover:border-[#cba135]/60 hover:shadow-2xl ${
                    isBiriyani ? 'cursor-pointer' : ''
                  }`}
                >

                  {/* ================================
                      IMAGE
                  ================================= */}
                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-[#cba135]/30 bg-[#0a1d17]/85 px-3 py-1 text-xs font-semibold text-[#e8cc75] backdrop-blur-md">
                      {service.category}
                    </span>

                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <Users className="h-3.5 w-3.5 text-[#cba135]" />
                      {service.capacity}
                    </span>

                    {/* Biriyani indicator */}
                    {isBiriyani && (
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-[#e8cc75]/30 bg-[#0a1d17]/80 px-3 py-1.5 text-xs font-bold text-[#e8cc75] backdrop-blur-md">
                        Explore Menu
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>

                  {/* ================================
                      CONTENT
                  ================================= */}
                  <div className="flex flex-1 flex-col justify-between p-6">

                    <div>

                      <div className="mb-2 flex items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#154236]/10 text-[#154236] transition-colors duration-300 group-hover:bg-[#154236] group-hover:text-[#e8cc75]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="font-serif text-xl font-bold text-[#0a1d17] transition-colors group-hover:text-[#154236]">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-gray-600">
                        {service.description}
                      </p>

                      {/* FEATURES */}
                      <div className="mb-6 space-y-2 border-t border-gray-100 pt-4">

                        {service.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs font-medium text-gray-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#154236]" />

                            <span>
                              {item}
                            </span>
                          </div>
                        ))}

                      </div>
                    </div>

                    {/* ================================
                        ACTIONS
                    ================================= */}
                    <div
                      className="flex items-center justify-between border-t border-gray-100 pt-4"
                      onClick={(event) => {
                        if (isBiriyani) {
                          event.stopPropagation();
                        }
                      }}
                    >

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-1 text-xs font-bold uppercase tracking-wider text-[#154236] transition-colors hover:text-[#cba135]"
                      >
                        <MessageCircle className="h-4 w-4 text-[#25D366]" />

                        Enquire

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ================================
              FOOTER CTA
          ================================= */}
          {showFooterCta && (
            <div className="mt-14 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#cba135]/40 bg-[#0a1d17] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-[#154236]"
              >
                View All Menus, Packages & FAQs

                <ArrowRight className="h-4 w-4 text-[#cba135]" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}