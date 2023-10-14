import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createComment(
  userId: string,
  ideaId: string,
  description: string
) {
  const comment = await prisma.comments.create({
    data: {
      userId,
      ideaId,
      description,
    },
  });

  return comment;
}
