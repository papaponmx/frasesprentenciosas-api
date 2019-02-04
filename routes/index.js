const {
  addQuote,
  deleteQuote,
  getQuotes,
  getSingleQuote,
  updateQuote,
}  = require('../controllers/quoteController');

const routes = [
  {
    method: 'GET',
    url: '/api/quotes',
    handler: getQuotes
  },
  {
    method: 'GET',
    url: '/api/quotes/:id',
    handler: getSingleQuote
  },
  // TODO: Add get Random quote
  {
    method: 'POST',
    url: '/api/quotes',
    handler: addQuote
  },
  {
    method: 'PUT',
    url: '/api/quotes/:id',
    handler: updateQuote
  },
  {
    method: 'DELETE',
    url: '/api/quotes/:id',
    handler: deleteQuote
  },

];

module.exports = routes;