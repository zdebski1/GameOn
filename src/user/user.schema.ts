export const createUserSchema = {
  body: {
    type: "object",
    required: ["userName","password", "email", "firstName", "lastName"],
    properties: {
      userName: { type: "string",  minLength: 6, maxLength: 32 },      
      password: {
        type: "string",
        minLength: 6,
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$",
        errorMessage:
          "Password must contain at least one uppercase letter, one lowercase letter, and one special character.",
      },
      email: { type: "string", format: "email" },
      phoneNumber: {
        type: "string",
        pattern: "^[0-9]{10,15}$",
        errorMessage: "Phone number must be between 10 and 15 digits",
      },
      firstName: { type: "string", minLength: 1 },
      lastName: { type: "string", minLength: 1 },
    },
    errorMessage: {
      required: {
        userName: "UserName is requied",
        password: "Password is required",
        email: "Email is required",
        firstName: "First name is required",
        lastName: "Last name is required",
      },
    },
  },
};
