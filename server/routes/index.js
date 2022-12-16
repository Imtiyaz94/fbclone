import express from 'express';
import { createUserRoute, loginUserRoutes } from './lib/index.js';
const router = express.Router();

router.post('/register', createUserRoute);
router.post('/login', loginUserRoutes);

export default router;
