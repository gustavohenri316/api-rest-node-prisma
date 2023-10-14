import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProfileById(profileId: string) {
  const profile = await prisma.profile.findUnique({
    where: { id: profileId },
  });
  return profile;
}
