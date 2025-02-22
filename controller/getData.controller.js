import Post from "../models/Post.model.js";

const getData = async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export default getData;
