import Fastify from 'fastify';

const fastify = Fastify();
// The platform passes the port in the PORT variable; 3000 by default
const port = Number(process.env.PORT) || 3000;

fastify.get('/', async () => {
    return 'Hello world';
});

fastify.listen({ port, host: '0.0.0.0' }).then((address) => {
    console.log(`Server running on ${address}`);
});
