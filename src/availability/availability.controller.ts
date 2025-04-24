import { FastifyReply, FastifyRequest } from "fastify";
import { GetAvailibitiesService } from "./availability.service";

export async function GetAvailibitiesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    reply.send(await GetAvailibitiesService());
  } catch (error) {
    console.log("error: Failed to fetch availabilities");
    reply.status(500).send({ error: "Failed to fetch availabilities" });
  }
}
