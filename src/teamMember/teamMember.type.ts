import { TeamMemberDto } from "./teamMember.dto";

export interface GetTeamMembersRoute {
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