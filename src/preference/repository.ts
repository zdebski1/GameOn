import { IPreferencesModel } from "./interface";
import UserPreferences from "./model";

export async function createPreference(
  userPreferences: Omit<IPreferencesModel, "preferenceId">
) {
  return await UserPreferences.create(userPreferences);
}

export async function getPreferencesByUser(userFk: number) {
  return UserPreferences.findOne({
    where: { userFk: userFk },
  });
}
