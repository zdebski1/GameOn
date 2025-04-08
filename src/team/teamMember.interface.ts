interface ITeamMemberModel {
    teamMemberId: number,
    userFk: number,
    isActive: boolean,
    teamFk: number,
    createdDateTime: Date,
    createdBy: number,
    updatedDateTime: Date,
    updatedBy: number
}

export default ITeamMemberModel;