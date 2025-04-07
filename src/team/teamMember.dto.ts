export interface TeamMemberDto {
    teamMemberId: number;
    firstName: string,
    lastName: string,
    userIsActive: boolean
}

export interface TeamMemberWithUserDto {
    teamMemberId: number;
    teamFk: number;
    isActive: boolean;
    user: {
      firstName: string;
      lastName: string;
      email: string;
      isActive: boolean;
    };
  }