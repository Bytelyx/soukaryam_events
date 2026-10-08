import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, getWhatsAppUrl } from '../config/env';

export default function Contact() {
  return (
    <PageTransition>
      <div className="w-full bg-[#fcfaf5]">

        {/* Contact Page Hero */}
        <section className="bg-[#0a1d17] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(203,161,53,0.15),transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#154236] border border-[#cba135]/40 text-[#e8cc75] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#cba135]" />
              <span>We Are At Your Service</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight"
            >
              Reserve Your Date &{' '}
              <span className="gold-gradient-text italic font-normal">
                Begin Planning
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Connect with our master catering coordinators. Submit your requirements to receive a customized menu proposal and initiate an instant WhatsApp consultation.
            </motion.p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6">

              {/* Primary Contact Card */}
              <div className="bg-[#0a1d17] text-white rounded-3xl p-8 border border-[#cba135]/30 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#cba135]">
                    Direct Office Contacts
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Soukaryam Events
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Premier Catering & Event Management Service
                  </p>
                </div>

                <div className="space-y-5 pt-2 border-t border-[#154236]">
                  {/* Phone */}
                  <a href={`tel:${WHATSAPP_DISPLAY.replace(/[\s\-]/g, '')}`} className="flex items-start gap-3.5 group hover:text-[#e8cc75] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#154236] border border-[#cba135]/30 flex items-center justify-center text-[#cba135] shrink-0 group-hover:bg-[#cba135] group-hover:text-[#0a1d17] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Direct Booking Hotline</div>
                      <div className="text-base font-bold text-white group-hover:text-[#e8cc75] transition-colors">
                        {WHATSAPP_DISPLAY}
                      </div>
                      <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                        Available on Call & WhatsApp
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href={getWhatsAppUrl("Hello Soukaryam Events, I would like to enquire about event catering.")} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3.5 group hover:text-emerald-300 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Official WhatsApp Desk</div>
                      <div className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                        {WHATSAPP_DISPLAY}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        Typical response time: Under 15 mins
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3.5 group hover:text-[#e8cc75] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#154236] border border-[#cba135]/30 flex items-center justify-center text-[#cba135] shrink-0 group-hover:bg-[#cba135] group-hover:text-[#0a1d17] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Email Enquiries</div>
                      <div className="text-base font-bold text-white group-hover:text-[#e8cc75] transition-colors">
                        {CONTACT_EMAIL}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        Formal proposals and corporate RFPs
                      </div>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#154236] border border-[#cba135]/30 flex items-center justify-center text-[#cba135] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Consultation Hours</div>
                      <div className="text-base font-bold text-white">
                        8:00 AM – 10:00 PM
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        Open All 7 Days a Week
                      </div>
                    </div>
                  </div>

                  {/* Geographic Reach */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#154236] border border-[#cba135]/30 flex items-center justify-center text-[#cba135] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Operational Reach</div>
                      <div className="text-sm font-bold text-white">
                        All Kerala & South India
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        Kochi, Trivandrum, Kozhikode, Thrissur, Kottayam, Kannur, Bengaluru & Chennai
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Peace of Mind Guarantees */}
              <div className="bg-[#f7f3ea] rounded-3xl p-6 border border-[#cba135]/25 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#154236] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#cba135]" />
                  <span>Our Booking Commitment</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#154236] shrink-0" />
                    <span>Transparent pricing with no hidden surcharges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#154236] shrink-0" />
                    <span>Flexible date rescheduling policy for auspicious events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#154236] shrink-0" />
                    <span>Dedicated event coordinator assigned from day one</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: The Interactive Contact & WhatsApp Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
