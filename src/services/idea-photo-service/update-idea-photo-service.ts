import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateDataProps {
  photos: string;
}

export async function UpdateIdeaPhoto(
  ideaPhotoId: string,
  updatedData: UpdateDataProps
) {
  const ideaPhoto = await prisma.ideaPhoto.update({
    where: { id: ideaPhotoId },
    data: updatedData,
  });
  return ideaPhoto;
}
