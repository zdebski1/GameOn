import { CreateUserDTO } from './CreateUserDto';
import User from './user.model';
import bcrypt from 'bcrypt';

export async function createUserService(createUserDto: CreateUserDTO) {
  try {
    const {
      userName,
      password,
      firstName,
      lastName,
      birthdate,
      steamAccountId,
      isActive,
    } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userName,
      password: hashedPassword,
      firstName,
      lastName,
      birthdate,
      steamAccountId,
      isActive,
      createdDateTime: new Date(),
      createdBy: 'ADMIN',
      updatedDateTime: null,
      updatedBy: null,
    });

    return newUser;
  } catch (error) {
    console.error('Error creating user in service:', error);
    throw new Error('User creation failed');
  }
}
