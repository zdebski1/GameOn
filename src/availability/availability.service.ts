import { getAvailabilities } from "./availability.repository";

export async function GetAvailibitiesService() {
    return await getAvailabilities();
}