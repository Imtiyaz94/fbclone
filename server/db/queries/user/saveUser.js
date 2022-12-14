import { User } from '../../models/index.js';
import { encrypt } from '../../../src/utils/lib/auth/encrypt.js';

const saveUser = async (value) => {
  const hashPassword = await encrypt(value.password);
  const newUser = await User.create({
    username: value.username,
    email: value.email,
    password: hashPassword,
    gender: value.gender,
  });
  return newUser;
};

export { saveUser };
