import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Award, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, getWhatsAppUrl } from '../config/env';

const QUICK_LINKS = [
  { label: 'Home Page', href: '/' },
  { label: 'All Services & Cuisines', href: '/services' },
  { label: 'Request a Quote', href: '/contact' },
];

const SIGNATURE_OFFERINGS = [
  'Grand Kerala Royal Sadhya (28+ Dishes)',
  'Luxury Wedding Banquets & Buffets',
  'Live Gourmet Counters & Chaat Bars',
  'Corporate Galas & Formal Dinners',
  'Artisan Desserts & Payasam Melas',
  'End-to-End Event Coordination & Decor',
];

export default function Footer() {
  const phone = WHATSAPP_DISPLAY.replace(/\D/g, '');
  const waChatUrl = getWhatsAppUrl(
    'Hello Soukaryam Events, I would like to enquire about event catering.'
  );

  return (
    <footer className="border-t border-[#cba135]/20 bg-[#071510] pb-8 pt-16 text-[#e7ddcb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[#154236] pb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#cba135]/40 bg-[#0a1d17] p-0.5 shadow-[0_0_15px_rgba(203,161,53,0.2)]">
                <img
                  src={logo}
                  alt="Soukaryam Events"
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-widest text-white">
                  SOUKARYAM
                </span>
                <span className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#cba135]">
                  EVENTS & CATERING
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400">
              Curating exquisite culinary experiences and flawless celebrations. From authentic royal heritage sadhyas to opulent contemporary wedding galas, we bring perfection to every plate.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 rounded-full border border-[#cba135]/20 bg-[#0f2f26] px-3 py-1.5 text-xs font-medium text-[#cba135]">
                <ShieldCheck className="h-4 w-4" />
                FSSAI Certified
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-[#cba135]/20 bg-[#0f2f26] px-3 py-1.5 text-xs font-medium text-[#e8cc75]">
                <Award className="h-4 w-4" />
                500+ Feasts
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 border-b border-[#cba135]/20 pb-2 font-serif text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-gray-400 transition-colors hover:text-[#cba135]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#cba135]" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={waChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-medium text-[#25D366] transition-colors hover:text-emerald-400"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#25D366]" />
                  WhatsApp Specialist
                </a>
              </li>
            </ul>
          </div>

          {/* Signature Offerings */}
          <div>
            <h4 className="mb-4 border-b border-[#cba135]/20 pb-2 font-serif text-lg font-semibold text-white">
              Signature Offerings
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {SIGNATURE_OFFERINGS.map((offering) => (
                <li key={offering} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#cba135]" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-4 border-b border-[#cba135]/20 pb-2 font-serif text-lg font-semibold text-white">
              Connect With Us
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${phone}`}
                className="flex items-start gap-3 text-gray-300 transition-colors hover:text-[#cba135]"
              >
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#cba135]" />
                <div>
                  <p className="font-semibold text-white">{WHATSAPP_DISPLAY}</p>
                  <p className="text-xs text-gray-400">Direct Line & WhatsApp</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-3 text-gray-300 transition-colors hover:text-[#cba135]"
              >
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#cba135]" />
                <div>
                  <p className="font-semibold text-white">{CONTACT_EMAIL}</p>
                  <p className="text-xs text-gray-400">Response within 2 hours</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#cba135]" />
                <div>
                  <p className="font-semibold text-white">Central Operations Hub</p>
                  <p className="text-xs text-gray-400">
                    Catering across Kerala, Bengaluru, Chennai & Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Soukaryam Events. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>Clean & Hygienic Kitchens</span>
            <span>•</span>
            <span>100% Punctual Execution</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> for fine food
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}