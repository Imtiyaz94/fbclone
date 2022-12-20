import express from 'express';
import { createUserRoute, homeRoute, loginUserRoutes } from './lib/index.js';
import { auth } from '../middelwares/auth.js';
const router = express.Router();

router.get('/home', auth, homeRoute);
router.post('/register', createUserRoute);
router.post('/login', loginUserRoutes);
export default router;
