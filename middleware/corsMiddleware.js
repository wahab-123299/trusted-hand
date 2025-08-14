const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3000', 'https://yourdomain.com'], // ✅ Add trusted domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // ✅ Allow cookies/auth headers if needed
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
// trusted-hand/middleware/corsMiddleware.js
// trusted-hand/middleware/helmetMiddleware.js