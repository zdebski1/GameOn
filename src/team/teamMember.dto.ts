export interface TeamMemberDto {
  teamMemberId?: number;
  teamFk: number;
  userFk: number;
  createdBy: number;
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
