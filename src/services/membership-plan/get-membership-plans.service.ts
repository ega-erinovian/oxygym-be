import { Prisma } from '../../../prisma/generated/client';
import prisma from '../../lib/prisma';
import { PaginationQueryParams } from '../../types/pagination';

interface GetMembershipPlansQuery extends PaginationQueryParams {
  search?: string;
  duration?: number;
  price?: number;
}

export const getMembershipPlansService = async (
  query: GetMembershipPlansQuery,
) => {
  try {
    const {
      page = 1,
      sortBy = 'name',
      sortOrder = 'desc',
      take,
      search,
      duration,
      price,
    } = query;
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
      skip: (page - 1) * take, // offset
      take: take, // limit
      orderBy: {
        [sortBy]: sortOrder,
      },
    });

    const count = await prisma.membershipPlan.count({
      where: whereClause,
    });

    return {
      data: membershipPlans,
      meta: {
        page: take !== -1 ? page : 1,
        take: take !== -1 ? take : count,
        total: count,
      },
    };
  } catch (error) {
    throw error;
  }
};
