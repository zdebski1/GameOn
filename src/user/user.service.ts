import { CreateUserDTO } from "./user.dto";
import bcrypt from "bcrypt";
import { HttpError } from "../utils/httpError";
import { findUserByEmail, createUser } from "./user.repository";
import { v4 as uuidv4 } from "uuid";

export async function createUserService(createUserDto: CreateUserDTO) {
  try {
    const { password, email, phoneNumber, firstName, lastName } = createUserDto;

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      throw new HttpError("Email already exists", 409);
    }

    const createdUuid: string = uuidv4();
    const combinedPassword = password + createdUuid;
    const hashedPassword = await bcrypt.hash(combinedPassword, 10);

    const newUser = await createUser({
      password: hashedPassword,
      email,
      phoneNumber,
      firstName,
      lastName,
      isActive: true,
      isAdmin: false,
      isEmailVerified: false,
      isPhoneNumberVerified: false,
      profilePictureUrl: null,
      uuid: createdUuid,
      emailVerificationCode: null,
      emailVerificationExpiresAt: null,
      createdDateTime: new Date(),
      updatedDateTime: null,
      updatedBy: null,
    });

    return {
      message: "User created successfully",
      user: {
        userId: newUser.userId,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        isActive: newUser.isActive,
        isAdmin: newUser.isAdmin,
        isEmailVerified: newUser.isEmailVerified,
        isPhoneNumberVerified: newUser.isPhoneNumberVerified,
        profilePictureUrl: newUser.profilePictureUrl,
        createdDateTime: newUser.createdDateTime,
      },
    };
  } catch (error) {
    console.error("Error creating user:", (error as Error).message);
    throw error;
  }
}
