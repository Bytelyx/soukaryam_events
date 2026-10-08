import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Anjali & Vivek Nambiar',
    event: 'Grand Wedding Reception (1,200 Guests)',
    location: 'Kochi, Kerala',
    text: 'Soukaryam Events made our wedding banquet talk of the town! The live counters were sensational, and the Thalassery Biryani was cooked to absolute perfection. Their hospitality captains handled the crowd with total grace.',
    rating: 5,
    date: 'February 2026',
  },
  {
    name: 'Dr. Radhakrishnan Nair',
    event: 'Shashtipoorthi Traditional Sadhya (450 Guests)',
    location: 'Thrissur, Kerala',
    text: 'Finding an authentic 28-course Kerala Sadhya with the genuine Palakkad/Travancore balance is rare. The Ada Pradhaman was extraordinarily rich and authentic. Every single elder in the family was thoroughly delighted.',
    rating: 5,
    date: 'January 2026',
  },
  {
    name: 'Rohit Shenoy',
    event: 'Annual Corporate Gala (600 Delegates)',
    location: 'Infopark, Kochi',
    text: 'Seamless execution! From morning executive breakfast to the evening cocktail dinner with live Italian pasta and barbecue stations, Soukaryam Events delivered 5-star hotel quality with extraordinary punctuality.',
    rating: 5,
    date: 'December 2025',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#fcfaf5] py-20 text-[#1a1f1e] md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#154236]/20 bg-[#154236]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#154236]">
            <Sparkles className="h-3.5 w-3.5 text-[#cba135]" />
            Honored Host Stories
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0a1d17] sm:text-4xl lg:text-5xl">
            Cherished by Families & <br className="hidden sm:inline" />
            <span className="text-[#154236]">Corporate Leaders</span>
          </h2>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Read what our hosts have to say about our culinary authenticity, punctuality, and gracious hospitality.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col justify-between rounded-3xl border border-[#cba135]/25 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#cba135] text-[#cba135]" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-[#cba135]/25" />
                </div>

                <p className="mb-6 font-light italic leading-relaxed text-gray-700 sm:text-base">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-serif text-base font-bold text-[#0a1d17]">
                  {review.name}
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-[#154236]">
                  {review.event}
                </p>
                <div className="mt-1 flex justify-between text-[11px] text-gray-400">
                  <span>{review.location}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}