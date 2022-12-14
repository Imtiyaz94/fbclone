import User from '../../models/User.js';

export const existedUser = async (value) => {
  const findUser = await User.findOne({ username: value.username });
  return findUser;
};
