import {
  saveUser,
  existedUser,
  findByEmail,
} from '../../../db/queries/index.js';

export const createUser = async (value) => {
  const existUser = await existedUser(value.username);
  if (existUser) {
    return { error: true, message: 'User already exists' };
  }
  const checkedMail = await findByEmail(value.email);
  if (checkedMail) {
    return { error: true, message: 'Mail already exists' };
  }
  const newUser = await saveUser({
    ...value,
  });
  const response = {
    error: false,
    newUser,
  };
  return response;
};
