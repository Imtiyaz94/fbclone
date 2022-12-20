import { Usertoken } from '../../models/index.js';

export const saveToken = async ({ accessToken, userId, expiryDate }) => {
  const token = await Usertoken.create({
    token: accessToken,
    userId: userId,
    expiryDate: expiryDate,
  });
  return token;
};
