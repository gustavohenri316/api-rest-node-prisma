import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ReaderComments(page: number, itemsPerPage: number) {
  const skip = (page - 1) * itemsPerPage;

  const [comments, totalItems] = await Promise.all([
    prisma.comments.findMany({
      skip,
      take: itemsPerPage,
      select: {
        id: true,
        created_at: true,
        description: true,
        answers: true,
        updated_at: true,
        user: {
          select: {
            id: true,
            email: true,
            username: true,
            Profile: {
              select: {
                avatar_url: true,
                full_name: true,
              },
            },
          },
        },
        likes: true,
        did_not_like: true,
      },
    }),
    prisma.comments.count(),
  ]);

  return { comments, totalItems };
}
