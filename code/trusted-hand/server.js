const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const statusMonitor = require('express-status-monitor');
app.use(statusMonitor());
const logger = require('./utils/Loggers');
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

const helmetMiddleware = require('./middleware/helmetMiddleware');
app.use(helmetMiddleware);

// 🔐 Rate Limiting
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
  message: 'Too many requests from this IP, please try again later.'
});

// Connect to MongoDB
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in environment variables.');
  process.exit(1);
}
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
const settingsRoutes = require('./routes/settingsRoutes');
app.use('/api/settings', settingsRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Trusted Hand API');
});

const adminMiddleware = require('./middleware/adminMiddleware');
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminMiddleware, adminRoutes);

const notificationRoutes = require('./routes/notificationRoutes');
app.use('/api/notifications', notificationRoutes);
const authMiddleware = require('./middleware/authMiddleware');
app.use(authMiddleware);

const notificationController = require('./controllers/notificationController');
// Serve React build files (after all API routes and middleware)
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const corsMiddleware = require('./middleware/corsMiddleware');
app.use(corsMiddleware);