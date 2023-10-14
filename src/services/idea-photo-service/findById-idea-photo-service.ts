import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ReaderIdeaPhotoById(ideaPhotoId: string) {
  const ideaPhoto = await prisma.ideaPhoto.findUnique({
    where: { id: ideaPhotoId },
  });

  return ideaPhoto;
}
