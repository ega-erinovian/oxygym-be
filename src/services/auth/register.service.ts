import { User } from '../../../prisma/generated/client';
import { hashPassword } from '../../lib/bcrypt';
import prisma from '../../lib/prisma';

export const registerService = async (body: User) => {
  try {
    const { email, password } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await hashPassword(password);

    return await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw error;
  }
};
