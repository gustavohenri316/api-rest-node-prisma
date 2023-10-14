import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateIdeaProps {
  title: string;
  description: string;
  summary: string;
  likes: number;
  price: number;
  thumbnail: string;
  internship: string;
  userId?: string;
  photo: Prisma.IdeaPhotoUncheckedCreateNestedManyWithoutIdeaInput;
  comments: Prisma.CommentsUncheckedCreateNestedManyWithoutIdeaInput;
}
export async function UpdateIdea(ideaId: string, data: UpdateIdeaProps) {
  try {
    const existingIdea = await prisma.idea.findUnique({
      where: { id: ideaId },
      include: {
        User: true,
      },
    });

    if (!existingIdea) {
      return null;
    }

    const updatedIdea = await prisma.idea.update({
      where: { id: ideaId },
      data: {
        title: data.title,
        description: data.description,
        summary: data.summary,
        likes: data.likes,
        price: data.price,
        thumbnail: data.thumbnail,
        internship: data.internship,
      },
    });

    if (data.userId) {
      await prisma.idea.update({
        where: { id: ideaId },
        data: {
          User: {
            connect: {
              id: data.userId,
            },
          },
        },
      });
    }

    return updatedIdea;
  } catch (error) {
    throw error;
  }
}
