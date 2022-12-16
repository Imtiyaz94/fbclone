import { checkMail } from '../../../../db/queries/index.js';
import { checkPassword, generateAuthToken } from './index.js';

export const authenticate = async (value) => {
  const { email, password } = value;
  // checking user is exist with same email
  const confMail = await checkMail(email);
  if (!confMail) {
    return res.status(401).send({ message: 'Invalid Username or Password' });
  }
  // confirm password
  console.log('userdb pass', confMail.password);
  // const user = await existedUser();
  const confPass = await checkPassword(password, confMail.password);
  if (!confPass) {
    return res.status(401).send({ message: 'Invalid Username or Password' });
  }

  // if email and password is correct then generate token in db
  const accessToken = await generateAuthToken(confMail);
  console.log('Access Token', accessToken);
  const response = {
    error: false,
    accessToken,
    message: 'Logged in successfully',
  };
  return response;
};
