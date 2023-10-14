import { PrismaClient } from "@prisma/client";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();

type UpdateUserTypes = {
  userId?: string;
  email?: string;
  username?: string;
  password?: string;
  roleId?: string | null;
};

export async function updateUser({
  userId,
  email,
  username,
  password,
  roleId,
}: UpdateUserTypes) {
  try {
    const userData: UpdateUserTypes = {};

    if (email) userData.email = email;
    if (username) userData.username = username;
    if (password) userData.password = password;
    if (roleId !== undefined) userData.roleId = roleId;

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return { status: 404, message: i18n.__("user.not.found") };
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: userData,
    });

    return { status: 200, user };
  } catch (error) {
    console.error(error);
    return { status: 500, message: i18n.__("internal.server.error") };
  }
}
