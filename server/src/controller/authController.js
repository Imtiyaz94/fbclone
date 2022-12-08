import { User, validate } from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      password: hash,
      email: req.body.email,
    });
    await newUser.save();
    res.status(201).json({ message: 'User Created' });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    res.send(401).json({ message: 'Error Login' });
  }
};

export default {
  register,
  login,
};
