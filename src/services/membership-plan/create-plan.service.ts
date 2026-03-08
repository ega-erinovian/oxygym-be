import { MembershipPlan } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const createMembershipPlanService = async (body: MembershipPlan) => {
  try {
    const { name } = body;

    const existingPlan = await prisma.membershipPlan.findFirst({
      where: { name },
    });

    if (existingPlan) {
      throw new Error("Membership plan already exist");
    }

    return await prisma.membershipPlan.create({
      data: { ...body },
    });
  } catch (error) {
    throw error;
  }
};