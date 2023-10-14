import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ReaderAllIdeaPhotos(page: number, itemsPerPage: number) {
  const skip = (page - 1) * itemsPerPage;
  const ideaPhotos = await prisma.ideaPhoto.findMany({
    skip,
    take: itemsPerPage,
  });

  const totalItems = await prisma.ideaPhoto.count();

  return { ideaPhotos, totalItems };
}
