import { Post } from '../../../db/models/index.js';

export const savePost = async ({ value, userId, images }) => {
  try {
    console.log('post', value, userId, images);
    const newPost = await Post.create({
      text: value.text,
      photos: images,
      userId: userId,
    });
    return newPost;
  } catch (error) {
    return { error: true, message: 'Please Login First' };
  }
};
