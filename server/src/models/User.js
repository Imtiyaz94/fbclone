import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Joi from 'joi';
import JoiPasswordComplexity from 'joi-password-complexity';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);
UserSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.PRIVATE_KEY, {
    expiresIn: '7d',
  });
  return token;
};
export const User = mongoose.model('User', UserSchema);

export const validate = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
    email: Joi.string().email().required().label('Email'),
    username: JoiPasswordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

export default { User, validate };
