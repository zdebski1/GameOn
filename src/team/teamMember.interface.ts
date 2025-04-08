interface ITeamMemberModel {
    teamMemberId?: number,
    userFk: number,
    isActive: boolean,
    teamFk: number,
    createdDateTime: Date,
    createdBy: number,
    updatedDateTime?: Date | null,
    updatedBy?: number | null
}

export default ITeamMemberModel;