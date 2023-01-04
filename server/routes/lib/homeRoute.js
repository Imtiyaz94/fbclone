import { Post } from '../../db/models/index.js';
import UserQueries from '../../db/queries/user/index.js';

export const homeRoute = async (req, res, next) => {
  const users = await UserQueries.findAll({});
  const userName = users.map((user) => user.username);
  // console.log('username', userName);

  let posts = await Post.find()
    .sort('-createdAt')
    .populate('userId')
    .populate('_id');
  if (!users) {
    return res.status(201).send({ message: 'Not found' });
  }
  // next();
  return res.status(200).send({ posts: posts });
};
