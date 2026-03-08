import prisma from '../../lib/prisma';

export const deletePlanService = async (id: string) => {
  try {
    const plan = await prisma.membershipPlan.findFirst({
      where: { id },
    });

    if (!plan) {
      throw new Error('Plan not found.');
    }

    await prisma.membershipPlan.update({
      where: { id },
      data: { isDeleted: true },
    });

    return { message: 'Plan deleted successfully.' };
  } catch (error) {
    throw error;
  }
};
