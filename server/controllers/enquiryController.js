// Basic string sanitizer to strip HTML tags and prevent XSS
const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
};

/**
 * Generates formatted WhatsApp Click-to-Chat URL
 * @param {Object} enquiry
 * @returns {string}
 */
const generateWhatsAppUrl = (enquiry) => {
  const targetPhone = process.env.WHATSAPP_PHONE || '918086852813';
  const notes = enquiry.message && enquiry.message.trim() ? enquiry.message.trim() : 'None';

  const text = 
`*New Event Enquiry - Soukaryam Events*
• Name: ${enquiry.name}
• Phone: ${enquiry.phone}
• Email: ${enquiry.email}
• Event Type: ${enquiry.eventType}
• Date: ${enquiry.eventDate}
• Location: ${enquiry.location}
• Guests: ${enquiry.guests}
• Notes: ${notes}`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
};

/**
 * @desc    Submit a new catering enquiry and generate direct WhatsApp link
 * @route   POST /api/contact OR POST /api/enquiries
 * @access  Public
 */
const submitEnquiry = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      email,
      eventType,
      eventDate,
      location,
      guests,
      message,
      source
    } = req.body;

    // Field-level validations
    const errors = [];

    if (!name || !sanitizeString(name)) {
      errors.push('name');
    }

    if (!phone || !sanitizeString(phone)) {
      errors.push('phone');
    } else {
      const cleanPhone = phone.replace(/[\s\-()+]/g, '');
      if (cleanPhone.length < 7 || !/^\d+$/.test(cleanPhone)) {
        errors.push('phone');
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(sanitizeString(email))) {
      errors.push('email');
    }

    if (!eventType || !sanitizeString(eventType)) {
      errors.push('eventType');
    }

    if (!eventDate || !sanitizeString(eventDate)) {
      errors.push('eventDate');
    }

    if (!location || !sanitizeString(location)) {
      errors.push('location');
    }

    const parsedGuests = Number(guests);
    if (!guests || isNaN(parsedGuests) || parsedGuests <= 0) {
      errors.push('guests');
    }

    // message is optional — no error pushed to errors array

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields with valid details.',
        errors: errors
      });
    }

    // Sanitize and structure payload
    const sanitizedData = {
      name: sanitizeString(name),
      phone: sanitizeString(phone),
      email: sanitizeString(email).toLowerCase(),
      eventType: sanitizeString(eventType),
      eventDate: sanitizeString(eventDate),
      location: sanitizeString(location),
      guests: Math.floor(parsedGuests),
      message: message ? sanitizeString(message) : '',
      source: sanitizeString(source) || 'website_contact_form',
      createdAt: new Date().toISOString()
    };

    // Build direct WhatsApp URL for immediate dispatch
    const whatsappUrl = generateWhatsAppUrl(sanitizedData);

    return res.status(200).json({
      success: true,
      message: 'Enquiry validated successfully! Directing to WhatsApp for instant confirmation.',
      enquiry: sanitizedData,
      whatsappUrl: whatsappUrl
    });

  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all enquiries status notice
 * @route   GET /api/enquiries
 * @access  Public / Internal
 */
const getAllEnquiries = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Inquiries are sent directly via WhatsApp messages. Database persistence is disabled.',
    count: 0,
    enquiries: []
  });
};

/**
 * @desc    Get single enquiry status notice
 * @route   GET /api/enquiries/:id
 * @access  Public / Internal
 */
const getEnquiryById = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Inquiries are sent directly via WhatsApp messages. Database persistence is disabled.'
  });
};

module.exports = {
  submitEnquiry,
  getAllEnquiries,
  getEnquiryById,
  generateWhatsAppUrl
};