import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateComment(commentId: string, description: string) {
  const comment = await prisma.comments.update({
    where: { id: commentId },
    data: {
      description,
    },
  });

  return comment;
}
