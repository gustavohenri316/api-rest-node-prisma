import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function fetchRoleById(roleId: string) {
  try {
    const role = await prisma.role.findUnique({
      where: {
        id: roleId,
      },
    });

    if (role) {
      return { status: 200, role };
    } else {
      return { status: 404, message: i18n.__("role.not.found") };
    }
  } catch (error) {
    return { status: 500, message: i18n.__("internal.server.error") };
  }
}
