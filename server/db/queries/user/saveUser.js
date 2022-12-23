import { User } from '../../models/index.js';
import { encrypt } from '../../../src/utils/lib/auth/lib/index.js';

const saveUser = async (value, images) => {
  const hashPassword = await encrypt(value.password);
  const newUser = await User.create({
    username: value.username,
    email: value.email,
    password: hashPassword,
    gender: value.gender,
    profilePic: images,
  });
  return newUser;
};

export { saveUser };
