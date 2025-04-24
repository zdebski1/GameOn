import { IPreferencesModel } from "./preference.interface";
import UserPreferences from "./preference.model";

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
