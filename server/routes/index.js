import express from 'express';
import { createUserRoute, homeRoute, loginUserRoutes } from './lib/index.js';
import { validateToken } from '../src/utils/lib/auth/lib/validateToken.js';
const router = express.Router();

router.get('/', validateToken, homeRoute);
router.post('/register', createUserRoute);
router.post('/login', loginUserRoutes);
export default router;
