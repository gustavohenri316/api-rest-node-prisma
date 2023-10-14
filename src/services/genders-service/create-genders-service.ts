import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createGender(name: string) {
  const newGender = await prisma.genders.create({
    data: {
      name,
    },
  });
  return newGender;
}
