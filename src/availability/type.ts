import { CreateAvailabilityDto, GetAvailabilityDto } from "./dto";

export interface CreateAvailabilityRoute {
  Params: {
    teamId: string;
  };
  Body: Omit<CreateAvailabilityDto, "teamFk">;
}

export interface GetAvailabilityRoute {
    Params: {
      teamId: string;
      teamMemberId: string;
    };
}
  