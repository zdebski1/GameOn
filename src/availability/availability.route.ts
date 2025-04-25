import { FastifyInstance } from "fastify";
import {
  CreateAvailabilityController,
  GetAvailibitiesController,
} from "./availability.controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateAvailabilityRoute } from "./availability.type";

export default async function (fastify: FastifyInstance) {
  fastify.get(
    "/availabilities/:teamId",
    { preHandler: authorizeRole(["user", "admin"]) },
    GetAvailibitiesController
  );
  fastify.post<CreateAvailabilityRoute>(
    "/availabilities/:teamId",
    { preHandler: authorizeRole(["user", "admin"]) },
    CreateAvailabilityController
  );
}
