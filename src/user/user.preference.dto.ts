export interface CreateUserPreferenceDto {
    userFk: number;
    allowSmsNotifications: boolean;
    allowEmailNotifications: boolean;
    marketingOptIn: boolean;
}