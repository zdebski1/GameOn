import { IUserPreferencesModel } from "./preferences.interface";
import UserPreferences from "./preferences.model";

export async function createUserPreference(
  userPreferences: Omit<IUserPreferencesModel, "userPreferenceId">
) {
  return await UserPreferences.create(userPreferences);
}

export async function getUserPreferencesByUser(userFk: number) {
  return UserPreferences.findOne({
    where: { userFk: userFk },
  });
}
