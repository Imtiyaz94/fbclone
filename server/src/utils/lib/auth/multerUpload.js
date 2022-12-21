import multer from 'multer';
import { storage } from '../../../../db/queries/index.js';

export const multerUploads = async () => {
  const upload = await multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png'
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format are allowed'));
      }
    },
  }).single('photos');
  return upload;
};
