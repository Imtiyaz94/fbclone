import { Usertoken } from '../../models/index.js';

export const saveToken = async ({ accessToken, userId }) => {
  const token = await Usertoken.create({
    token: accessToken,
    userId: userId,
  });
  return token;
};
