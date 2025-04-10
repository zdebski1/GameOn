interface IAvailabilityModel {
    availabilityId: number,
    gameNameFk: number,
    teamFk: number,
    availableDateTime: Date,
    createdDateTime: Date,
    createdBy: number,
    updatedDateTime: Date,
    updatedBy: number
}

export default IAvailabilityModel;