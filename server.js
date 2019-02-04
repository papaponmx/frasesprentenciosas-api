require('dotenv').config();
const mongoose = require('mongoose');
const fastify = require('fastify')({
  logger: !process.ENV.NODE_ENV === 'production',
});

const routes = require('./routes');
// Connect to DB
mongoose.connect(process.env.MONGO_DB_URL);



fastify.route({
  method: 'GET',
  url: '/',
  handler: async (request, reply) => {
    return { hello: 'world' };
  }
});

routes.forEach(route => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();