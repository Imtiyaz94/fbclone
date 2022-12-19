import jwt from 'jsonwebtoken';
import { saveToken } from '../../../../../db/queries/user/index.js';

export const generateAuthToken = async (checkUser) => {
  const { _id } = checkUser;
  const userId = checkUser;
  console.log('payload', _id);
  const accessToken = await jwt.sign({ _id }, process.env.PRIVATE_KEY, {
    expiresIn: '15m',
  });
  // const expiredAt = new Date();
  // expiredAt.setSeconds(expiredAt.getSeconds() + 3600);
  const newToken = await saveToken({
    accessToken,
    userId,
  });
  return { error: false, message: 'token is created', newToken };
};

export default generateAuthToken;
// "quotes":[1, 'single', {'avoidEscape':true}],
