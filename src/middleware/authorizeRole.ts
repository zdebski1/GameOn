import { FastifyRequest, FastifyReply, preHandlerHookHandler } from 'fastify';

export function authorizeRole(roles: string[]): preHandlerHookHandler {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify();

    const user = request.user as { role: string };
    
    if (!roles.includes(user.role)) {
      return reply.status(403).send({ message: 'Forbidden' });
    }
  };
}