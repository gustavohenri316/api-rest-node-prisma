import { Router } from "express";
import { CreateIdeaPhotoController } from "../../controllers/idea-photo-controller/create-idea-photo-controller";
import { UpdateIdeaPhotoController } from "../../controllers/idea-photo-controller/update-idea-photo-controller";
import { ReaderAllIdeaPhotosController } from "../../controllers/idea-photo-controller/reader-idea-photo-controller";
import { DeleteIdeaPhotoController } from "../../controllers/idea-photo-controller/delete-idea-photo-controller";
import { ReaderIdeaPhotoByIdController } from "../../controllers/idea-photo-controller/findById-idea-photo-controller";

const IdeaPhotoRouter = Router();

IdeaPhotoRouter.post("/idea-photo", CreateIdeaPhotoController);
IdeaPhotoRouter.put("/idea-photo/:id", UpdateIdeaPhotoController);
IdeaPhotoRouter.delete("/idea-photo/:id", DeleteIdeaPhotoController);
IdeaPhotoRouter.get("/idea-photo", ReaderAllIdeaPhotosController);
IdeaPhotoRouter.get("/idea-photo/:id", ReaderIdeaPhotoByIdController);

export default IdeaPhotoRouter;
