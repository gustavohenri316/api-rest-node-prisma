import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function updatePermission(
  permissionId: string,
  title: string | undefined,
  description: string | undefined,
  roleIds: string[] | undefined
) {
  try {
    const data: Record<string, any> = {};

    if (title !== undefined) {
      data["title"] = title;
    }

    if (description !== undefined) {
      data["description"] = description;
    }

    if (roleIds !== undefined && Array.isArray(roleIds)) {
      data["roles"] = { connect: roleIds.map((roleId) => ({ id: roleId })) };
    }

    if (Object.keys(data).length === 0) {
      throw new Error(i18n.__("no.valid.fields.provided.for.update"));
    }

    const permission = await prisma.permissions.update({
      where: {
        id: permissionId,
      },
      data,
    });

    return permission;
  } catch (error) {
    throw Error(i18n.__("permission.not.found"));
  }
}
