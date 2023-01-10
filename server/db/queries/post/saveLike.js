import { errorHandler } from '../../../src/utils/lib/errors/errorHandling.js';
import { Like, Post } from '../../models/index.js';

export const saveLike = async ({ userId, postId }) => {
  console.log('saving likes', userId._id, postId);
  const post = await Post.findById(postId).select([
    '_id',
    'userId',
    'likeCount',
  ]);
  const likedUser = await Like.findOne({ userId: userId, postId: post._id });
  // console.log('liked user', likedUser);

  if (!post) {
    return errorHandler(401, 'Post not found');
  }
  if (likedUser) {
    await Like.findOneAndDelete({ postId: postId, userId: userId });
    // await Like.updateOne({ liked: false });
    post.likeCount--;
    await post.save();

    return errorHandler(200, 'Post disliked');
  }
  const likeCreate = await Like.create({
    userId: userId,
    postId: postId,
  });
  await Like.updateOne({ liked: true });
  post.likeCount++;
  await post.save();
  return errorHandler(200, 'Post liked', likeCreate);
};
