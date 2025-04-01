import TeamMember from "./teamMember.model";

async function getAllTeamMembers() {
    try {
        const teams = await TeamMember.findAll();

        const plainTeams = teams.map(teamMember => teamMember.get({ plain: true }));

        return plainTeams;
    }catch(error) {
        console.error('Error fetching Team Members:', error);
    }
}

export default getAllTeamMembers;