import { findAll } from '../../db/queries/user/findAll.js';

export const homeRoute = async (req, res, next) => {
  const users = await findAll();
  const { ...user } = users;
  //   console.log(users);
  if (users) {
    return res.status(200).send({ ...user });
  }
  next();
};
