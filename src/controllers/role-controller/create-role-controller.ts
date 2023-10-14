import { Request, Response } from "express";
import { createRole } from "../../services/role-service/create-role-service";
import { i18n } from "../../i18n/i18n";

export async function CreateRoleController(req: Request, res: Response) {
  const { title, description, permissionIds } = req.body;

  const result = await createRole(title, description, permissionIds);

  if (result.status === 201) {
    return res
      .status(result.status)
      .json({ message: i18n.__("role.created.successfully") });
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
