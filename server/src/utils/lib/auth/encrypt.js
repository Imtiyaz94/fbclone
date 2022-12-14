import bcrypt from 'bcryptjs';

export const encrypt = async (value) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hash = await bcrypt.hash(value.password, salt);
  return hash;
};
