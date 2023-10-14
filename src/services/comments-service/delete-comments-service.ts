import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteComment(commentId: string) {
  const comment = await prisma.comments.delete({
    where: { id: commentId },
  });

  return comment;
}
