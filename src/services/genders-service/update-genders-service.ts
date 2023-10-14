import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateGender(genderId: string, name: string) {
  const updatedGender = await prisma.genders.update({
    where: { id: genderId },
    data: {
      name,
    },
  });
  return updatedGender;
}
