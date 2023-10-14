import { Request, Response } from "express";
import { GetByIdIdea } from "../../services/idea-service/findById-idea-service";
import { i18n } from "../../i18n/i18n";

export async function FindByIdIdeaController(req: Request, res: Response) {
  try {
    const ideaId = req.params.id;
    const idea = await GetByIdIdea(ideaId);

    if (idea) {
      return res.status(200).json(idea);
    } else {
      return res.status(404).json({ error: i18n.__("idea.not.found") });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
