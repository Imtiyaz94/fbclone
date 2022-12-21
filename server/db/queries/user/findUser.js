import { User } from '../../models/index.js';

export const findUser = async (id) => {
  const findUser = await User.findOne({ id });
  console.log('checkMail', findUser);

  return findUser;
};
