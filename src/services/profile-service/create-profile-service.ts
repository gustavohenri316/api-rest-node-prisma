import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function addProfileToUser(userId: string, profileData: any) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error(i18n.__("user.not.found"));
    }

    const profile = await prisma.profile.create({
      data: {
        ...profileData,
        User: { connect: { id: userId } },
      },
    });

    return profile;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
