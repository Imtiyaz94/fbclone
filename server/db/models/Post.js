import mongoose, { Schema } from 'mongoose';

const PostSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
  },
  photos: {
    type: String,
  },
  createdAt: {
    type: Number,
    default: Date.now,
    // expires: 30 * 86400, // 30days
  },
});
const Post = mongoose.model('Post', PostSchema);
export default Post;
