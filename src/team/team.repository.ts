 import Team from "./team.model";

async function getAllTeams() {
    try {
        const teams = await Team.findAll();

        const plainTeams = teams.map(team => team.get({ plain: true }));

        return plainTeams;
    }catch(error) {
        console.error('Error fetching teams:', error);
    }
}

export default getAllTeams;