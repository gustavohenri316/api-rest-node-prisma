import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteUser(userId: string) {
  try {
    const user = await prisma.user.delete({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    return error;
  }
}
