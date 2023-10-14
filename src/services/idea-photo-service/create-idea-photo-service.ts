import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createIdeaPhoto(photos: string, ideaId: string) {
  const ideaPhoto = await prisma.ideaPhoto.create({
    data: {
      photos,
      Idea: { connect: { id: ideaId } },
    },
  });
  return ideaPhoto;
}
