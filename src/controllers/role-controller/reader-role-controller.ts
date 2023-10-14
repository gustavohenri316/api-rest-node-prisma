import { Request, Response } from "express";
import { ReaderRoles } from "../../services/role-service/reader-role-service";

export async function ReaderRolesController(req: Request, res: Response) {
  const page = req.query.page ? parseInt(req.query.page as string) : 1;
  const itemsPerPage = req.query.itemsPerPage
    ? parseInt(req.query.itemsPerPage as string)
    : 10;

  const result = await ReaderRoles(page, itemsPerPage);

  if (result.status === 200) {
    return res.status(result.status).json(result);
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
