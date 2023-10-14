// services/idea-photo-service.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteIdeaPhoto(ideaPhotoId: string) {
  const deletedIdeaPhoto = await prisma.ideaPhoto.delete({
    where: { id: ideaPhotoId },
  });
  return deletedIdeaPhoto;
}
