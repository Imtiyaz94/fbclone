import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().required().label('Password'),
});
return schema.validate(data);

export const loginUserRoutes = async () => {};
