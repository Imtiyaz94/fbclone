import multer from 'multer';
import path from 'path';

export const storage = async () => {
  const storage = multer.diskStorage({
    destination: '../../../uploads/user',
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname),
      );
    },
  });
  return storage;
};
