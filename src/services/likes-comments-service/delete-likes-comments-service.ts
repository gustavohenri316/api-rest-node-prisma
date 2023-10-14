import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteLikesComment(likesCommentId: string) {
  const deletedLikesComment = await prisma.likesComments.delete({
    where: {
      id: likesCommentId,
    },
  });

  return deletedLikesComment;
}
