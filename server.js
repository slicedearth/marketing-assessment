// THIRD PARTY IMPORTS
require('dotenv').config();
const express = require('express');
// ROUTES
const statusRoutes = require('./routes/status');
const newsletterRoutes = require('./routes/newsletter');
const emailRoutes = require('./routes/email');
const smsRoutes = require('./routes/sms');

// LOAD EXPRESS
const app = express();

// MIDDLEWARE
// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ROUTES
app.get('/', (req, res) => {
  res.send('Home Page');
});
app.use('/api/status', statusRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact/email', emailRoutes);
app.use('/api/contact/sms', smsRoutes);

// PORT VARIABLE
const port = process.env.PORT || 5000;

// START SERVER ON ASSIGNED PORT
app.listen(port, console.log(`Server started on port: ${port}.`));
