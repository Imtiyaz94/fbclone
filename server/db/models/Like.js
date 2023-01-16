import mongoose, { Schema } from 'mongoose';

const LikeSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  liked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Number,
    default: Date.now,
    // expires: 30 * 86400, // 30days
  },
});
const Like = mongoose.model('Like', LikeSchema);
export default Like;
