import { MembershipPlan, Prisma } from '../../../prisma/generated/client';
import prisma from '../../lib/prisma';

export const getMembershipPlanService = async (id: string) => {
  try {
    const membershipPlans = await prisma.membershipPlan.findUnique({
      where: { id, isDeleted: false },
    });

    return { data: membershipPlans };
  } catch (error) {
    throw error;
  }
};
