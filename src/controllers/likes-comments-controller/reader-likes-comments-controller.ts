import { Request, Response } from "express";
import { ReaderAllLikesComments } from "../../services/likes-comments-service/reader-likes-comments-service";

export async function ReaderAllLikesCommentsController(
  req: Request,
  res: Response
) {
  try {
    const likesComments = await ReaderAllLikesComments();

    return res.status(200).json(likesComments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
