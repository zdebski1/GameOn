import Availability from "./model";
import { GetAvailabilityDto } from "./dto";
import { IAvailabilityModel } from "./interface";

export async function getAvailabilities(getAvailabilityDto: GetAvailabilityDto) {
    try {
        const availabilities = await Availability.findAll({
            where: 
                [{ teamFk: getAvailabilityDto.teamFk }, { teamMemberFk: getAvailabilityDto.teamMemberFk }]
    });

        return availabilities;
    }catch(error) {
        console.error('Error fetching availabilities:', error);
    }
}

export async function createAvailability(availability: Omit<IAvailabilityModel,'availabilityId'>) {
    return await Availability.create(availability);
  }