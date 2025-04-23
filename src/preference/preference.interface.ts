export interface IPreferencesModel {
  userPreferenceId?: number;
  userFk: number;
  allowSmsNotifications: boolean;
  allowEmailNotifications: boolean;
  marketingOptIn: boolean;
  createdDate: Date;
  createdBy: number;
  updatedDateTime?: Date | null;
  updatedBy?: number | null;
}
