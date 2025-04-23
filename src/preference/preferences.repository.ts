import { IPreferencesModel } from "./preferences.interface";
import UserPreferences from "./preferences.model";

export async function createPreference(
  userPreferences: Omit<IPreferencesModel, "userPreferenceId">
) {
  return await UserPreferences.create(userPreferences);
}

export async function getPreferencesByUser(userFk: number) {
  return UserPreferences.findOne({
    where: { userFk: userFk },
  });
}
