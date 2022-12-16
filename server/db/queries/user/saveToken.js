import { Usertoken } from '../../models/index.js';

export const saveToken = async (user) => {
  const token = await Usertoken.create({
    token: user.token,
    userId: user.userId,
  });
  return token;
};
