import { Request, Response } from "express";
import { createPermission } from "../../services/permissions-service/create-permissions-services";
import { i18n } from "../../i18n/i18n";

export async function CreatePermissionController(req: Request, res: Response) {
  try {
    const { title, description, rolesId } = req.body;
    const permission = await createPermission(title, description, rolesId);
    return res.status(201).json(permission);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: i18n.__("internal.server.error") });
  }
}
