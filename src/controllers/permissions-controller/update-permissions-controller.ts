import { Request, Response } from "express";
import { updatePermission } from "../../services/permissions-service/update-permissions-services";
import { i18n } from "../../i18n/i18n";

export async function UpdatePermissionController(req: Request, res: Response) {
  try {
    const permissionId = req.params.id;
    const { title, description, roleIds } = req.body;
    const updatedPermission = await updatePermission(
      permissionId,
      title,
      description,
      roleIds
    );

    if (updatedPermission) {
      return res.status(200).json(updatedPermission);
    } else {
      return res.status(404).json({ message: i18n.__("permission.not.found") });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: i18n.__("internal.server.error") });
  }
}
