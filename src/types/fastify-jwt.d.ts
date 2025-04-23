import '@fastify/jwt';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    userId: number;
    userName: string;
    role: 'admin' | 'user';
  }

  interface FastifyRequest {
    user: FastifyJWT;
  }
}
