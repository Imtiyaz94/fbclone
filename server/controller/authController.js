import { validateLogin, validateRegister } from '../utils/validationSchema.js';
import generateAuthToken from '../utils/generateToken.js';

export const login = async (req, res) => {
  try {
    const { error, value } = validateLogin(req.body);
    console.log('value', value.email);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    // checking user is exist or not with same email
    const checkUser = await User.findOne({ email: value.email });
    // console.log(User, 'user model');
    console.log(checkUser, 'checkuser');
    if (!checkUser) {
      return res.status(401).json({ message: 'Invalid Username or Password' });
    }
    // hashing password from db then validating password
    const checkPassword = await bcrypt.compare(
      req.body.password,
      checkUser.password,
    );

    if (!checkPassword) {
      return res.status(401).json({ message: 'Invalid Username or Password' });
    }

    // if email and password is correct then generate token in db
    const { accessToken } = await generateAuthToken(checkUser);
    res.status(200).json({
      error: false,
      accessToken,

      message: 'Logged in successfully',
    });
    // const token = checkUser.generateAuthToken();
    // if (!token) {
    //   res.status(403).json('Invalid Token');
    // }
    // res.status(200).json({ data: token, message: 'Logged in Successfully' });
    // console.log(token, 'token');
  } catch (error) {
    res.status(500).json('Internal Server Error', error);
  }
};

export default {
  register,
  login,
};
