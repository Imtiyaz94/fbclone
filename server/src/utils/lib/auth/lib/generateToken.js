import jwt from 'jsonwebtoken';
import { saveToken } from '../../../../../db/queries/user/index.js';

export const generateAuthToken = async (checkUser) => {
  const { _id } = checkUser;
  const userId = checkUser;
  // console.log('payload', _id);
  const accessToken = await jwt.sign({ _id }, process.env.PRIVATE_KEY);
  const expiredAt = new Date();
  const time = expiredAt.setSeconds(expiredAt.getSeconds() + 1800);
  const newToken = await saveToken({
    accessToken,
    userId,
    expiryDate: time,
  });
  return { error: false, message: 'token is created', newToken };
};

export default generateAuthToken;
// "quotes":[1, 'single', {'avoidEscape':true}],
