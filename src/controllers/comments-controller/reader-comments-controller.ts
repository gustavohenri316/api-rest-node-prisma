import { Request, Response } from "express";
import { ReaderComments } from "../../services/comments-service/reader-comments-service";

export async function ReaderCommentsController(req: Request, res: Response) {
  try {
    const page = parseInt(String(req.query.page)) || 1;
    const itemsPerPage = parseInt(String(req.query.itemsPerPage)) || 20;

    const { comments, totalItems } = await ReaderComments(page, itemsPerPage);

    return res.status(200).json({
      page,
      itemsPerPage,
      totalItems,
      comments,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
