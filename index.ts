import Fastify from 'fastify';

const fastify = Fastify();
const port = 3000;

fastify.get('/', async () => {
    return 'Hello world';
});

fastify.listen({ port, host: '0.0.0.0' }).then((address) => {
    console.log(`Server running on ${address}`);
});
