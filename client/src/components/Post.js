import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Post = () => {
  const userId = useParams();
  console.log('userid', userId);
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('resData');
    try {
      const res = await axios
        .post
        // `http://localhost:8000/api/auth/${id}/create_post`,
        ();

      // const token = localStorage.setItem(
      //   'access_token',
      //   JSON.stringify(res.data.token),
      // );
      // setToken(token);
      // setError(res.data.message);
      if (res.data.token) {
        localStorage.setItem('access_token', JSON.stringify(res.data.token));
        navigate('/');
        swal('Post Created Successfully', '', 'success');
      } else {
        swal('Invalid credentials or User does not exist', '', 'error');
      }
      // i
    } catch (error) {
      console.log(error, 'error');
    }
  }
  return (
    <div className='container'>
      <form>
        <div className='row g-3'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              id='text'
              name='text'
              onChange={(e) => setText(e.target.value)}
              aria-describedby='emailHelp'
              required
            />
          </div>
          <div className='col'>
            <input
              type='file'
              name='file'
              // value={user.password}
              className='form-control'
              id='file'
              onChange={(e) => setImg(e.target.files)}
              required
            />
          </div>
        </div>
        ;
        <button
          type='submit'
          // onClick={handleSubmit}
          className='btn btn-primary'
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
