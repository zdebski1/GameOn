interface ITeamMemberModel {
    teamMemberId: number,
    userFk: number,
    isActive: boolean,
    teamFk: number,
    createdDateTime: Date,
    createdBy: string,
    updatedDateTime: Date,
    updatedBy: string
}

export default ITeamMemberModel;