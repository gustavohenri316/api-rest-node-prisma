import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteIdea(ideaId: string) {
  try {
    const idea = await prisma.idea.findUnique({
      where: { id: ideaId },
    });

    if (!idea) {
      return null;
    }

    const result = await prisma.idea.delete({
      where: { id: ideaId },
    });

    return result;
  } catch (error) {
    throw error;
  }
}
