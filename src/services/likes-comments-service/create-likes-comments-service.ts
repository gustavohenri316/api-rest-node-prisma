import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createLikesComment(userId: string, commentId: string) {
  const existingLike = await prisma.likesComments.findFirst({
    where: {
      userId,
      commentsId: commentId,
    },
  });

  if (existingLike) {
    return "O usuário já deu 'like' neste comentário.";
  }

  const likesComment = await prisma.likesComments.create({
    data: {
      userId,
      commentsId: commentId,
    },
  });

  return likesComment;
}
