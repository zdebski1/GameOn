interface IAvailabilityModel {
    availabilityId: Number,
    gameNameFk: Number,
    teamFk: Number,
    availableDateTime: Date,
    createdDateTime: Date,
    createdBy: String,
    updatedDateTime: Date,
    updatedBy: String
}

export default IAvailabilityModel;