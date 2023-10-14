import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ReaderIdeas(page = 1, itemsPerPage = 10) {
  try {
    const skip = (page - 1) * itemsPerPage;

    const [ideas, totalItems] = await Promise.all([
      prisma.idea.findMany({
        skip,
        take: itemsPerPage,
        select: {
          id: true,
          likes: true,
          thumbnail: true,
          title: true,
          description: true,
          summary: true,
          price: true,
          internship: true,
          created_at: true,
          updated_at: true,
          userId: true,
          User: {
            select: {
              id: true,
              username: true,
              email: true,
              Profile: {
                select: {
                  id: true,
                  full_name: true,
                  avatar_url: true,
                },
              },
            },
          },
        },
      }),
      prisma.idea.count(),
    ]);

    return { ideas, page, itemsPerPage, totalItems };
  } catch (error) {
    throw error;
  }
}
