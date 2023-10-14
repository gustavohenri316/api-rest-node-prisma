import { Request, Response } from "express";
import { deleteIdeaPhoto } from "../../services/idea-photo-service/delete-idea-photo-service";

export async function DeleteIdeaPhotoController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const deletedIdeaPhoto = await deleteIdeaPhoto(id);

    if (!deletedIdeaPhoto) {
      return res.status(404).json({ message: "Foto não encontrada" });
    }

    return res.status(200).json({ message: "Foto deletada com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
