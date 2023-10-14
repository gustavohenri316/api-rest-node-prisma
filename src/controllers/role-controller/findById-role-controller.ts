import { Request, Response } from "express";
import { fetchRoleById } from "../../services/role-service/findById-role-service";
import { i18n } from "../../i18n/i18n";

export async function ReaderRoleByIdController(req: Request, res: Response) {
  const roleId = req.params.id;

  try {
    const result = await fetchRoleById(roleId);

    if (result.status === 200) {
      return res.status(result.status).json(result.role);
    } else {
      return res.status(result.status).json({ error: result.message });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: i18n.__("internal.server.error") });
  }
}
