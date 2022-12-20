import { findById } from '../../../db/queries';

export const createPosts = async (req, res) => {
  const user = await findById({ id: req.params.id });
  const newPost = 
};
