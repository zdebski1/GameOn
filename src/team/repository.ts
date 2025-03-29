 import Team from "./model";

async function getAllTeams() {
    try {
        const teams = await Team.findAll();

        const plainTeams = teams.map(team => team.get({ plain: true }));

        console.log(plainTeams);
        return plainTeams;
    }catch(error) {
        console.error('Error fetching teams:', error);
    }
}

getAllTeams();