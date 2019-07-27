const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Loading dot env in dev environment.
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Loading stripe functions
const { payment } = require('./stripe/payment.f');

// Exporting all functions
module.exports = {
  payment,
};
