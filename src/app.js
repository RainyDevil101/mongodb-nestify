import Fastify from 'fastify';
import 'dotenv/config';

import { connectDB } from './utils/connectionDB.js';
import { routes } from './routes/products.routes.js';

const fastify = Fastify({
  logger: true
});

connectDB();

fastify.get('/', async (request, reply) => {
  reply.send({ message: 'Hello world' });
});

routes.map((route) => {
  fastify.route(route);
});

// fastify.route(...routes);


const start = async () => {
  try {
    await fastify.listen({ port: `${process.env.PORT}` })
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
