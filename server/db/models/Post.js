import mongoose, { Schema } from 'mongoose';
import multer from 'multer';
import path from 'path';
const PHOTO_PATH = path.join('../../uploads/post');

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

// multer config for uploading images
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..' + PHOTO_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

PostSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  'photos',
);
// now define where file to be save
PostSchema.statics.postImage = PHOTO_PATH;

const Post = mongoose.model('Post', PostSchema);
export default Post;
