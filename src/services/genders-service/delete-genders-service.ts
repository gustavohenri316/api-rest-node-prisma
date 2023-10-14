import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteGender(genderId: string) {
  const deletedGender = await prisma.genders.delete({
    where: { id: genderId },
  });
  return deletedGender;
}
