import { Role, User } from '../../prisma/generated/client';
import { comparePassword } from '../lib/bcrypt';
import { generateToken } from '../lib/jwt';
import prisma from '../lib/prisma';

export const loginService = async (body: User) => {
  try {
    const { username, password } = body;

    const existingUser = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!existingUser) {
      throw new Error('Email already registered');
    }

    const isPasswordValid = await comparePassword(
      password,
      existingUser.password,
    );

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const { password: correctPassword, ...user } = existingUser;

    const token = generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
      fullname: user.fullname || '',
      identityNumber: user.identityNumber,
      role: user.role as Role,
    });

    return {user, token}
  } catch (error) {
    throw error;
  }
};
