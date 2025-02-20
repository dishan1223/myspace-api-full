import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    postTitle: { type: String, required: true },
    postContent: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;

