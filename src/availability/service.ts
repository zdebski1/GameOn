import Availability from "./model";

async function getAllAvailabilities() {
    try {
        const availabilities = await Availability.findAll();

        const plainAvailabilities = availabilities.map(availability => availability.get({ plain: true }));

        console.log(plainAvailabilities);
        return plainAvailabilities;
    }catch(error) {
        console.error('Error fetching availabilities:', error);
    }
}

getAllAvailabilities();