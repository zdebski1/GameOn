export interface CreateTeamMemberDto {
  teamMemberId?: number;
  teamFk: number;
  userFk: number;
  userId: number;
}

export interface GetTeamMemberDto {
  teamMemberId?: number;
  teamFk: number;
  userFk: number;
  userId: number;
}

export interface TeamMemberWithUserDto {
  teamMemberId?: number;
  teamFk: number;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface TeamMemberWithIdDto {
  teamMemberId?: number;
  teamFk: number;
  firstName: string;
  lastName: string;
}
