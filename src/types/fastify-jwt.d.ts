import '@fastify/jwt';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    userId: number;
    userName: string;
  }

  interface FastifyRequest {
    user: FastifyJWT;
  }
}
