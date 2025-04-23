export interface CreatePreferenceDto {
    userFk: number;
    allowSmsNotifications: boolean;
    allowEmailNotifications: boolean;
    marketingOptIn: boolean;
  }
  