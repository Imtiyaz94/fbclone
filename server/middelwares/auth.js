import { findById } from '../db/queries/index.js';
import { verifyExpirySession } from '../src/utils/lib/auth/index.js';

export const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send({ error: true, message: 'Token is not valid' });
  }
  const dbToken = await findById(token);
  if (!dbToken) {
    return res.status(403).send({ error: true, message: 'Token is not in DB' });
  }
  //   console.log('expiry date', dbToken.expiryDate);
  const expireSession = await verifyExpirySession(dbToken.expiryDate);
  if (expireSession) {
    return res.status(403).send({ message: 'Token is Expired' });
  }
  req.user = { userId: dbToken.userId };
  return next();
};
