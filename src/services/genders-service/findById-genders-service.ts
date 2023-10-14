import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getGenderById(genderId: string) {
  const gender = await prisma.genders.findUnique({
    where: { id: genderId },
  });
  return gender;
}
