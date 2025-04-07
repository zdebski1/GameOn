 import Team from "./team.model";

async function getAllTeams() {
    try {
        const teams = await Team.findAll();

        return teams.map(team => team.get({ plain: true }));

    }catch(error) {
        console.error('Error fetching teams:', error);
    }
}

export default getAllTeams;