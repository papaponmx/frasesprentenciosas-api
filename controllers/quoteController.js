// External Dependancies
const boom = require('boom');

// Get Data Models
const Quote = require('../models/Quote');

// Get all quotes
exports.getQuotes = async (req, reply) => {
  try {
    const quotes = await Quote.find();
    return quotes;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single Quote by ID
exports.getSingleQuote = async (req) => {
  try {
    const id = req.params.id;
    const quote = await Quote.findById(id);
    return quote;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Quote
exports.addQuote = async (req) => {
  try {
    const quote = new Quote(req.body);
    return quote.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing Quote
exports.updateQuote = async (req) => {
  try {
    const id = req.params.id;
    const quote = req.body;
    const { ...updateData } = quote;
    const update = await Quote.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a Quote
exports.deleteQuote = async (req) => {
  try {
    const id = req.params.id;
    const quote = await Quote.findByIdAndRemove(id);
    return quote;
  } catch (err) {
    throw boom.boomify(err);
  }
};