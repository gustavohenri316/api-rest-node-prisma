import { Router } from "express";
import { CreateRoleController } from "../../controllers/role-controller/create-role-controller";
import { UpdateRoleController } from "../../controllers/role-controller/update-role-controller";
import { ReaderRolesController } from "../../controllers/role-controller/reader-role-controller";
import { DeleteRoleController } from "../../controllers/role-controller/delete-role-controller";
import { ReaderRoleByIdController } from "../../controllers/role-controller/findById-role-controller";

const roleRouter = Router();

roleRouter.post("/role", CreateRoleController);
roleRouter.put("/role/:id", UpdateRoleController);
roleRouter.get("/role", ReaderRolesController);
roleRouter.get("/role/:id", ReaderRoleByIdController);
roleRouter.delete("/role/:id", DeleteRoleController);

export default roleRouter;
