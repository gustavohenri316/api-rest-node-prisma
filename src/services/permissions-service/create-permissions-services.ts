import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPermission(
  title: string,
  description: string,
  rolesId: string[]
) {
  const permission = await prisma.permissions.create({
    data: {
      title,
      description,
      roles: { connect: rolesId.map((roleId) => ({ id: roleId })) },
    },
  });
  return permission;
}
