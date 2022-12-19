import Jwt from 'jsonwebtoken';

export const validateToken = async (req, res) => {
  const token = req.header.authorization.split(' ')[1];
  if (!token) {
    return { error: true, message: 'Token is not valid' };
  }
  const decodedToken = Jwt.verify(token, process.env.ACCESS_TOKEN);
  const response = {
    error: false,
    data: { userId: decodedToken.userId, email: decodedToken.email },
  };
  return res.status(200).send(response);
};
