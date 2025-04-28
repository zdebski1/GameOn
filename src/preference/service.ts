import {
    createPreference,
    getPreferencesByUser,
  } from "./repository";
  import { PreferenceDto } from "./dto";
  import { HttpError } from "../utils/httpError";
  
  export async function createUserPreferenceService(
    preferenceDto: PreferenceDto
  ) {
    try {
      const {
        userFk,
        allowSmsNotifications,
        allowEmailNotifications,
        marketingOptIn,
      } = preferenceDto;
  
      const userPreferencesExist = await getPreferencesByUser(userFk);
  
      if (userPreferencesExist) {
        throw new HttpError("User Preferences already exist", 409);
      }
  
      const createPreferences = await createPreference({
        userFk,
        allowSmsNotifications,
        allowEmailNotifications,
        marketingOptIn,
        createdDate: new Date(),
        createdBy: userFk,
        updatedDateTime: null,
        updatedBy: null,
      });
  
      return {
        message: "User Preferences Created",
  
        UserPreferences: {
          userFk: createPreferences.userFk,
          allowSmsNotifications: createPreferences.allowSmsNotifications,
          allowEmailNotifications: createPreferences.allowEmailNotifications,
          marketingOptIn: createPreferences.marketingOptIn,
        },
      };
    } catch (error) {
      console.error("Error creating user preferences:", (error as Error).message);
      throw error;
    }
  }
  
  export async function getPreferencesByUserIdService(userFk: number) {
    try {
      const userPreference = await getPreferencesByUser(userFk);
      return {
        userFk: userPreference?.userFk,
        allowEmailNotifications: userPreference?.allowEmailNotifications,
        allowSmsNotifications: userPreference?.allowSmsNotifications,
        marketingOptIn: userPreference?.marketingOptIn,
      };
    } catch (error) {
      console.error("Error getting user preferences: ", (error as Error).message);
      throw error;
    }
  }