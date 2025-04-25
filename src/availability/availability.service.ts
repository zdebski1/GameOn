import { CreateAvailabilityDto, GetAvailabilityDto, } from "./availability.dto";
import {
  createAvailability,
  getAvailabilities,
} from "./availability.repository";
import { HttpError } from "../utils/httpError";

export async function GetAvailibitiesService(getAvailabilityDto: GetAvailabilityDto) {
  return await getAvailabilities(getAvailabilityDto);
}

export async function CreateAvailabilityService(
  availability: CreateAvailabilityDto
) {
  try {
    const { teamFk, availableDate, startDateTime, endDateTime, userId } =
      availability;

      if (endDateTime < startDateTime){
        throw new HttpError ('End time cannot be prior to the start time', 400)
      }

    const newAvailability = await createAvailability({
      teamFk,
      teamMemberFk: userId,
      availableDate,
      startDateTime,
      endDateTime,
      createdDateTime: new Date(),
      createdBy: userId,
      updatedDateTime: null,
      updatedBy: null,
    });

    return {
      message: "Availability created successfully",
      availability: {
        teamFk: newAvailability.teamFk,
        teamMemberFk: newAvailability.teamMemberFk,
        availableDate: newAvailability.availableDate,
        startDateTime: newAvailability.startDateTime,
        endDateTime: newAvailability.endDateTime,
      },
    };
  } catch (error) {
    console.error("Error creating availability: ", error);
    throw error;
  }
}
