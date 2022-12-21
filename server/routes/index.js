import express from 'express';
import {
  createPostRoute,
  createUserRoute,
  homeRoute,
  loginUserRoutes,
} from './lib/index.js';

import { auth } from '../middelwares/auth.js';

const router = express.Router();

// User auth
router.get('/home', auth, homeRoute);
router.post('/register', createUserRoute);
router.post('/login', loginUserRoutes);

// routes for Post by user
router.post('/:id/create_post', createPostRoute);
router.get('/:id/posts');


export default router;
