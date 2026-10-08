import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2, Calendar, Users, MapPin, Mail, Phone, User, ExternalLink, RotateCcw } from "lucide-react";
import { WHATSAPP_DISPLAY, API_BASE_URL, getWhatsAppUrl } from "../config/env";

const EVENT_TYPES = [
  "Grand Wedding Banquet & Reception",
  "Authentic Traditional Kerala Sadhya",
  "Engagement / Betrothal Ceremony",
  "Corporate Gala / Conference",
  "Birthday / Milestone Anniversary",
  "Housewarming / Grihapravesham",
  "Cocktail & Dinner Soirée",
  "Other Bespoke Gathering",
];

const INITIAL_STATE = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  location: "",
  guests: "",
  message: "",
};

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const eventType = searchParams.get("eventType");
    const guests = searchParams.get("guests");
    const message = searchParams.get("message");

    if (eventType || guests || message) {
      setFormData((prev) => ({
        ...prev,
        ...(eventType && { eventType }),
        ...(guests && { guests }),
        ...(message && { message }),
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneClean = formData.phone.replace(/[\s\-()+]/g, "");

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phoneClean.length < 7 || !/^\d+$/.test(phoneClean)) {
      newErrors.phone = "Enter a valid phone number (min 7 digits)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required";
    if (!formData.location.trim()) newErrors.location = "Location or venue is required";

    if (!formData.guests) {
      newErrors.guests = "Guest count is required";
    } else if (Number(formData.guests) <= 0) {
      newErrors.guests = "Enter a valid number of guests";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppLink = (data) => {
    const notes = data.message.trim() ? data.message.trim() : "None";
    const message = `*New Event Enquiry - Soukaryam Events*
• Name: ${data.name}
• Phone: ${data.phone}
• Email: ${data.email}
• Event: ${data.eventType}
• Date: ${data.eventDate}
• Location: ${data.location}
• Guests: ${data.guests}
• Notes: ${notes}`;

    return getWhatsAppUrl(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");
    const waUrl = buildWhatsAppLink(formData);

    try {
      const res = await fetch(`${API_BASE_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        const redirectUrl = data.whatsappUrl || waUrl;
        setSubmittedData({ ...data, whatsappUrl: redirectUrl });
        window.open(redirectUrl, "_blank", "noopener,noreferrer");
        return;
      }

      if (data.message) {
        setServerError(data.message);
        if (Array.isArray(data.errors)) {
          const apiErrors = {};
          data.errors.forEach((key) => {
            apiErrors[key] = "This field is required";
          });
          setErrors((prev) => ({ ...prev, ...apiErrors }));
        }
        return;
      }
    } catch (err) {
      console.warn("Backend unavailable, falling back to direct WhatsApp redirect:", err);
    } finally {
      setLoading(false);
    }

    // Direct WhatsApp fallback
    setSubmittedData({
      success: true,
      whatsappUrl: waUrl,
    });
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setSubmittedData(null);
    setServerError("");
  };

  const getInputStyles = (field) => {
    const base = "w-full rounded-xl text-sm border transition-all focus:outline-none";
    const padding = field === "message" ? "p-4" : "px-4 py-3";
    const stateStyle = errors[field]
      ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200"
      : "border-gray-200 focus:border-[#154236] focus:ring-2 focus:ring-[#154236]/10";

    return `${base} ${padding} ${stateStyle}`;
  };

  return (
    <div className="w-full rounded-3xl border border-[#cba135]/30 bg-white p-6 shadow-2xl sm:p-10">
      <header className="mb-8 border-b border-gray-100 pb-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#154236]">
          Direct Reservation Desk
        </span>
        <h3 className="mt-1 font-serif text-2xl font-bold text-[#0a1d17] sm:text-3xl">
          Tell Us About Your Event
        </h3>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Fill in your celebration specifications below. Our catering directors will confirm availability and open your direct WhatsApp chat.
        </p>
      </header>

      <AnimatePresence mode="wait">
        {submittedData ? (
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6 py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#154236]">
                Submission Confirmed
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#0a1d17]">
                Enquiry Received Successfully!
              </h4>
              <p className="mx-auto max-w-md text-sm text-gray-600">
                Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your enquiry for the{" "}
                <strong className="text-gray-900">{formData.eventType || "event"}</strong> on{" "}
                <strong className="text-gray-900">{formData.eventDate}</strong> has been received by Soukaryam Events.
              </p>
            </div>

            <div className="mx-auto max-w-lg space-y-3 rounded-2xl border border-[#cba135]/40 bg-[#fcfaf5] p-5 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#154236]">
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp Click-to-Chat</span>
              </div>
              <p className="text-xs text-gray-600">
                If WhatsApp didn't open automatically, use the button below to connect with us immediately.
              </p>

              {submittedData.whatsappUrl && (
                <a href={submittedData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95">
                  <MessageCircle className="h-5 w-5" />
                  <span>Open WhatsApp Chat Now</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-500 transition-colors hover:text-[#154236]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Submit Another Enquiry</span>
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" noValidate>
            {serverError && (
              <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800 sm:text-sm">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                <div>
                  <p className="font-semibold">Notice</p>
                  <p>{serverError}</p>
                </div>
              </div>
            )}

            {/* Name & Phone */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Radhika Menon" className={`${getInputStyles("name")} pl-10 pr-4`}/>
                </div>
                {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 9847012345" className={`${getInputStyles("phone")} pl-10 pr-4`}/>
                </div>
                {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
              </div>
            </div>

            {/* Email & Event Type */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. radhika@example.com" className={`${getInputStyles("email")} pl-10 pr-4`}/>
                </div>
                {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                  Event Type <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select name="eventType" value={formData.eventType} onChange={handleChange}
                    className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none ${errors.eventType
                      ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200"
                      : "border-gray-200 focus:border-[#154236] focus:ring-2 focus:ring-[#154236]/10"
                      }`}
                  >
                    <option value="">Select Event Type</option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-3.5 text-xs text-gray-400">
                    ▼
                  </span>
                </div>
                {errors.eventType && <p className="mt-1 text-xs text-rose-600">{errors.eventType}</p>}
              </div>
            </div>

            {/* Date, Location & Guests */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                  Event Date <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className={`${getInputStyles("eventDate")} pl-10 pr-4`}/>
                </div>
                {errors.eventDate && <p className="mt-1 text-xs text-rose-600">{errors.eventDate}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                  Location / Venue <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Kochi / Grand Hyatt" className={`${getInputStyles("location")} pl-10 pr-4`}/>
                </div>
                {errors.location && <p className="mt-1 text-xs text-rose-600">{errors.location}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                  No. of Guests <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Users className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="number" name="guests" min="1" value={formData.guests} onChange={handleChange} placeholder="e.g. 350" className={`${getInputStyles("guests")} pl-10 pr-4`}/>
                </div>
                {errors.guests && <p className="mt-1 text-xs text-rose-600">{errors.guests}</p>}
              </div>
            </div>

            {/* Message (Optional) */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-700">
                Special Dietary Wishes & Notes <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Mention specific preferences, e.g. 'Traditional sadhya with Palada Payasam for lunch, followed by evening high tea.'" className={`${getInputStyles("message")} resize-none`}/>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-sm font-semibold uppercase tracking-wider shadow-md transition-all ${loading
                  ? "cursor-not-allowed bg-gray-300 text-gray-600"
                  : "bg-gradient-to-r from-[#e8cc75] via-[#cba135] to-[#b89129] text-[#0a1d17] hover:opacity-95"
                  }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Connecting to WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry & Open WhatsApp</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                <span>Instant reply via WhatsApp: {WHATSAPP_DISPLAY}</span>
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}