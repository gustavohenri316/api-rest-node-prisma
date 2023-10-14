import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

export async function createRole(
  title: string,
  description: string,
  permissionIds: string[] | null
) {
  console.log(title, description, permissionIds);
  try {
    if (permissionIds === null) {
      permissionIds = [];
    }

    const existingPermissions = await prisma.permissions.findMany({
      where: {
        id: {
          in: permissionIds,
        },
      },
    });

    if (existingPermissions.length !== permissionIds.length) {
      return {
        status: 400,
        message: i18n.__("some.permissions.were.not.found"),
      };
    }

    const roleData: any = {
      title,
      description,
      permissions: {
        connect: existingPermissions.map((permission) => ({
          id: permission.id,
        })),
      },
    };

    const role = await prisma.role.create({
      data: roleData,
    });

    return { status: 201, role };
  } catch (error) {
    console.log(error);
    return { status: 500, message: i18n.__("internal.server.error") };
  }
}
