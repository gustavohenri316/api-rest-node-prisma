import { Request, Response } from "express";
import { ReaderProfiles } from "../../services/profile-service/reader-profile-service";
import { i18n } from "../../i18n/i18n";

export async function ReaderProfilesController(req: Request, res: Response) {
  const page = req.query.page ? parseInt(req.query.page as string) : 1;
  const itemsPerPage = req.query.itemsPerPage
    ? parseInt(req.query.itemsPerPage as string)
    : 10;

  try {
    const result = await ReaderProfiles(page, itemsPerPage);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
