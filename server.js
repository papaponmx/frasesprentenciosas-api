require('dotenv').config();
const mongoose = require('mongoose');
const fastify = require('fastify')({
  logger: true,
});

const routes = require('./routes');
// Connect to DB
console.log('DQTP', process.env.PORT); // eslint-disable-line
mongoose.connect(process.env.MONGO_DB_URL);

routes.forEach(route => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();