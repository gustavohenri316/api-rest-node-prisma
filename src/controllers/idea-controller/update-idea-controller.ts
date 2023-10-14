import { Request, Response } from "express";
import { UpdateIdea } from "../../services/idea-service/update-idea-service";
import { i18n } from "../../i18n/i18n";

export async function UpdateIdeaController(req: Request, res: Response) {
  const { id } = req.params;
  const ideaData = req.body;

  try {
    const idea = await UpdateIdea(id, ideaData);
    if (idea) {
      return res
        .status(200)
        .json({ message: i18n.__("idea.edited.successfully"), idea });
    } else {
      return res.status(404).json({ error: i18n.__("idea.not.found") });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
