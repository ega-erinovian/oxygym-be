import prisma from '../../lib/prisma';

interface UpdatePlanBody {
  name?: string;
  price?: number;
  duration?: number;
}

export const updatePlanService = async (body: UpdatePlanBody, id: string) => {
  try {
    const { name } = body;

    const existingPlan = await prisma.membershipPlan.findUnique({
      where: { id },
    });

    if (!existingPlan) {
      throw new Error('Plan not found');
    }

    if (name && name !== existingPlan.name) {
      const planWithName = await prisma.membershipPlan.findFirst({
        where: { name },
      });

      if (planWithName) {
        throw new Error('Plan with this name already exists');
      }
    }

    return await prisma.membershipPlan.update({
      where: { id },
      data: {
        ...body,
      },
    });
  } catch (error) {
    throw error;
  }
};
