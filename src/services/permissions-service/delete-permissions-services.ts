import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function deletePermissionById(permissionId: string) {
  try {
    const permission = await prisma.permissions.findUnique({
      where: {
        id: permissionId,
      },
    });

    if (!permission) {
      throw new Error(i18n.__("permission.not.found"));
    }

    const deletedPermission = await prisma.permissions.delete({
      where: {
        id: permissionId,
      },
    });

    return deletedPermission;
  } catch (error) {
    throw new Error(i18n.__("permission.not.found"));
  }
}
