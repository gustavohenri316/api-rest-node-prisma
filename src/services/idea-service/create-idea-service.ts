import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateIdeaProps {
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

export async function createIdea(data: CreateIdeaProps) {
  try {
    const idea = await prisma.idea.create({
      data: {
        title: data.title,
        description: data.description,
        summary: data.summary,
        likes: data.likes,
        price: data.price,
        thumbnail: data.thumbnail,
        internship: data.internship,
        User: {
          connect: { id: data.userId },
        },
      },
    });
    return idea;
  } catch (error) {
    throw error;
  }
}
