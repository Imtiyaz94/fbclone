import { savePost } from './savePost.js';
import { findPost } from './findPost.js';
import { saveLike } from './saveLike.js';

const PostQueries = {};

PostQueries.saveLike = saveLike;
PostQueries.savePost = savePost;
PostQueries.findPost = findPost;

export default PostQueries;
