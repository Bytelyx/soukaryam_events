import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ChevronDown, MessageCircle, Sparkles, UtensilsCrossed } from 'lucide-react';
import { getWhatsAppUrl } from '../config/env';

gsap.registerPlugin(ScrollTrigger);

/* BIRIYANI & RICE */
const BIRYANI_ITEMS = [
  {
    name: 'Chicken Biriyani',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=85',
    description: 'Fragrant basmati rice with tender chicken and aromatic spices.',
  },
  {
    name: 'Lagoon Chicken Biriyani',
    price: '₹260',
    image:
      'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1000&q=85',
    description: 'Richly spiced rice layered with succulent chicken.',
  },
  {
    name: 'Chicken Hyderabadi Dum Biriyani',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=1000&q=85',
    description: 'Slow dum-cooked rice with tender chicken and royal spices.',
  },
  {
    name: 'Beef Biriyani',
    price: '₹260',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
    description: 'Tender beef, fragrant rice and traditional Kerala spices.',
  },
  {
    name: 'Mutton Biriyani',
    price: '₹320',
    image:
      'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=1000&q=85',
    description: 'Slow-cooked mutton layered with aromatic basmati rice.',
  },
  {
    name: 'Mutton Hyderabadi Biriyani',
    price: '₹340',
    image:
      'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d7e?auto=format&fit=crop&w=1000&q=85',
    description: 'Luxurious dum biriyani with tender mutton and rich spices.',
  },
  {
    name: 'Fish Biriyani',
    price: '₹300',
    image:
      'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    description: 'Delicately spiced fish with fragrant biriyani rice.',
  },
  {
    name: 'Chicken Fried Rice',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=85',
    description: 'Wok-tossed rice with chicken, vegetables and herbs.',
  },
];

/* MANDI */
const MANDI_ITEMS = [
  {
    name: 'Chicken Mandi',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
    description: 'Smoky roasted chicken served with fragrant mandi rice.',
  },
  {
    name: 'Beef Mandi',
    price: '₹320',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    description: 'Tender beef paired with aromatic Arabian mandi rice.',
  },
  {
    name: 'Mutton Mandi',
    price: '₹360',
    image:
      'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=1000&q=85',
    description: 'Slow-roasted mutton with beautifully seasoned mandi rice.',
  },
];

/* ARABIAN SPECIALS */
const ARABIAN_SPECIALS = [
  {
    name: 'Chicken Kabsa / Kabili',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
    description: 'Aromatic Arabian rice with tender chicken and warm spices.',
  },
  {
    name: 'Chicken Zurbian',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
    description: 'Fragrant spiced rice with tender chicken and Arabian flavours.',
  },
  {
    name: 'Chicken Madghout',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
    description: 'Slow-cooked chicken and rice infused with rich spices.',
  },
  {
    name: 'Beef Kabsa / Kabili',
    price: '₹300',
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=85',
    description: 'Fragrant Kabsa rice paired with succulent beef.',
  },
  {
    name: 'Beef Zurbian',
    price: '₹300',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
    description: 'Slow-cooked beef with bold Arabian spices and rice.',
  },
  {
    name: 'Beef Madghout',
    price: '₹300',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
    description: 'Tender beef and fragrant rice with balanced spices.',
  },
  {
    name: 'Choice of Salad',
    price: '₹100',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85',
    description: 'Fresh seasonal salad to complement your meal.',
  },
];

/* STARTERS & GRILLS */
const STARTERS = [
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
    name: 'Chicken Kebab',
    price: '₹220',
    image:
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Chicken Kondattam',
    price: '₹240',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Alfaham Chicken',
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
    name: 'Fish Fry',
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
];

/*  MAIN COURSE */
const MAIN_COURSE = [
  {
    name: 'Kadai Chicken',
    price: '₹250',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85',
    description: 'Tender chicken with peppers, onions and kadai spices.',
  },
  {
    name: 'Chicken Kurma (Stew)',
    price: '₹230',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
    description: 'Creamy chicken kurma with traditional aromatic spices.',
  },
  {
    name: 'Chicken Mulakittathu',
    price: '₹230',
    image:
      'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    description: 'Traditional Kerala-style chicken curry with bold spices.',
  },
];

/* FOOD CARD */
function FoodCard({ item, dark = false, compact = false }) {
  return (
    <article
      className={`food-card group overflow-hidden rounded-[22px] border shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${dark
          ? 'border-white/10 bg-white/5'
          : 'border-[#cba135]/20 bg-white'
        }`}
    >
      <div className={`relative overflow-hidden ${compact ? 'h-48 sm:h-52' : 'h-56 sm:h-60'
        }`}
      >
        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <span className="font-serif text-xl font-bold text-white">
            {item.price}
          </span>

          <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
            Per Plate
          </span>
        </div>
      </div>

      <div className={compact ? 'p-4' : 'p-5'}>
        <h3 className={`font-serif font-bold leading-tight transition-colors ${compact ? 'text-xl' : 'text-2xl'
            } ${dark
              ? 'text-white group-hover:text-[#e8cc75]'
              : 'text-[#0a1d17] group-hover:text-[#154236]'
            }`}
        >
          {item.name}
        </h3>

        {item.description && (
          <p className={`mt-2 text-xs leading-5 ${dark ? 'text-white/60' : 'text-gray-600'}`}>
            {item.description}
          </p>
        )}

        <div className={`mt-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] ${dark ? 'text-[#e8cc75]' : 'text-[#154236]'}`}>
          <UtensilsCrossed className="h-3 w-3 text-[#cba135]" />
          Signature Preparation
        </div>
      </div>
    </article>
  );
}

/*  SECTION HEADING */
function SectionHeading({
  badge,
  title,
  highlight,
  description,
  dark = false,
}) {
  return (
    <div className="section-heading mx-auto mb-10 max-w-3xl text-center">
      {/* Strong category label */}
      <div className={`mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.18em] shadow-sm ${dark
            ? 'border-[#e8cc75]/40 bg-[#cba135]/15 text-[#e8cc75]'
            : 'border-[#154236]/30 bg-[#154236]/10 text-[#154236]'
          }`}>
        <UtensilsCrossed className="h-4 w-4" />
        {badge}
      </div>

      <h2 className={`font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-[#0a1d17]' }`}>
        {title}{' '}
        <span className={dark ? 'text-[#e8cc75]' : 'text-[#1e5e4d]'}>
          {highlight}
        </span>
      </h2>

      <p className={`mx-auto mt-3 max-w-2xl text-sm leading-6 sm:text-base ${dark ? 'text-white/60' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}

/* MAIN PAGE */
export default function BiryaniMenu() {
  const pageRef = useRef(null);
  const starterTrackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (reducedMotion) return;

      /* HERO */
      gsap.from('.menu-hero-item', {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });

      /* SECTION HEADINGS */
      gsap.utils.toArray('.section-heading').forEach((heading) => {
        gsap.from(heading, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            once: true,
          },
        });
      });

      /* FOOD CARDS */
      gsap.utils.toArray('.food-card').forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          scale: 0.98,
          duration: 0.6,
          delay: (index % 4) * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            once: true,
          },
        });
      });

      const track = starterTrackRef.current;

      if (track) {
        const originalWidth = track.scrollWidth / 2;

        gsap.to(track, {
          x: -originalWidth,
          duration: 55,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((value) => {
              return parseFloat(value) % originalWidth;
            }),
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

  const duplicatedStarters = [...STARTERS, ...STARTERS];
  return (
    <main ref={pageRef} className="overflow-hidden bg-[#fcfaf5] text-[#1a1f1e]">
      <section className="relative min-h-[72vh] overflow-hidden bg-[#0a1d17] sm:min-h-[76vh]">
        <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=2000&q=90" alt="Royal Biriyani" className="absolute inset-0 h-full w-full object-cover opacity-50"/>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1d17]/40 via-[#0a1d17]/65 to-[#0a1d17]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,29,23,0.45)_70%)]" />
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 py-14 sm:min-h-[76vh] sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-4xl">
            <Link to="/services" className="menu-hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/15 sm:mb-7 sm:text-sm">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>

            <div className="menu-hero-item mb-4 inline-flex items-center gap-2 rounded-full border border-[#cba135]/40 bg-[#cba135]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8cc75] sm:text-xs">
              <Sparkles className="h-4 w-4" />
              Signature Culinary Collection
            </div>

            <h1 className="menu-hero-item font-serif text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
              Royal
              <span className="block text-[#e8cc75]">
                Biriyani
              </span>
              Experience
            </h1>

            <p className="menu-hero-item mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7">
              Fragrant basmati rice, slow-cooked meats, handpicked spices and
              generations of culinary tradition — prepared to make your
              celebration unforgettable.
            </p>

            <div className="menu-hero-item mt-7 flex flex-wrap gap-3 sm:mt-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#cba135] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0a1d17] transition hover:-translate-y-1 hover:bg-[#e8cc75] sm:px-7 sm:py-3.5 sm:text-sm">
                <MessageCircle className="h-4 w-4" />
                Enquire Now
              </a>

              <a href="#biriyani" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/15 sm:px-7 sm:py-3.5 sm:text-sm">
                Explore Menu
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="biriyani" className="relative bg-[#fcfaf5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="01 · Biriyani & Rice"
            title="Crafted for the"
            highlight="Grand Table."
            description="Signature rice specialities inspired by Kerala, Arabian and Hyderabadi flavours."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BIRYANI_ITEMS.map((item) => (
              <FoodCard key={item.name} item={item} compact/>
            ))}
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-[#0a1d17] py-16 sm:py-20">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#cba135]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#1e5e4d]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="02 · Mandi"
            title="The"
            highlight="Mandi Experience."
            description="Smoky roasted meats, aromatic rice and traditional Arabian flavours."
            dark
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {MANDI_ITEMS.map((item) => (
              <FoodCard key={item.name} item={item} dark/>
            ))}
          </div>
        </div>
      </section>
  
      <section className="relative bg-[#fcfaf5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="03 · Arabian Specials"
            title="Flavours from"
            highlight="Arabia."
            description="Authentic Arabian-inspired preparations with fragrant spices and tender meats."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ARABIAN_SPECIALS.map((item) => (
              <FoodCard key={item.name} item={item} compact/>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a1d17] py-16 sm:py-20">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#cba135]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1e5e4d]/30 blur-3xl" />

        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="04 · Starters & Grills"
              title="Begin the"
              highlight="Feast."
              description="Crispy, smoky, spicy and grilled favourites crafted to awaken the appetite."
              dark
            />
          </div>

          <div className="relative overflow-hidden">
            <div ref={starterTrackRef} className="flex w-max gap-5"
              style={{
                willChange: 'transform',
              }}
            >
              {duplicatedStarters.map((item, index) => (
                <article key={`${item.name}-${index}`} className="group relative w-[250px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-xl sm:w-[280px] lg:w-[300px]">
                  <div className="relative h-[330px] overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"/>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      {String(
                        (index % STARTERS.length) + 1
                      ).padStart(2, '0')}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {item.name}
                      </h3>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-lg font-bold text-[#e8cc75]">
                          {item.price}
                        </span>

                        <span className="text-[10px] uppercase tracking-wider text-white/60">
                          Per Plate
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-7 flex max-w-7xl items-center justify-center gap-3 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8cc75] sm:text-xs">
            <span>Slowly Exploring Our Grills</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </section>

      <section className="relative bg-[#fcfaf5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="05 · Main Course"
            title="Rich"
            highlight="Curries & Gravies."
            description="Comforting preparations made to pair beautifully with rice and breads."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {MAIN_COURSE.map((item) => (
              <FoodCard key={item.name} item={item}/>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#154236] px-4 py-20 text-center sm:py-24">
        <Sparkles className="mx-auto mb-5 h-8 w-8 text-[#cba135]" />
        <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
          Let's Create a Feast
          <span className="block text-[#e8cc75]">
            Worth Remembering.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
          Tell us your guest count, event date and preferred menu. Our team
          will create a bespoke package for your celebration.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#cba135] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a1d17] transition hover:-translate-y-1 hover:bg-[#e8cc75]"
        >
          <MessageCircle className="h-5 w-5" />
          Plan Your Menu
        </a>
      </section>
    </main>
  );
}