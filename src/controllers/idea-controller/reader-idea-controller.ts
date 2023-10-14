import { Request, Response } from "express";
import { ReaderIdeas } from "../../services/idea-service/reader-idea-service";
import { i18n } from "../../i18n/i18n";

export async function ReaderIdeasController(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const itemsPerPage = parseInt(req.query.itemsPerPage as string, 20) || 20;
    const { ideas, totalItems } = await ReaderIdeas(page, itemsPerPage);
    return res.status(200).json({ page, itemsPerPage, totalItems, ideas });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
