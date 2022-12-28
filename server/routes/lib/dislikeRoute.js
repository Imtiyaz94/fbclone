import { Post } from '../../db/models';

export const dislike = async (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    { new: true },
  );
};
