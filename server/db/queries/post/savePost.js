import { Post } from '../../../db/models/index.js';

export const savePost = async ({ value, userId }) => {
  console.log('post', value, userId);
  const newPost = await Post.create({
    text: value.text,
    photos: value.photos,
    userId: userId,
  });
  return newPost;
};
