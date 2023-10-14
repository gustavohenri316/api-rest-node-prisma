import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function ReaderUsers(page: number, itemsPerPage: number) {
  try {
    const totalCount = await prisma.user.count();
    const users = await prisma.user.findMany({
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
      include: {
        role: {
          select: {
            title: true,
            description: true,
            permissions: true,
          },
        },
        Profile: true,
      },
    });

    return { status: 200, totalCount, itemsPerPage, currentPage: page, users };
  } catch (error) {
    return { status: 500, message: i18n.__("internal.server.error") };
  }
}
