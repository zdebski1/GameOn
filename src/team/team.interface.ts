interface ITeamModel {
    teamId?: number;
    teamName: string;
    isActive: boolean;
    createdDateTime: Date;
    createdBy: string;
    updatedDateTime?: Date | null;
    updatedBy?: string | null;
}

export default ITeamModel;