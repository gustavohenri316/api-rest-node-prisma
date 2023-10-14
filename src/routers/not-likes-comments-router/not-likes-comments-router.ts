import { Router } from "express";
import { CreateDidNotLikesCommentController } from "../../controllers/not-likes-comments-controller/create-not-likes-comments-controller";
import { DeleteDidNotLikesCommentController } from "../../controllers/not-likes-comments-controller/delete-not-likes-comments-controller";
import { listDidNotLikesCommentsController } from "../../controllers/not-likes-comments-controller/reader-not-likes-comments-by-id-controller";

const notLikesCommentsRouter = Router();

notLikesCommentsRouter.post(
  "/did-not-likes-comments",
  CreateDidNotLikesCommentController
);
notLikesCommentsRouter.delete(
  "/did-not-likes-comments/:didNotLikesCommentId",
  DeleteDidNotLikesCommentController
);

notLikesCommentsRouter.get(
  "/comments/:commentId/did-not-likes-comments",
  listDidNotLikesCommentsController
);

export default notLikesCommentsRouter;
