import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
import { createUser } from '../../src/app/users/index.js';
import { errorHandler } from '../../src/utils/lib/errors/errorHandling.js';

const joiPassword = Joi.extend(joiPasswordExtendCore);

const schema = Joi.object({
  username: Joi.string().min(6).max(12).required().label('Username'),
  email: Joi.string().email().required().label('Email'),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .messages({
      'password.minOfUppercase':
        '{#label} should contain at least {#min} uppercase character',
      'password.minOfSpecialCharacters':
        '{#label} should contain at least {#min} special character',
      'password.minOfLowercase':
        '{#label} should contain at least {#min} lowercase character',
      'password.minOfNumeric':
        '{#label} should contain at least {#min} numeric character',
      'password.noWhiteSpaces': '{#label} should not contain white spaces',
    }),
  confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .options({ messages: { 'any.only': '{{#label}} does not match' } }),
  gender: Joi.string().trim(true),
});

export const createUserRoute = async (req, res) => {
  try {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.message });
    }
    const createUsers = await createUser(value);
    if (createUsers.error) {
      const response = errorHandler('Data Not Sent');
      return res.status(401).send(response);
    }
    const response = {
      error: false,
      createUsers,
    };
    return res.status(200).send(response);
  } catch (error) {
    console.log('error', error);
    const response = errorHandler('Bad Request');
    res.status(500).send(response);
  }
};
