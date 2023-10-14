import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProfileByUserId(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Profile: true,
    },
  });

  return user?.Profile || null;
}

export async function updateProfile(profileId: string, updatedData: any) {
  const updatedProfile = await prisma.profile.update({
    where: { id: profileId },
    data: {
      full_name: updatedData.full_name,
      avatar_url: updatedData.avatar_url,
      adress: updatedData.address,
      phone: updatedData.phone,
    },
  });
  return updatedProfile;
}
