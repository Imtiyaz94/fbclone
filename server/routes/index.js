import express from 'express';
import { createUserRoute } from './lib/index.js';
const router = express.Router();

router.post('/register', createUserRoute);
router.post('/login');

export default router;
