import { Router } from "express";
import { CreateLikesCommentController } from "../../controllers/likes-comments-controller/create-likes-comments-controller";
import { ListLikesCommentsByCommentIdController } from "../../controllers/likes-comments-controller/list-likes-comments-by-id-controller";
import { ReaderAllLikesCommentsController } from "../../controllers/likes-comments-controller/reader-likes-comments-controller";

const likesCommentsRouter = Router();

likesCommentsRouter.post("/likes-comments", CreateLikesCommentController);
likesCommentsRouter.get(
  "/comments/:commentId/likes-comments",
  ListLikesCommentsByCommentIdController
);
likesCommentsRouter.get("/likes-comments", ReaderAllLikesCommentsController);

export default likesCommentsRouter;
