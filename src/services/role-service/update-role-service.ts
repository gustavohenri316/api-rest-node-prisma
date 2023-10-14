import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function UpdateRole(
  roleId: string,
  title: string,
  description: string,
  permissionIds: string[] | null
) {
  try {
    const roleData: any = {
      title,
      description,
    };

    if (permissionIds !== null) {
      roleData.permissions = {
        set: permissionIds,
      };
    }

    const updatedRole = await prisma.role.update({
      where: { id: roleId },
      data: roleData,
    });

    return { status: 200, role: updatedRole };
  } catch (error) {
    return { status: 500, message: i18n.__("internal.server.error") };
  }
}
