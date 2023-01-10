import express from 'express';
import { userRoutes, postRoutes } from './lib/index.js';
import { auth } from '../middelwares/auth.js';
import UserQueries from '../db/queries/user/index.js';

const router = express.Router();

// User auth
router.get('/home', auth, userRoutes.homeRoute);
router.post(
  '/register',
  UserQueries.multerUploads.single('profilePic'),
  userRoutes.createUserRoute,
);
router.post('/login', userRoutes.loginUserRoutes);

// routes for Post by user
router.post(
  '/create_post',
  auth,
  UserQueries.multerUploads.single('photos'),
  postRoutes.createPostRoute,
);
router.get('/posts', auth, postRoutes.showPostRoute);

// routes for Like by user
router.post('/:id/like', auth, postRoutes.likePost);

export default router;
