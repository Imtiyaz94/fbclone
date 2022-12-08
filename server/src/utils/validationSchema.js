import Joi from 'joi';
import JoiPasswordComplexity from 'joi-password-complexity';

export const validateRegister = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
    email: Joi.string().email().required().label('Email'),
    password: JoiPasswordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

export const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
  });
  return schema.validate(data);
};

export default { validateRegister, validateLogin };
