const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  author: String,
  dateCreated: Number,
  likesCount: Number,
  quote: String,
});

module.exports = mongoose.model('Quote', quoteSchema);
