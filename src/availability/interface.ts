interface IAvailabilityModel {
    id: Number,
    gameNameFk: Number,
    availableDateTime: Date,
    createdDateTime: Date,
    createdBy: String,
    updatedDateTime: Date,
    updatedBy: String
}

export default IAvailabilityModel;