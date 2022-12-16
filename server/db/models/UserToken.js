import mongoose, { Schema } from 'mongoose';

const UserTokenSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  token: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 86400, // 30days
  },
});
const UserToken = mongoose.model('UserToken', UserTokenSchema);
export default UserToken;
