import { Request, Response } from "express";
import { deleteRole } from "../../services/role-service/delete-role-service";
import { i18n } from "../../i18n/i18n";

export async function DeleteRoleController(req: Request, res: Response) {
  const roleId = req.params.id;

  const result = await deleteRole(roleId);

  if (result.status === 200) {
    return res
      .status(result.status)
      .json({ message: i18n.__("role.deleted.successfully") });
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
