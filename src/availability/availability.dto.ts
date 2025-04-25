export interface CreateAvailabilityDto {
  teamFk: number;
  availableDate: Date;
  startDateTime: Date;
  endDateTime: Date;
  userId: number;
}
