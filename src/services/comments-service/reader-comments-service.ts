import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ReaderComments(page: number, itemsPerPage: number) {
  const skip = (page - 1) * itemsPerPage;

  const [comments, totalItems] = await Promise.all([
    prisma.comments.findMany({
      skip,
      take: itemsPerPage,
    }),
    prisma.comments.count(),
  ]);

  return { comments, totalItems };
}
