export interface IAvailabilityModel {
    availabilityId?: number;
    teamFk: number;
    teamMemberFk: number;
    availableDate: Date;
    startDateTime: Date;
    endDateTime: Date;
    createdDateTime: Date;
    createdBy: number;
    updatedDateTime?: Date | null;
    updatedBy?: number | null;
  }