import { Request, Response } from "express";
import { createLikesComment } from "../../services/likes-comments-service/create-likes-comments-service";

export async function CreateLikesCommentController(
  req: Request,
  res: Response
) {
  try {
    const { userId, commentId } = req.body;

    if (!userId || !commentId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const likesComment = await createLikesComment(userId, commentId);

    return res.status(201).json(likesComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
