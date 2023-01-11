import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Post = () => {
  const userId = useParams();
  // console.log('userid', userId);
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = async () => {
    const user = await JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;
    // console.log(token);
    const formdata = new FormData();
    formdata.append('text', text);
    formdata.append('photos', img);
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/auth/create_post',
      data: formdata,
      headers: {
        Authorization: `${token}`,
        'content-type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log('token', res.headers);
        console.log('users data', res.data);
        // setData(res.data.posts);
        if (res.data) {
          swal('Post Created successfully', '', 'success');
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <div className='container '>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='row g-3'>
          <div className='col'>
            <textarea
              type='text'
              className='form-control'
              id='text'
              name='text'
              onChange={(e) => setText(e.target.value)}
              // aria-describedby='emailHelp'
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
              onChange={(e) => setImg(e.target.files[0])}
              required
            />
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
