import { Role } from '../../../prisma/generated/client';
import { generateToken } from '../../lib/jwt';
import prisma from '../../lib/prisma';

export const refreshTokenService = async (userId: string) => {
  try {
    const existingUser = await prisma.user.findUnique({ where: { id: userId } });

    if (!existingUser) {
      throw new Error('User not found.');
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

    return { user, token };
  } catch (error) {
    throw error;
  }
};
