import { Request, Response } from "express";
import { getPermissionById } from "../../services/permissions-service/findById-permissions-service";
import { i18n } from "../../i18n/i18n";

export async function GetPermissionByIdController(req: Request, res: Response) {
  try {
    const permissionId = req.params.id;
    const permission = await getPermissionById(permissionId);
    return res.status(200).json(permission);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: i18n.__("permission.not.found") });
  }
}
