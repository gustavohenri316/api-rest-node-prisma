import { Request, Response } from "express";
import { createDidNotLikesComment } from "../../services/not-likes-comments-service/create-not-likes-comments-service";

export async function CreateDidNotLikesCommentController(
  req: Request,
  res: Response
) {
  try {
    const { userId, commentId } = req.body;

    if (!userId || !commentId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const didNotLikesComment = await createDidNotLikesComment(
      userId,
      commentId
    );

    return res.status(201).json(didNotLikesComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
