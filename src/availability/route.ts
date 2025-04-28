import { FastifyInstance } from "fastify";
import {
  CreateAvailabilityController,
  GetAvailibitiesController,
} from "./controller";
import { authorizeRole } from "../middleware/authorizeRole";
import { CreateAvailabilityRoute, GetAvailabilityRoute } from "./type";

export default async function (fastify: FastifyInstance) {
  fastify.get<GetAvailabilityRoute>(
    "/availabilities/:teamId/member/:teamMemberId",
    { preHandler: authorizeRole(["user", "admin"]) },
    GetAvailibitiesController
  );
  fastify.post<CreateAvailabilityRoute>(
    "/availabilities/:teamId",
    { preHandler: authorizeRole(["user", "admin"]) },
    CreateAvailabilityController
  );
}
