import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GetByIdIdea(ideaId: string) {
  try {
    const idea = await prisma.idea.findUnique({
      where: { id: ideaId },
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
    });
    return idea;
  } catch (error) {
    throw error;
  }
}
