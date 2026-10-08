import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Check, ArrowRight, MessageCircle, FileText } from 'lucide-react';
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from '../config/env';

const EVENT_TYPES = [
  'Royal Kerala Sadhya',
  'Wedding Reception Banquet',
  'Corporate Gala & Dinner',
  'Birthday & Intimate Gathering',
];

const TIERS = [
  {
    id: 'classic',
    name: 'Classic Elegance',
    priceEstimate: '₹350 - ₹500',
    description: 'Essential luxury for tasteful celebrations with traditional perfection.',
    features: [
      'Authentic course preparation',
      'Quality melamine / banana leaf serving',
      'Uniformed hospitality servers',
      'Standard welcome drinks',
    ],
  },
  {
    id: 'premium',
    name: 'Grand Premium',
    popular: true,
    priceEstimate: '₹650 - ₹950',
    description: 'Our most sought-after banquet setup featuring live stations & gourmet varieties.',
    features: [
      'Expanded multi-cuisine delicacies',
      '2 Live interactive food stations',
      'Fine bone china & stainless chaffers',
      'Dedicated floor manager & captains',
      'Welcome mocktail bar lounge',
    ],
  },
  {
    id: 'royal',
    name: 'Royal Heritage Diamond',
    priceEstimate: '₹1,100 - ₹1,800+',
    description: 'Opulent culinary theater designed for ultra-luxury weddings and VIP galas.',
    features: [
      'Unlimited live culinary stations',
      'Exotic seafood & imported ingredients',
      'Gold-rimmed china & crystal glassware',
      'Artisan dessert & live nitro counter',
      'Executive master chef on site',
    ],
  },
];

export default function EventEstimator() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(EVENT_TYPES[0]);
  const [guests, setGuests] = useState(250);
  const [selectedTier, setSelectedTier] = useState('premium');

  const currentTier = useMemo(
    () => TIERS.find((t) => t.id === selectedTier) || TIERS[1],
    [selectedTier]
  );

  const whatsappUrl = useMemo(() => {
    const inclusions = currentTier.features.join(', ');
    const text = `Hello Soukaryam Events,
I would like to enquire about:
• Occasion: ${selectedEvent}
• Guest Count: ${guests} Guests
• Hospitality Tier: ${currentTier.name} (${currentTier.priceEstimate} per plate)
• Inclusions: ${inclusions}

Please share date availability and customized package quote.`;

    return getWhatsAppUrl(text);
  }, [selectedEvent, guests, currentTier]);

  const handleWhatsAppRedirect = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContactRedirect = () => {
    const inclusions = currentTier.features.join(', ');
    const search = new URLSearchParams({
      eventType: selectedEvent,
      guests: guests.toString(),
      message: `Enquiry from estimator for ${guests} guests. Package: ${currentTier.name} (${currentTier.priceEstimate}). Inclusions: ${inclusions}`,
    }).toString();

    navigate(`/contact?${search}`);
  };

  return (
    <section className="relative bg-[#f7f3ea] py-20 text-[#1a1f1e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#154236]/20 bg-[#154236]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#154236]">
            <Calculator className="h-3.5 w-3.5 text-[#cba135]" />
            Interactive Planning Tool
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0a1d17] sm:text-4xl lg:text-5xl">
            Estimate Your <span className="text-[#154236]">Catering Experience</span>
          </h2>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Select your celebration details to view recommended service tiers and receive an instant personalized quote.
          </p>
        </div>

        {/* Estimator Card */}
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#cba135]/25 bg-white p-6 shadow-xl sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

            {/* Input Options */}
            <div className="space-y-8 lg:col-span-7">
              {/* Event Type */}
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  1. Select Event Type
                </label>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {EVENT_TYPES.map((type) => {
                    const isSelected = selectedEvent === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedEvent(type)}
                        className={`rounded-2xl px-4 py-3 text-left text-xs font-semibold transition-all sm:text-sm ${isSelected
                            ? 'border border-[#cba135] bg-[#154236] text-[#e8cc75] shadow-sm'
                            : 'border border-gray-200 bg-[#fcfaf5] text-gray-700 hover:bg-[#f7f3ea]'
                          }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    2. Approximate Guest Count
                  </label>
                  <span className="rounded-full bg-[#154236]/10 px-3 py-1 text-sm font-bold text-[#154236]">
                    {guests} Guests
                  </span>
                </div>

                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#154236]"
                />

                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>50</span>
                  <span>500</span>
                  <span>1000</span>
                  <span>2,000+ Guests</span>
                </div>
              </div>

              {/* Service Tier */}
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  3. Preferred Hospitality Tier
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier.id)}
                        className={`relative rounded-2xl p-3.5 text-left border transition-all ${isSelected
                            ? 'border-[#cba135] bg-[#154236]/5 ring-2 ring-[#cba135]'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                      >
                        {tier.popular && (
                          <span className="absolute -top-2.5 right-3 rounded-full bg-[#cba135] px-2 py-0.5 text-[10px] font-bold uppercase text-[#0a1d17]">
                            Most Popular
                          </span>
                        )}
                        <p className="text-xs font-bold text-gray-900">{tier.name}</p>
                        <p className="mt-1 font-serif text-sm font-bold text-[#154236]">{tier.priceEstimate}</p>
                        <p className="text-[10px] text-gray-500">per plate approx.</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Plan Breakdown */}
            <div className="flex h-full flex-col justify-between space-y-6 rounded-2xl border border-[#cba135]/30 bg-[#0a1d17] p-6 text-white sm:p-7 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between border-b border-[#154236] pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#cba135]">
                      Plan Summary
                    </span>
                    <h3 className="mt-0.5 font-serif text-lg font-bold text-white">
                      {currentTier.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Est. Range</p>
                    <p className="text-base font-bold text-[#e8cc75]">{currentTier.priceEstimate}</p>
                  </div>
                </div>

                <div className="space-y-2 py-4 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Occasion:</span>
                    <span className="font-semibold text-white">{selectedEvent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Guest Count:</span>
                    <span className="font-semibold text-white">{guests} Guests</span>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-[#154236] pt-3">
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-[#cba135]">
                    What's Included:
                  </p>
                  <div className="space-y-2">
                    {currentTier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e8cc75]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 border-t border-[#154236] pt-4">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0a1d17] transition-shadow hover:shadow-lg hover:shadow-[#cba135]/30"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire For This Setup
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleContactRedirect}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#cba135]/30 bg-[#0f2f26] px-4 py-2.5 text-xs font-medium text-gray-300 transition-colors hover:bg-[#154236] hover:text-white"
                >
                  <FileText className="h-3.5 w-3.5 text-[#cba135]" />
                  Customize in Detailed Booking Form
                </button>

                <p className="text-center text-[10px] text-gray-400">
                  Direct connection • Instant quote on WhatsApp ({WHATSAPP_DISPLAY})
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}