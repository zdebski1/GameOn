import { createUserPreference, getUserPreferencesByUser } from "./user.preferences.repository";
import { CreateUserPreferenceDto } from "./user.preference.dto";
import { error } from "console";
import { HttpError } from "../utils/httpError";

export async function createUserPreferenceService (createUserPreferenceDto: CreateUserPreferenceDto) {
    try{
        const {
        userFk,
        allowSmsNotifications,
        allowEmailNotifications,
        marketingOptIn,
        createdBy
        } = createUserPreferenceDto; 

        const userPreferencesExist = await getUserPreferencesByUser(userFk);

        if (userPreferencesExist) {
            throw new HttpError('User Preferences already exist', 409);
        };

        const createUserPreferences = await createUserPreference ({
            userFk,
            allowSmsNotifications,
            allowEmailNotifications,
            marketingOptIn,
            createdDate: new Date(),
            createdBy,
            updatedDateTime: null,
            updatedBy: null,           
    });

    return {
        message: 'User Preferences Created',

        UserPreferences: {
        userFk: createUserPreferences.userFk,
        allowSmsNotifications: createUserPreferences.allowSmsNotifications,
        allowEmailNotifications: createUserPreferences.allowEmailNotifications,
        marketingOptIn: createUserPreferences.marketingOptIn                       
    }
}
    }catch (error){
        console.error('Error creating user preferences:', (error as Error).message);
        throw error;
    }
}


export async function getUserPreferencesByUserIdService(userFk: number){
    try{
        const userPreference = await getUserPreferencesByUser(userFk);
        
        
        return {
            userFk: userPreference?.userFk,
            allowEmailNotifications: userPreference?.allowEmailNotifications,
            allowSmsNotifications: userPreference?.allowSmsNotifications,
            marketingOptIn: userPreference?.marketingOptIn
        }
        
    } catch (error) {
        console.error('Error getting user preferences: ',(error as Error).message);
        throw (error);
    }
}