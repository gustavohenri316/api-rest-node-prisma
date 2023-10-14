import { Request, Response } from "express";
import { ReaderAllIdeaPhotos } from "../../services/idea-photo-service/reader-idea-photo-service";

export async function ReaderAllIdeaPhotosController(
  req: Request,
  res: Response
) {
  try {
    const page = parseInt(String(req.query.page)) || 1;
    const itemsPerPage = parseInt(String(req.query.itemsPerPage)) || 20;

    const { ideaPhotos, totalItems } = await ReaderAllIdeaPhotos(
      page,
      itemsPerPage
    );

    return res.status(200).json({
      page,
      itemsPerPage,
      totalItems,
      ideaPhotos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
