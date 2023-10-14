import { Request, Response } from "express";

import { ReaderGenders } from "../../services/genders-service/reader-genders-service";
import { i18n } from "../../i18n/i18n";
export async function ReaderGendersController(req: Request, res: Response) {
  try {
    const genders = await ReaderGenders();
    return res.status(200).json(genders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
