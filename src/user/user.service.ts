import { CreateUserDTO } from './user.dto';
import bcrypt from 'bcrypt';
import { HttpError } from '../utils/httpError';
import { findUserByEmail, createUser } from './user.repository';
import { isAscii } from 'buffer';

export async function createUserService(createUserDto: CreateUserDTO) {
  try {
    const {
      userName,
      password,
      email,
      phoneNumber,
      firstName,
      lastName,
      createdBy
    } = createUserDto;

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      throw new HttpError('Email already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({
      userName,
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
      dateRegistered: new Date(),
      createdBy,
      updatedDateTime: null,
      updatedBy: null,
    });

    return {
      message: 'User created successfully',
      user: {
        userId: newUser.userId,
        userName: newUser.userName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        isActive: newUser.isActive,
        isAdmin: newUser.isAdmin,
        isEmailVerified: newUser.isEmailVerified,
        isPhoneNumberVerified: newUser.isPhoneNumberVerified,
        profilePictureUrl: newUser.profilePictureUrl,
        dateRegistered: newUser.dateRegistered
      },
    };
  } catch (error) {
    console.error('Error creating user:', (error as Error).message);
    throw error;
  }
}
