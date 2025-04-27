import { PreferenceDto } from "./preference.dto";

export interface CreatePreferenceRoute {
    Body: Omit<PreferenceDto, "userFk">;
}