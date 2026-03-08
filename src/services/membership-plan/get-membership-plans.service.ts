import { MembershipPlan, Prisma } from '../../../prisma/generated/client';
import prisma from '../../lib/prisma';

interface GetMembershipPlansQuery {
  search?: string;
  duration?: number;
  price?: number;
}

export const getMembershipPlansService = async (
  query: GetMembershipPlansQuery,
) => {
  try {
    const { search, duration, price } = query;
    const whereClause: Prisma.MembershipPlanWhereInput = {
      isDeleted: false,
    };

    if (search) {
      whereClause.OR = [{ name: { equals: search } }];
    }

    if (duration) {
      whereClause.duration_days = duration;
    }

    if (price) {
      whereClause.price = price;
    }
    
    const membershipPlans = await prisma.membershipPlan.findMany({
      where: whereClause,
      orderBy: {
        price: 'desc',
      },
    });

    return { data: membershipPlans };
  } catch (error) {
    throw error;
  }
};
