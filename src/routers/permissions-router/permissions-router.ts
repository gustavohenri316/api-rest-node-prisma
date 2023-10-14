import { Router } from "express";
import { CreatePermissionController } from "../../controllers/permissions-controller/create-permissions-controller";
import { UpdatePermissionController } from "../../controllers/permissions-controller/update-permissions-controller";
import { ReaderPermissionsController } from "../../controllers/permissions-controller/reader-permissions-controller";
import { GetPermissionByIdController } from "../../controllers/permissions-controller/findById-permissions-controller";
import { DeletePermissionController } from "../../controllers/permissions-controller/delete-permissions-controller";

const routerPermissions = Router();

routerPermissions.post("/permission", CreatePermissionController);
routerPermissions.patch("/permission/:id", UpdatePermissionController);
routerPermissions.get("/permissions", ReaderPermissionsController);
routerPermissions.get("/permissions/:id", GetPermissionByIdController);
routerPermissions.delete("/permission/:id", DeletePermissionController);

export default routerPermissions;
