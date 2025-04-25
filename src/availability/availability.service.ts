import { CreateAvailabilityDto } from "./availability.dto";
import {
  createAvailability,
  getAvailabilities,
} from "./availability.repository";

export async function GetAvailibitiesService() {
  return await getAvailabilities();
}

export async function CreateAvailabilityService(
  availability: CreateAvailabilityDto
) {
  try {
    const { teamFk, availableDate, startDateTime, endDateTime, userId } =
      availability;

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
