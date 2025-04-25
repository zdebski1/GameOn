import Availability from "./availability.model";
import { CreateAvailabilityDto } from "./availability.dto";
import { IAvailabilityModel } from "./availability.interface";

export async function getAvailabilities() {
    try {
        const availabilities = await Availability.findAll();

        const plainAvailabilities = availabilities.map(availability => availability.get({ plain: true }));

        return plainAvailabilities;
    }catch(error) {
        console.error('Error fetching availabilities:', error);
    }
}

export async function createAvailability(availability: Omit<IAvailabilityModel,'availabilityId'>) {
    return await Availability.create(availability);
  }