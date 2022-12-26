import {
  existedUser,
  saveUser,
  findByEmail,
  saveToken,
  findAll,
  findById,
  multerUploads,
  findUser,
  findAndUpdate,
  
} from './user/index.js';

import { savePost, saveLike } from './post/index.js';

// exporting our module files
export {
  existedUser,
  saveUser,
  findByEmail,
  saveToken,
  findAll,
  findById,
  multerUploads,
  savePost,
  findUser,
  findAndUpdate,
  saveLike,
};
