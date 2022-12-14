import { saveUser, existedUser } from '../../../db/queries/index.js';

export const createUser = async (value) => {
  const existUser = await existedUser(value.username);
  if (existUser) {
    return { message: 'User already exists' };
  }
  const newUser = await saveUser({
    ...value,
  });
  return { message: 'User Created Successfully', newUser };
};
