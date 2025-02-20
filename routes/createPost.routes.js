import express from "express";
import createPost from "../controller/createPost.controller.js";
const createPostRouter = express.Router();


createPostRouter.post("/", createPost);

export default createPostRouter;
