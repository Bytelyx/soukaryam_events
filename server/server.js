require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const enquiryRoutes = require('./routes/enquiryRoutes');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5001;

// Security HTTP headers
app.use(helmet());

// CORS Configuration
const allowedOrigins = [
  process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all for seamless local dev while keeping origin header support
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

// Global Rate Limiting
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again later.'
  }
});
app.use(globalLimiter);

// Body Parsing Middleware
app.use(express.json({ limit: '15kb' }));
app.use(express.urlencoded({ extended: true, limit: '15kb' }));

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Soukaryam Events & Catering API',
    mode: 'Direct WhatsApp Inquiries',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/contact', enquiryRoutes);
app.use('/api/enquiries', enquiryRoutes);

// Catch 404
app.use(notFoundHandler);

// Central Error Handler
app.use(errorHandler);

// Start Server
let server;
if (require.main === module) {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  // Handle graceful shutdown
  const gracefulShutdown = () => {
    console.log('[Soukaryam API] Received termination signal. Closing server...');
    if (server) {
      server.close(() => {
        console.log('[Soukaryam API] HTTP server closed cleanly.');
        process.exit(0);
      });
    } else {
      process.exit(0);
    }
  };

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);
}

module.exports = app;
