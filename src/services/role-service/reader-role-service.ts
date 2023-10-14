import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function ReaderRoles(page: number, itemsPerPage: number) {
  try {
    const totalCount = await prisma.role.count();
    const roles = await prisma.role.findMany({
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
    });
    return { status: 200, totalCount, itemsPerPage, currentPage: page, roles };
  } catch (error) {
    return { status: 500, message: i18n.__("internal.server.error") };
  }
}
