import { Request, Response } from "express";
import { UpdateRole } from "../../services/role-service/update-role-service";
import { i18n } from "../../i18n/i18n";

export async function UpdateRoleController(req: Request, res: Response) {
  const roleId = req.params.id;
  const { title, description, permissionIds } = req.body;

  const result = await UpdateRole(roleId, title, description, permissionIds);

  if (result.status === 200) {
    return res
      .status(result.status)
      .json({ message: i18n.__("role.updated.successfully") });
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
