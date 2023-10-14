import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteProfile(profileId: string) {
  const deletedProfile = await prisma.profile.delete({
    where: { id: profileId },
  });
  return deletedProfile;
}
