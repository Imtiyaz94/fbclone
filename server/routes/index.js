import express from 'express';
import {
  createPostRoute,
  createUserRoute,
  homeRoute,
  likePost,
  loginUserRoutes,
} from './lib/index.js';
import { auth } from '../middelwares/auth.js';
import UserQueries from '../db/queries/user/index.js';

const router = express.Router();

// User auth
router.get('/home', auth, homeRoute);
router.post('/register',UserQueries.multerUploads.single('profilePic'), createUserRoute);
router.post('/login', loginUserRoutes);

// routes for Post by user
router.post(
  '/:id/create_post',
  auth,
  UserQueries.multerUploads.single('photos'),
  createPostRoute,
);
router.get('/:id/posts');

// routes for Like by user
router.post('/:id/like', auth, likePost);
export default router;
