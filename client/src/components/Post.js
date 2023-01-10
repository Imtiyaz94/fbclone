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

  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;
    const formdata = new FormData();
    formdata.append('text', text);
    formdata.append('photos', img);
    // const headers = {
    //   Authorization: `${token}`,
    //   'Content-Type': 'application/json',
    // };
    axios
      .post('http://localhost:8000/api/auth/create_post', {
        data: { text: text, photos: img },
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // setData(res.data.posts);
        console.log('token', res.headers);
        console.log('users data', res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log('resData');
  //   // try {
  //   const userToken = await localStorage.getItem('access_token');
  //   console.log('user token', userToken);
  //   const user = await JSON.parse(userToken.token);
  //   const url = `http://localhost:8000/api/auth/create_post`;
  //   const body = {
  //     text: text,
  //     photos: img,
  //   };
  //   const header = {
  //     Authorization: `${user}`,
  //   };
  //   await axios
  //     .post(url, body, { headers: header })
  //     .then((res) => {
  //       console.log('data', res.headers);
  //       if (res.data) {
  //         console.log('data', res.data);
  //         localStorage.setItem('access_token', JSON.stringify(res.data));
  //         navigate('/');
  //         swal('Post Created Successfully', '', 'success');
  //       } else {
  //         swal('Invalid credentials or User does not exist', '', 'error');
  //       }
  //       navigate('/');
  //       swal('Post Created Successfully', '', 'success');
  //     })
  //     .catch((error) => console.log(error));
  // const token = localStorage.setItem(
  //   'access_token',
  //   JSON.stringify(res.data.token),
  // );
  // setToken(token);
  // setError(res.data.message);
  // if (res.data) {
  //   console.log('data', res.data);
  //   localStorage.setItem('access_token', JSON.stringify(res.data));
  //   navigate('/');
  //   swal('Post Created Successfully', '', 'success');
  // } else {
  //   swal('Invalid credentials or User does not exist', '', 'error');
  // }
  // } catch (error) {
  //   console.log('error', error);
  // }
  // }
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
              onChange={(e) => setImg(e.target.files)}
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
