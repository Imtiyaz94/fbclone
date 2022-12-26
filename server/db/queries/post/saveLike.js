import { Like } from '../../models/index.js';

export const saveLike = async ({userId, post}) => {
  console.log('saving likes');
  const likeCreate = await Like.create({ userId: userId, postId: post });
  console.log('like create', likeCreate);
  post.updateOne(
    {
      $push: { likes: likeCreate },
    },
    { new: true },
  );
};
