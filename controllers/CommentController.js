import Post from "../models/post.js";
import Comment from "../models/comment.js";

export const createComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const { comment } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(500).json({
        message: "Fail id",
      });
    }

    const newComment = new Comment({
      comment,
      user: req.userId,
      post: postId,
    });

    const mainComment = await newComment.save();
    res.json(mainComment);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Fail create comment",
    });
  }
};

export const getPostComments = async (req, res) => {
  try {
    const postId = await req.params.id;

    const comments = await Comment.find({ post: postId })
      .populate("user", "fullName")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Fail get all comments",
    });
  }
};
