import { Post } from '../../../db/models/index.js';

async function showPosts() {
  let userPost = await Post.find()
    .sort('-createdAt')
    .populate('userId')
    .populate('_id');
//   if (!users) {
//     return res.status(201).send({ message: 'Not found' });
//   }
  return userPost;
  // next();
}
export default showPosts;
