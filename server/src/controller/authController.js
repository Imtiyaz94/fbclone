import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { validateLogin, validateRegister } from '../utils/validationSchema.js';
import generateAuthToken from '../utils/generateToken.js';

export const register = async (req, res) => {
  try {
    const { error } = validateRegister(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    // checking username is already exist
    const existedUser = await User.findOne({ username: req.body.username });
    if (!existedUser) {
      const existedEmail = await User.findOne({ email: req.body.email });

      if (!existedEmail) {
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hash = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash,
        });
        await newUser.save();
        res.status(201).json({ message: 'User Created' });
      }
      res.status(409).json({ message: 'User with same Email already exist!' });
    }
    res
      .status(409)
      .json({ message: 'Username already exist, Try different username' });
  } catch (error) {
    res.status(500).json('Internal Server Error');
  }
};

export const login = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    console.log(User, 'user model');
    // checking user is exist or not with same email
    const checkUser = await User.findOne({ email: req.body.email });
    console.log(checkUser, 'checkuser');

    // hashing password from db then validating password
    const checkPassword = await bcrypt.compare(
      req.body.password,
      checkUser.password,
    );

    if (!checkPassword || !checkUser) {
      return res.status(401).json({ message: 'Invalid Username or Password' });
    }

    // if email and password is correct then generate token in db
    const { accessToken, refreshToken } = await generateAuthToken(checkUser);
    res.status(200).json({
      error: false,
      accessToken,
      refreshToken,
      message: 'Logged in successfully',
    });
    // const token = checkUser.generateAuthToken();
    // if (!token) {
    //   res.status(403).json('Invalid Token');
    // }
    // res.status(200).json({ data: token, message: 'Logged in Successfully' });
    // console.log(token, 'token');
  } catch (error) {
    res.status(500).json('Internal Server Error', error);
  }
};

export default {
  register,
  login,
};
