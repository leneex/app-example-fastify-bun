import Fastify from 'fastify';

const fastify = Fastify();
// Порт передаёт платформа в переменной PORT; без неё — 3000
const port = Number(process.env.PORT) || 3000;

fastify.get('/', async () => {
    return 'Hello world';
});

fastify.listen({ port, host: '0.0.0.0' }).then((address) => {
    console.log(`Server running on ${address}`);
});
