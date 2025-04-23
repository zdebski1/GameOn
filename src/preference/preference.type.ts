import { CreatePreferenceDto } from "./preference.dto";

export interface CreatePreferenceRoute {
    Body: Omit<CreatePreferenceDto, "userFk">;
}