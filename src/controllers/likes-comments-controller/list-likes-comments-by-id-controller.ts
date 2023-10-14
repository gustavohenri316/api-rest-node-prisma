import { Request, Response } from "express";
import { listLikesCommentsByCommentId } from "../../services/likes-comments-service/list-likes-comments-by-id-service";
export async function ListLikesCommentsByCommentIdController(
  req: Request,
  res: Response
) {
  try {
    const commentId = req.params.commentId;

    if (!commentId) {
      return res.status(400).json({ message: "Missing commentId" });
    }

    const likesComments = await listLikesCommentsByCommentId(commentId);

    return res.status(200).json(likesComments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
