import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function deleteRole(roleId: string) {
  try {
    const deletedRole = await prisma.role.delete({
      where: { id: roleId },
    });
    return { status: 200, role: deletedRole };
  } catch (error) {
    return {
      status: 500,
      message: i18n.__("internal.server.error"),
    };
  }
}
