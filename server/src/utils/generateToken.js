import jwt from 'jsonwebtoken';
import UserToken from '../models/UserToken.js';

export const generateAuthToken = async (user) => {
  try {
    const payload = { _id: user._id };
    const accessToken = jwt.sign(payload, process.env.PRIVATE_KEY, {
      expiresIn: '15m',
    });
    // const refreshToken = jwt.sign(payload, process.env.PRIVATE_KEY, {
    //   expiresIn: '60d',
    // });

    const userToken = await UserToken.findOne({ userId: user._id });
    if (userToken) {
      await userToken.remove();
    }
    await new UserToken({ userId: user._id }).save();
    return Promise.resolve({ accessToken });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default generateAuthToken;
