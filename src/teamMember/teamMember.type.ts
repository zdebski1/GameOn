import { CreateTeamMemberDto } from "./teamMember.dto";

export interface GetTeamMembersRoute {
  Params: {
    teamId: string;
  };
}

export interface CreateTeamMemberRoute {
  Params: {
    teamId: string;
  };
  Body: Omit<CreateTeamMemberDto, "teamFk">;
}