import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/env';

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   BIRIYANI DATA
========================================================= */

const BIRYANI_ITEMS = [
  {
    name: 'Chicken Biriyani',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=85',
    description:
      'Fragrant basmati rice layered with tender chicken, caramelised onions and aromatic spices.',
  },

  {
    name: 'Lagoon Chicken Biriyani',
    price: '₹260',
    image:
      'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1000&q=85',
    description:
      'A rich signature preparation with deep spice, fragrant rice and succulent chicken.',
  },

  {
    name: 'Chicken Zurbian',
    price: '₹260',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
    description:
      'Arabian-inspired spiced rice with tender chicken and a beautifully aromatic finish.',
  },

  {
    name: 'Chicken Kabili',
    price: '₹270',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
    description:
      'Aromatic rice preparation inspired by traditional Kabuli flavours and rich spices.',
  },

  {
    name: 'Chicken Hyderabadi Dum Biriyani',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=1000&q=85',
    description:
      'Slow dum-cooked rice with layered spices, saffron notes and juicy chicken.',
  },

  {
    name: 'Chicken Fried Rice',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=85',
    description:
      'Wok-tossed aromatic rice with vegetables, herbs and perfectly seasoned chicken.',
  },

  {
    name: 'Beef Biriyani',
    price: '₹260',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
    description:
      'Rich biriyani layered with tender beef, aromatic basmati rice and Kerala spices.',
  },

  {
    name: 'Beef Kabili',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=85',
    description:
      'Fragrant Kabili-style rice paired with succulent beef and warm spices.',
  },

  {
    name: 'Beef Zurbian',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
    description:
      'Bold Arabian spices meet slow-cooked beef and fragrant long-grain rice.',
  },

  {
    name: 'Beef Mandi',
    price: '₹320',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
    description:
      'Tender beef paired with aromatic mandi rice and traditional Arabian flavours.',
  },

  {
    name: 'Beef Madhhoot',
    price: '₹300',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
    description:
      'A comforting rice preparation with slow-cooked beef and beautifully balanced spices.',
  },

  {
    name: 'Fish Biriyani',
    price: '₹300',
    image:
      'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    description:
      'Delicately spiced fish layered with fragrant biriyani rice and aromatic herbs.',
  },

  {
    name: 'Mutton Biriyani',
    price: '₹320',
    image:
      'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=1000&q=85',
    description:
      'Slow-cooked mutton layered with aromatic basmati rice and rich spices.',
  },

  {
    name: 'Mutton Mandi',
    price: '₹360',
    image:
      'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    description:
      'Slow-roasted mutton paired with beautifully seasoned Arabian mandi rice.',
  },

  {
    name: 'Mutton Hyderabadi Biriyani',
    price: '₹340',
    image:
      'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d7e?auto=format&fit=crop&w=1000&q=85',
    description:
      'A luxurious dum preparation with tender mutton, fragrant rice and royal spices.',
  },
];

/* =========================================================
   MANDI DATA
========================================================= */

const MANDI_ITEMS = [
  {
    name: 'Chicken Mandi',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
    description:
      'Smoky roasted chicken served over fragrant Arabian mandi rice.',
  },

  {
    name: 'Beef Mandi',
    price: '₹320',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    description:
      'Tender beef with aromatic mandi rice and traditional Arabian flavours.',
  },

  {
    name: 'Mutton Mandi',
    price: '₹360',
    image:
      'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=1000&q=85',
    description:
      'Slow-roasted mutton paired with beautifully seasoned mandi rice.',
  },
];

/* =========================================================
   STARTER DATA
========================================================= */

const STARTERS = [
  {
    name: 'Fish Fries',
    price: '₹180',
    image:
      'https://images.unsplash.com/photo-1580959375944-abd7e991f971?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Fish Fingers',
    price: '₹200',
    image:
      'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Fish Kebab',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Prawns Lollipop',
    price: '₹260',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Chicken Kebab',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Chicken Fry',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Chicken 65',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Chicken Kondattom',
    price: '₹240',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Alfahm Chicken',
    price: '₹260',
    image:
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Broasted Chicken',
    price: '₹240',
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Kadai Chicken',
    price: '₹250',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Chicken Kuruma',
    price: '₹230',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
  },

  {
    name: 'Chicken Mulakittathu',
    price: '₹230',
    image:
      'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85',
  },
];

/* =========================================================
   FOOD CARD
========================================================= */

function FoodCard({ item, dark = false }) {
  return (
    <article
      className={`food-card group overflow-hidden rounded-[28px] border shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        dark
          ? 'border-white/10 bg-white/5'
          : 'border-[#cba135]/20 bg-white'
      }`}
    >
      <div className="relative h-64 overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">

          <span className="font-serif text-2xl font-bold text-white">
            {item.price}
          </span>

          <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            Per Plate
          </span>

        </div>
      </div>

      <div className="p-6">

        <h3
          className={`font-serif text-2xl font-bold transition-colors ${
            dark
              ? 'text-white group-hover:text-[#e8cc75]'
              : 'text-[#0a1d17] group-hover:text-[#154236]'
          }`}
        >
          {item.name}
        </h3>

        {item.description && (
          <p
            className={`mt-3 text-sm leading-6 ${
              dark ? 'text-white/60' : 'text-gray-600'
            }`}
          >
            {item.description}
          </p>
        )}

        <div
          className={`mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
            dark ? 'text-[#e8cc75]' : 'text-[#154236]'
          }`}
        >
          <UtensilsCrossed className="h-4 w-4 text-[#cba135]" />

          Signature Preparation
        </div>

      </div>
    </article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function BiryaniMenu() {
  const pageRef = useRef(null);

  const starterSectionRef = useRef(null);

  const starterTrackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (reducedMotion) return;

      /* ================================================
         HERO ANIMATION
      ================================================= */

      gsap.from('.menu-hero-item', {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });

      /* ================================================
         SECTION HEADINGS
      ================================================= */

      gsap.utils.toArray('.section-heading').forEach((heading) => {
        gsap.from(heading, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            once: true,
          },
        });
      });

      /* ================================================
         FOOD CARDS
      ================================================= */

      gsap.utils.toArray('.food-card').forEach((card, index) => {

        gsap.from(card, {
          opacity: 0,
          y: 50,
          scale: 0.96,
          duration: 0.75,
          delay: (index % 3) * 0.08,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
        });

      });

      /* ================================================
         STARTER HORIZONTAL SCROLL
      ================================================= */

      const section = starterSectionRef.current;

      const track = starterTrackRef.current;

      if (section && track) {

        const getDistance = () => {
          return Math.max(
            0,
            track.scrollWidth -
              window.innerWidth +
              60
          );
        };

        gsap.to(track, {

          x: () => -getDistance(),

          ease: 'none',

          scrollTrigger: {

            trigger: section,

            start: 'top top',

            end: () =>
              `+=${getDistance() + window.innerHeight * 0.8}`,

            scrub: 1,

            pin: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,

          },

        });

        /* Starter title animation */

        gsap.from('.starter-intro', {

          opacity: 0,

          y: 40,

          duration: 0.9,

          scrollTrigger: {

            trigger: section,

            start: 'top 80%',

            once: true,

          },

        });
      }

    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const whatsappUrl = getWhatsAppUrl(
    'Hello Soukaryam Events, I would like to enquire about your Biriyani, Mandi and Starter menu packages.'
  );

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#fcfaf5] text-[#1a1f1e]"
    >

      {/* =================================================
          HERO
      ================================================== */}

      <section className="relative min-h-[90vh] overflow-hidden bg-[#0a1d17]">

        <img
          src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=2000&q=90"
          alt="Royal Biriyani"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1d17]/40 via-[#0a1d17]/70 to-[#0a1d17]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,29,23,0.45)_70%)]" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">

          <div className="max-w-4xl">

            <Link
              to="/services"
              className="menu-hero-item mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />

              Back to Services
            </Link>

            <div className="menu-hero-item mb-5 inline-flex items-center gap-2 rounded-full border border-[#cba135]/40 bg-[#cba135]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e8cc75]">

              <Sparkles className="h-4 w-4" />

              Signature Culinary Collection
            </div>

            <h1 className="menu-hero-item font-serif text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-8xl">

              Royal

              <span className="block text-[#e8cc75]">
                Biriyani
              </span>

              Experience
            </h1>

            <p className="menu-hero-item mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Fragrant basmati rice, slow-cooked meats, handpicked spices and
              generations of culinary tradition — prepared to make your
              celebration unforgettable.
            </p>

            <div className="menu-hero-item mt-10 flex flex-wrap gap-4">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#cba135] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a1d17] transition hover:-translate-y-1 hover:bg-[#e8cc75]"
              >
                <MessageCircle className="h-4 w-4" />

                Enquire Now
              </a>

              <a
                href="#biriyani"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Explore Menu

                <ChevronDown className="h-4 w-4" />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* =================================================
          BIRIYANI SECTION
      ================================================== */}

      <section
        id="biriyani"
        className="relative bg-[#fcfaf5] py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="section-heading mx-auto mb-14 max-w-3xl text-center">

            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#154236]/20 bg-[#154236]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#154236]">

              <UtensilsCrossed className="h-4 w-4" />

              The Biriyani Collection
            </span>

            <h2 className="font-serif text-4xl font-bold text-[#0a1d17] sm:text-5xl lg:text-6xl">

              Crafted for the

              <span className="text-[#1e5e4d]">
                {' '}
                Grand Table.
              </span>

            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              From comforting Kerala flavours to elaborate Arabian and
              Hyderabadi preparations, discover our signature rice
              specialities.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {BIRYANI_ITEMS.map((item) => (
              <FoodCard
                key={item.name}
                item={item}
              />
            ))}

          </div>

        </div>
      </section>

      {/* =================================================
          MANDI SECTION
      ================================================== */}

      <section className="relative overflow-hidden bg-[#0a1d17] py-24 sm:py-32">

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#cba135]/10 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#1e5e4d]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="section-heading mx-auto mb-14 max-w-3xl text-center">

            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#cba135]/30 bg-[#cba135]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#e8cc75]">

              Arabian Collection
            </span>

            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">

              The

              <span className="text-[#e8cc75]">
                {' '}
                Mandi
              </span>

              Experience.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
              Aromatic rice, smoky roasted meats and the unmistakable warmth
              of traditional Arabian flavours.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

            {MANDI_ITEMS.map((item) => (
              <FoodCard
                key={item.name}
                item={item}
                dark
              />
            ))}

          </div>

        </div>
      </section>

      {/* =================================================
          STARTERS - HORIZONTAL GSAP SECTION
      ================================================== */}

      <section
        ref={starterSectionRef}
        className="relative min-h-screen overflow-hidden bg-[#fcfaf5] py-20"
      >

        <div className="starter-intro relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">

          <div className="max-w-2xl">

            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#154236]/20 bg-[#154236]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#154236]">

              Begin the Feast
            </span>

            <h2 className="font-serif text-4xl font-bold text-[#0a1d17] sm:text-5xl lg:text-6xl">

              Signature

              <span className="text-[#1e5e4d]">
                {' '}
                Starters.
              </span>

            </h2>

            <p className="mt-4 text-gray-600">
              Scroll down and watch our starter collection travel across the
              screen — crispy, smoky, spicy and made to awaken the appetite.
            </p>

          </div>
        </div>

        {/* HORIZONTAL TRACK */}

        <div className="relative flex min-h-[65vh] items-center overflow-hidden">

          <div
            ref={starterTrackRef}
            className="flex w-max gap-6 pl-4 pr-16 sm:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2))]"
          >

            {STARTERS.map((item, index) => (

              <article
                key={item.name}
                className="group relative w-[280px] shrink-0 overflow-hidden rounded-[30px] border border-[#cba135]/20 bg-white shadow-xl sm:w-[330px] lg:w-[360px]"
              >

                <div className="relative h-[390px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <h3 className="font-serif text-3xl font-bold text-white">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">

                      <span className="text-xl font-bold text-[#e8cc75]">
                        {item.price}
                      </span>

                      <span className="text-xs uppercase tracking-wider text-white/60">
                        Per Plate
                      </span>

                    </div>

                  </div>

                </div>
              </article>

            ))}

          </div>
        </div>

        <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#154236] md:flex">

          Scroll

          <ArrowRight className="h-4 w-4" />

        </div>

      </section>

      {/* =================================================
          FINAL CTA
      ================================================== */}

      <section className="bg-[#154236] px-4 py-24 text-center">

        <Sparkles className="mx-auto mb-5 h-8 w-8 text-[#cba135]" />

        <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">

          Let's Create a Feast

          <span className="block text-[#e8cc75]">
            Worth Remembering.
          </span>

        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-white/65">
          Tell us your guest count, event date and preferred menu. Our team
          will create a bespoke package for your celebration.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#cba135] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0a1d17] transition hover:-translate-y-1 hover:bg-[#e8cc75]"
        >
          <MessageCircle className="h-5 w-5" />

          Plan Your Menu
        </a>

      </section>

    </main>
  );
}