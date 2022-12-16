import User from '../../models/User.js';

export const checkMail = async (email) => {
  const checkMail = await User.findOne({ email });
  console.log('checkMail', checkMail);

  return checkMail;
};
