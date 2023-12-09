// main express app
const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const port = 3001;

// Import routes
const productRoutes = require('./routes/products');

const mongoURI = process.env.MONGO_URI;

// mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
// cors middleware
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(json());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Configure session middleware (optional if you're using JWT)
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'secret-key',
  resave: false,
  saveUninitialized: true,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
    },
  })
);
app.use(sessionMiddleware);

// Routes

app.get('/', (req, res) => {
  res.send('cover page');
});
// products route
app.use('/products', productRoutes);
// port

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
