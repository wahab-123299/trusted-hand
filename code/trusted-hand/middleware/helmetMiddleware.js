const helmet = require('helmet');

const helmetMiddleware = helmet({
  contentSecurityPolicy: false, // Optional: disable if you're using inline styles/scripts
  crossOriginEmbedderPolicy: false,
  referrerPolicy: { policy: 'no-referrer' },
  xssFilter: true,
  frameguard: { action: 'deny' },
  hidePoweredBy: true
});

module.exports = helmetMiddleware;
