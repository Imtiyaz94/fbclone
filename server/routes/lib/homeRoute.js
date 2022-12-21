import { Post } from '../../db/models/index.js';
import { findById } from '../../db/queries/index.js';
import { findAll } from '../../db/queries/user/findAll.js';

export const homeRoute = async (req, res, next) => {
  const users = await findAll({});
  const userName = users.map((user) => user.username);
  console.log('username', userName);
  let posts = await Post.find()
    .sort('-createdAt')
    .populate('userId')
    .populate('_id');
  if (!users) {
    return res.status(201).send({ message: 'Not found' });
  }
  // next();
  return res.status(200).send({ posts: posts, users: userName });
};
