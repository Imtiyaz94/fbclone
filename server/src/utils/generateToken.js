import jwt from 'jsonwebtoken';
import UserToken from '../models/UserToken.js';

export const generateAuthToken = async (user) => {
  try {
    const payload = { _id: user._id };
    const accessToken = jwt.sign(payload, process.env.PRIVATE_KEY, {
      expiresIn: '14m',
    });
    const refreshToken = jwt.sign(payload, process.env.PRIVATE_KEY, {
      expiresIn: '30d',
    });

    const userToken = await UserToken.findOne({ userId: user._id });
    if (userToken) {
      await userToken.remove();
    }
    await new UserToken({ userId: user._id, token: refreshToken }).save();
    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default generateAuthToken;
// const token = jwt.sign({ _id: this._id }, process.env.PRIVATE_KEY, {
//   expiresIn: '7d',
// });
// return token;
