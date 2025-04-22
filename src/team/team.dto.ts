export interface TeamDto {
    teamId?: number;
    teamName: string;
    isOwner: boolean;
    userId: number;
  }
  
  export interface CreateTeamDto {
    teamName: string;
    userId: number;
  }
  