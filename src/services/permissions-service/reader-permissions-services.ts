import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function ReaderPermissions(page: number, itemsPerPage: number) {
  try {
    const skip = (page - 1) * itemsPerPage;
    const permissions = await prisma.permissions.findMany({
      skip,
      take: itemsPerPage,
    });

    const totalItems = await prisma.permissions.count();

    return { permissions, totalItems };
  } catch (error) {
    throw new Error(i18n.__("permission.not.found"));
  }
}
