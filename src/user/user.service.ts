import { CreateUserDTO } from './CreateUserDto';
import User from './user.model';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import { HttpError } from '../utils/httpError';

export async function createUserService(createUserDto: CreateUserDTO) {
  try {
    const {
      userName,
      password,
      email,
      firstName,
      lastName
    } = createUserDto;

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }],
      },
    });

    if (existingUser) {
      throw new HttpError('Email already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userName,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      isActive: true,
      dateRegistered: new Date(),
      createdBy: 'ADMIN',
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
