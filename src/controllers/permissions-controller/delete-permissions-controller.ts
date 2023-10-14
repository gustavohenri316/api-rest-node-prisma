import { Request, Response } from "express";
import { deletePermissionById } from "../../services/permissions-service/delete-permissions-services";
export async function DeletePermissionController(req: Request, res: Response) {
  try {
    const permissionId = req.params.id;

    const deletedPermission = await deletePermissionById(permissionId);

    return res.status(200).json(deletedPermission);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: i18n.__("permission.not.found") });
  }
}
