import { findByEmail } from '../../../../db/queries/index.js';
import { checkPassword, generateAuthToken } from './index.js';

export const authenticate = async (value) => {
  const { email, password } = value;
  // checking user is exist with same email
  const user = await findByEmail(email);
  if (!user) {
    return { error: true, message: 'Invalid Username or Password' };
  }

  // confirm password
  // console.log('userdb pass', user.password);
  // const user = await existedUser();
  const confPass = await checkPassword(password, user.password);
  if (!confPass) {
    return { error: true, message: 'Invalid Username or Password' };
  }

  // if email and password is correct then generate token in db
  const accessToken = await generateAuthToken(user);
  console.log('Access Token', accessToken);
  const response = {
    error: false,
    accessToken,
    message: 'Logged in successfully',
  };
  return response;
};
