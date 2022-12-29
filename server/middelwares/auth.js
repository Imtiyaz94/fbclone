import UserQueries from '../db/queries/user/index.js';
import auths from '../src/utils/lib/auth/lib/index.js';
import { errorHandler } from '../src/utils/lib/errors/errorHandling.js';
import { Usertoken } from '../db/models/index.js';

export const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send({ error: true, message: 'Token not found' });
  }
  const dbToken = await Usertoken.findOne({ token });
  if (!dbToken) {
    return res
      .status(403)
      .send({ error: true, message: 'Token not found in DB' });
  }
  console.log('expiry date', dbToken);
  const expireSession = await auths.verifyExpirySession(dbToken.expiryDate);
  console.log('expire token session', expireSession);
  if (expireSession) {
    const response = errorHandler('Token is Expired');
    return res.status(403).send(response);
  }

  req.user = { userId: dbToken.userId };
  return next();
};
