import Post from "../models/Post.model.js";

const createPost = async (req, res) => {
  try {
    const { username, postTitle, postContent } = req.body;

    // Create new post
    const newPost = new Post({
      username,
      postTitle,
      postContent,
    });
    await newPost.save();

    // Send success response
    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (err) {
    // Send error response
    res.status(500).json({
      message: "Error creating post",
      error: err.message,
    });
  }
};

export default createPost;
