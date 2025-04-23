import { CreateUserPreferenceDto } from "./user.preference.dto";

export interface CreateUserPreferenceRoute {
    Body: Omit<CreateUserPreferenceDto, "userFk">;
}