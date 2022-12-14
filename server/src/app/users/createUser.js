import { saveUser, existedUser } from '../../../db/queries/index.js';

export const createUser = async (value) => {
  const existUser = await existedUser(value.username);
  if (existUser) {
    return { error: true, message: 'User already exists' };
  }
  const newUser = await saveUser({
    ...value,
  });
  return { error: false, message: 'User Created Successfully', newUser };
};
