import { CreateAvailabilityDto } from "./availability.dto";

export interface CreateAvailabilityRoute {
  Params: {
    teamId: string;
  };
  Body: Omit<CreateAvailabilityDto, "teamFk">;
}
