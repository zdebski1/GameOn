interface ITeamModel {
    teamId: Number,
    teamNameFk: Number,
    teamMemberFk: Number,
    createdDateTime: Date,
    createdBy: String,
    updatedDateTime: Date,
    updatedBy: String
}

export default ITeamModel;