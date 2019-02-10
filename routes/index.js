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
    url: '/',
    handler: (request, reply) => {
      reply.send({ hello: 'world' });
    }
  },
  {
    method: 'GET',
    url: '/quotes',
    handler: getQuotes
  },
  {
    method: 'GET',
    url: '/quotes/:id',
    handler: getSingleQuote
  },
  // TODO: Add get Random quote
  {
    method: 'POST',
    url: '/quotes',
    handler: addQuote
  },
  {
    method: 'PUT',
    url: '/quotes/:id',
    handler: updateQuote
  },
  {
    method: 'DELETE',
    url: '/quotes/:id',
    handler: deleteQuote
  },

];

module.exports = routes;