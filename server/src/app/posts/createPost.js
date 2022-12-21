import {
  findAndUpdate,
  findUser,
  savePost,
} from '../../../db/queries/index.js';
import User from '../../../db/models/User.js';

export const createPosts = async ({ value, userId }) => {
  const savingPost = await savePost({ value, userId });
  const postInUser = await findAndUpdate(
    { _id: userId },
    {
      $push: { posts: savingPost },
    },
  );

  console.log('user name with post', postInUser);
  const response = {
    error: false,
    savingPost,
    postInUser,
  };
  return response;
};
