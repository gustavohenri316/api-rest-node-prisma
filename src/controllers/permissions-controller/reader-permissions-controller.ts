import { Request, Response } from "express";
import { ReaderPermissions } from "../../services/permissions-service/reader-permissions-services";
import { i18n } from "../../i18n/i18n";

export async function ReaderPermissionsController(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const itemsPerPage = parseInt(req.query.itemsPerPage as string) || 20;

    const { permissions, totalItems } = await ReaderPermissions(
      page,
      itemsPerPage
    );

    return res
      .status(200)
      .json({ totalItems, itemsPerPage, page, permissions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: i18n.__("internal.server.error") });
  }
}
