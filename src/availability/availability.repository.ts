import Availability from "./availability.model";

export async function getAvailabilities() {
    try {
        const availabilities = await Availability.findAll();

        const plainAvailabilities = availabilities.map(availability => availability.get({ plain: true }));

        return plainAvailabilities;
    }catch(error) {
        console.error('Error fetching availabilities:', error);
    }
}