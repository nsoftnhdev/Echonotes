import express from "express";
import { addBlog, addComment, deleteBlogsById, generateContent, getAllBlogs, getBlogComments, getBlogsById, tooglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogsById);
blogRouter.post("/delete", auth, deleteBlogsById);
blogRouter.post("/toogle-publish", auth, tooglePublish);
blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);
blogRouter.post("/generate", auth, generateContent);

export default blogRouter;