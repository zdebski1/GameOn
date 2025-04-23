import { CreateUserPreferenceDto } from "./preference.dto";

export interface CreateUserPreferenceRoute {
    Body: Omit<CreateUserPreferenceDto, "userFk">;
}