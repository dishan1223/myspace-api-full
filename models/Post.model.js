import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    {
        username: {type: String, required: true},
        postTitle: {type: String, required: true},
        postBody: {type: String, required: true},
    },
    {
        timestamps: true,
    }
})

const Post = mongoose.model("Post", postSchema);

export default Post;
