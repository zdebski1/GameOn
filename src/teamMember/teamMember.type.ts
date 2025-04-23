import { TeamMemberDto } from "./teamMember.dto";

export interface GetAllTeamMembersRoute {
  Params: {
    teamId: string;
  };
}

export interface CreateTeamMemberRoute {
  Params: {
    teamId: string;
  };
  Body: Omit<TeamMemberDto, "teamFk">;
}