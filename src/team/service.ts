import { TeamDto } from "./dto";
import { createTeam, getAllTeamsForUser } from "./repository";
import { HttpError } from "../utils/httpError";
import { getTeamsOwnedByUser } from "./repository";

export async function createTeamService(teamDto: TeamDto) {
  try {
    const { teamName, userId } = teamDto;

    if (await getTeamsOwnedByUser(teamDto.userId, teamDto.teamName)) {
      throw new HttpError("Team already exists", 409);
    }

    const newTeam = await createTeam({
      teamName,
      isActive: true,
      isOwner: true,
      createdDateTime: new Date(),
      createdBy: userId,
      updatedDateTime: null,
      updatedBy: null,
    });

    return {
      message: "Team created successfully",
      team: {
        teamName: newTeam.teamName
      },
    };
  } catch (error) {
    console.error("Error creating Team:", (error as Error).message);
    throw error;
  }
}

export async function getTeamsService(userId: number): Promise<TeamDto[]> {
  try {
    return ((await getAllTeamsForUser(userId)) ?? []).map((team: TeamDto) => ({
      teamId: team.teamId,
      teamName: team.teamName,
      isOwner: team.isOwner,
    }));
  } catch (error) {
    console.error("Error fetching teams: ", error);
    throw error;
  }
}
