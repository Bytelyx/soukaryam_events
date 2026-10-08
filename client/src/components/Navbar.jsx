import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from '../config/env';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services & Menus', path: '/services' },
  { name: 'Contact & Booking', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const phone = WHATSAPP_DISPLAY.replace(/\D/g, '');
  const waQuoteUrl = getWhatsAppUrl(
    'Hello Soukaryam Events, I would like to enquire about event catering.'
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <header className="hidden border-b border-[#cba135]/20 bg-[#071510] px-4 py-2 text-xs text-[#e7ddcb] sm:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-6">
            <a href={`tel:${phone}`} className="flex items-center gap-1.5 transition-colors hover:text-[#cba135]">
              <Phone className="h-3.5 w-3.5 text-[#cba135]" />
              {WHATSAPP_DISPLAY}
            </a>

            <div className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="h-3.5 w-3.5 text-[#cba135]" />
              Available Across Kerala & South India
            </div>

            <div className="flex items-center gap-1.5 text-gray-400">
              <Clock className="h-3.5 w-3.5 text-[#cba135]" />
              Bookings Open 7 Days: 8 AM - 10 PM
            </div>
          </div>

          <a href={waQuoteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-[#cba135] transition-colors hover:text-[#e8cc75]">
            <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
            Quick WhatsApp Quote
          </a>
        </div>
      </header>

      {/* Main Navbar */}
      <nav aria-label="Main Navigation" className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'border-b border-[#cba135]/20 bg-[#0a1d17]/95 py-3 shadow-2xl backdrop-blur-md'
          : 'border-b border-[#cba135]/15 bg-[#0a1d17] py-4'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#cba135]/40 bg-[#0a1d17] p-0.5 shadow-[0_0_15px_rgba(203,161,53,0.3)] transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(203,161,53,0.6)] sm:h-11 sm:w-11">
                <img src={logo} alt="Soukaryam Events" className="h-full w-full rounded-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-white transition-colors group-hover:text-[#e8cc75] sm:text-xl">
                  SOUKARYAM
                </span>
                <span className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#cba135]">
                  EVENTS & CATERING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center space-x-1 md:flex lg:space-x-2">
              {NAV_LINKS.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                      ? 'border border-[#cba135]/40 bg-[#154236] text-[#fcfaf5] shadow-[0_0_12px_rgba(203,161,53,0.2)]'
                      : 'text-[#e7ddcb] hover:bg-[#0f2f26]/60 hover:text-[#cba135]'
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden md:flex">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a1d17] shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(203,161,53,0.4)]">
                <Sparkles className="h-3.5 w-3.5" />
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex md:hidden">
              <button type="button" onClick={() => setMobileMenuOpen((prev) => !prev)} className="rounded-lg p-2 text-[#e7ddcb] transition-colors hover:bg-[#154236] hover:text-white" aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-[#cba135]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#cba135]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="space-y-3 overflow-hidden border-t border-[#cba135]/20 bg-[#071510] px-4 pb-6 pt-3 md:hidden">
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map(({ name, path }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
                        ? 'border border-[#cba135]/30 bg-[#154236] font-semibold text-[#cba135]'
                        : 'text-[#e7ddcb] hover:bg-[#0f2f26] hover:text-[#cba135]'
                      }`
                    }
                  >
                    <span>{name}</span>
                    <ChevronRight className="h-4 w-4 text-[#cba135]/60" />
                  </NavLink>
                ))}
              </div>

              <div className="space-y-2 border-t border-[#cba135]/15 pt-3">
                <Link to="/contact" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] py-3 px-4 text-sm font-semibold uppercase tracking-wider text-[#0a1d17]">
                  <Sparkles className="h-4 w-4" />
                  Book Event Consultation
                </Link>

                <a href={`tel:${phone}`} className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#cba135]/20 bg-[#0f2f26] py-2.5 px-4 text-sm font-medium text-[#e7ddcb] hover:border-[#cba135]">
                  <Phone className="h-4 w-4 text-[#cba135]" />
                  Call: {WHATSAPP_DISPLAY}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}