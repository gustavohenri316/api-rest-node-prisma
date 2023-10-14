import { Router } from "express";
import { CreateIdeaController } from "../../controllers/idea-controller/create-idea-controller";
import { UpdateIdeaController } from "../../controllers/idea-controller/update-idea-controller";
import { ReaderIdeasController } from "../../controllers/idea-controller/reader-idea-controller";
import { FindByIdIdeaController } from "../../controllers/idea-controller/findById-idea-controller";
import { DeleteIdeaController } from "../../controllers/idea-controller/delete-idea-controller";

const ideaRouter = Router();

ideaRouter.get("/ideas", ReaderIdeasController);
ideaRouter.get("/idea/:id", FindByIdIdeaController);
ideaRouter.post("/idea", CreateIdeaController);
ideaRouter.put("/idea/:id", UpdateIdeaController);
ideaRouter.delete("/idea/:id", DeleteIdeaController);

export default ideaRouter;
