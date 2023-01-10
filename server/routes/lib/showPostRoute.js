import Post from '../../db/models/Post.js';
import PostQueries from '../../db/queries/post/index.js';
import showPosts from '../../src/app/posts/showPosts.js';

async function showPostsRoutes(req, res, next) {
  //   const post = await PostQueries.findPost({ _id: req.params.id });

  const postData = await showPosts();
  let posts = await Post.find()
    .sort('-createdAt')
    .populate('userId')
    .populate('_id');
  // if (!users) {
  //   return res.status(201).send({ message: 'Not found' });
  // }
  // next();
  const { userId, ...post } = postData;
  return res.status(200).send({ posts: { ...post } });
}
export default showPostsRoutes;
