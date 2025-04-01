interface ITeamMemberModel {
    teamMemberId: Number,
    teamMember: String,
    isActive: Boolean,
    teamFk: Number,
    createdDateTime: Date,
    createdBy: String,
    updatedDateTime: Date,
    updatedBy: String
}

export default ITeamMemberModel;