import express from 'express';
import {
  createPostRoute,
  createUserRoute,
  homeRoute,
  likePost,
  loginUserRoutes,
} from './lib/index.js';
import path from 'path';

import { auth } from '../middelwares/auth.js';
// import { multerUploads } from '../src/utils/lib/auth/index.js';
import multer from 'multer';
import { multerUploads } from '../db/queries/index.js';

const router = express.Router();

// User auth
router.get('/home', auth, homeRoute);
router.post('/register', multerUploads.single('profilePic'), createUserRoute);
router.post('/login', loginUserRoutes);

// routes for Post by user
router.post(
  '/:id/create_post',
  auth,
  multerUploads.single('photos'),
  createPostRoute,
);
router.get('/:id/posts');

// routes for Like by user
router.post('/:id/like', auth, likePost);
export default router;
