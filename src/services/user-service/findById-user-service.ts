import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        role: {
          select: {
            title: true,
            description: true,
            permissions: true,
          },
        },
        Profile: {
          select: {
            id: true,
            adress: true,
            avatar_url: true,
            full_name: true,
            phone: true,
            genders: true,
          },
        },
      },
    });
    if (user) {
      return { status: 200, user };
    } else {
      return { status: 404, message: i18n.__("user.not.found") };
    }
  } catch (error) {
    return { status: 500, message: i18n.__("internal.server.error") };
  }
}
