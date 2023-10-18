// services/profile-service/update-profile-service.ts
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
      phone: updatedData.phone,
      state: updatedData.state,
      city: updatedData.city,
      neighborhood: updatedData.neighborhood,
      street: updatedData.street,
      number: updatedData.number,
      complement: updatedData.complement,
      cep: updatedData.cep,
      birthDate: updatedData.birthDate,
      gendersId: updatedData.gender,
    },
  });
  return updatedProfile;
}
