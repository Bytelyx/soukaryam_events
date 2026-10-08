const express = require('express');
const rateLimit = require('express-rate-limit');
const {
  submitEnquiry,
  getAllEnquiries,
  getEnquiryById
} = require('../controllers/enquiryController');

const router = express.Router();

// Specific rate limiter for enquiry submissions to prevent automated spam
const enquirySubmissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 submissions per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiry submissions from this IP, please try again after 15 minutes or contact us directly on WhatsApp at +91 80868 52813.'
  }
});

// Submit enquiry
router.post('/', enquirySubmissionLimiter, submitEnquiry);

// Get all enquiries (for monitoring / dashboard)
router.get('/', getAllEnquiries);

// Get single enquiry by ID
router.get('/:id', getEnquiryById);

module.exports = router;
