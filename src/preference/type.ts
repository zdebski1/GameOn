import { PreferenceDto } from "./dto";

export interface CreatePreferenceRoute {
    Body: Omit<PreferenceDto, "userFk">;
}