import Joi from 'joi';
import { errorHandler } from '../../src/utils/lib/errors/errorHandling.js';
import { createPosts } from '../../src/app/posts/index.js';

const schema = Joi.object({
  text: Joi.string().required().label('Post Section'),
  photos: Joi.any().label('Only .png, .jpg and .jpeg format are allowed'),
});

export const createPostRoute = async (req, res, next) => {
  try {
    const { error, value } = schema.validate(req.body);
    const images = await req.file.filename;
    // console.log('images', images);
    if (error) {
      const response = errorHandler(error.message);
      return res.status(400).send(response);
    }
    const userId = await req.params.id;
    // console.log('req id', req.params.id);

    const createPost = await createPosts({ value, userId, images });
    // const response = {
    //   error: false,
    //   message: 'Post Created Successfully',
    //   createPost,
    // };
    return res.status(200).send(createPost);
    // next();
  } catch (error) {
    console.log(error, 'error');
    const response = errorHandler('Bad Request');
    return res.status(400).send(response);
  }
};
