import { FastifyReply, FastifyRequest } from "fastify";
import { loginService } from "./auth.service";
import { loginRequestDto } from "./auth.dto";


export async function loginController(
    request: FastifyRequest<{ Body: loginRequestDto }>, 
    reply: FastifyReply
) {
try {
    const loginRequestDto = request.body;
    const newLogin = await loginService(loginRequestDto);
    return reply.code(201).send(newLogin);
  } catch (error) {
    console.error('Error logging in: ', error);

    if (error instanceof Error && (error as any).statusCode === 401) {
      return reply.code(401).send({ message: error.message });
    }
    
    return reply.code(500).send({ message: 'Internal Server Error' });
  }
}