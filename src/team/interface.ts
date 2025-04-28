interface ITeamModel {
    teamId?: number;
    teamName: string;
    isActive: boolean;
    isOwner: boolean;
    createdDateTime: Date;
    createdBy: number;
    updatedDateTime?: Date | null;
    updatedBy?: number | null;
  }
  
  export default ITeamModel;
  