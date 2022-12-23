import {
  findAndUpdate,
  findUser,
  savePost,
} from '../../../db/queries/index.js';
import User from '../../../db/models/User.js';
import { errorHandler } from '../../utils/lib/errors/errorHandling.js';

export const createPosts = async ({ value, userId, images }) => {
  try {
    const savingPost = await savePost({ value, userId, images });
    const postInUser = await findAndUpdate(
      { _id: userId },
      // {
      //   $push: { posts: savingPost },
      // },
    );
    console.log('body user', value);
    if (!postInUser) {
      const response = {
        error: true,
        message: 'please login first',
      };
      return response;
    } else {
      const response = {
        error: false,
        message: 'Post Created Successfully',
        savingPost,
        postInUser,
      };
      return response;
    }
    // console.log('user name with post', postInUser);
  } catch (error) {
    return { error: true, message: error };
  }
};
