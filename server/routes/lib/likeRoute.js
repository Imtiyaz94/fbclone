import { Like, Post } from '../../db/models/index.js';
import { findUser } from '../../db/queries/index.js';
import { findPost } from '../../db/queries/post/findPost.js';
import { createLike } from '../../src/app/posts/createLike.js';

export const likePost = async (req, res) => {
  try {
    const postId = await req.params.id;
    console.log('post id', postId);
    co
    const userId = await findUser(req.user.id);
    console.log('like user id', userId);

    const createLike = await createLike({ postId, userId });
  } catch (error) {
    return res.status(403).send({ error: error });
  }
};
