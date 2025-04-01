interface ITeamMemberModel {
    teamMemberId: Number,
    userFk: Number,
    isActive: Boolean,
    teamFk: Number,
    createdDateTime: Date,
    createdBy: String,
    updatedDateTime: Date,
    updatedBy: String
}

export default ITeamMemberModel;