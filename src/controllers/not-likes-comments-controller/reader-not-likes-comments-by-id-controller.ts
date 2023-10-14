import { Request, Response } from "express";
import { listDidNotLikesComments } from "../../services/not-likes-comments-service/list-not-likes-comments-by-id-service";

export async function listDidNotLikesCommentsController(
  req: Request,
  res: Response
) {
  try {
    const commentId = req.params.commentId;

    if (!commentId) {
      return res.status(400).json({ message: "Missing commentId" });
    }

    const didNotLikesComments = await listDidNotLikesComments(commentId);

    return res.status(200).json(didNotLikesComments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
