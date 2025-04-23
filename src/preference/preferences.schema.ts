export const createPreferencesSchema = {
  body: {
    type: "object",
    required: [
      "allowSmsNotifications",
      "allowEmailNotifications",
      "marketingOptIn",
    ],
    properties: {
      allowSmsNotifications: { type: "boolean" },
      allowEmailNotifications: { type: "boolean" },
      marketingOptIn: { type: "boolean" },
    },
    errorMessage: {
      required: {
        allowSmsNotifications: "AllowSmsNotifications is required",
        allowEmailNotifications: "AllowEmailNotifications is required",
        marketingOptIn: "MarketingOptIn is required",
      },
    },
  }
};
