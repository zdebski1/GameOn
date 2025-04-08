import { CreateUserDTO } from './user.dto';
import bcrypt from 'bcrypt';
import { HttpError } from '../utils/httpError';
import { findUserByEmail, createUser } from './user.repository';

export async function createUserService(createUserDto: CreateUserDTO) {
  try {
    const {
      userName,
      password,
      email,
      firstName,
      lastName,
      isAdmin,
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
      firstName,
      lastName,
      isActive: true,
      isAdmin,
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
      },
    };
  } catch (error) {
    console.error('Error creating user:', (error as Error).message);
    throw error;
  }
}
