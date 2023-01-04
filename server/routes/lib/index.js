import { createUserRoute } from './createUserRoute.js';
import { loginUserRoutes } from './loginUserRoutes.js';
import { homeRoute } from './homeRoute.js';
import { createPostRoute } from './createPostRoute.js';
import { likePost } from './likeRoute.js';
import showPostRoute from './showPostRoute.js';

const postRoutes = {
  createPostRoute,
  likePost,
  showPostRoute,
};
const userRoutes = {
  createUserRoute,
  loginUserRoutes,
  homeRoute,
};

export { postRoutes, userRoutes };
