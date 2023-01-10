import React, { useState } from 'react';
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  // const [token, setToken] = useState('');
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
  });
  const [img, setImg] = useState();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const handleInput = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('resData');
    try {
      const formdata = new FormData();
      formdata.append('username', user.username);
      formdata.append('email', user.email);
      formdata.append('password', user.password);
      formdata.append('gender', user.gender);
      formdata.append('profilePic', img);

      await axios({
        method: 'POST',
        url: 'http://localhost:8000/api/auth/register',
        data: formdata,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => console.log('response of signup', res))
        .catch((err) => console.log('error', err));
      // const token = localStorage.setItem(
      //   'access_token',
      //   JSON.stringify(res.data.token),
      // );
      // setToken(token);
      // setError(res.data.message);
      // if (res.data) {
      //   // localStorage.setItem('access_token', JSON.stringify(res.data.token));
      //   navigate('/');
      //   swal('User Created successfully', '', 'success');
      // } else {
      //   swal('Invalid credentials or User Already exist', '', 'error');
      // }
      //
    } catch (error) {
      console.log(error, 'error');
    }
  }

  return (
    <div className='container mt-5 p-3 shadow-sm ' id='signup-form'>
      <div className='form-heading h2 text-center'>Sign Up</div>
      <form encType='multipart/form-data'>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            name='username'
            value={user.username}
            className='form-control'
            id='username'
            onChange={handleInput}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={user.email}
            aria-describedby='emailHelp'
            onChange={handleInput}
            required
          />
          <div id='emailHelp' className='form-text'>
            {error}
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='gender' className='form-label'>
            Gender
          </label>
          <input
            type='text'
            name='gender'
            value={user.gender}
            className='form-control'
            id='gender'
            onChange={handleInput}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={user.password}
            className='form-control'
            id='password'
            onChange={handleInput}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='profilePic' className='form-label'>
            Profile Image
          </label>
          <input
            type='file'
            name='profilePic'
            // value={img}
            className='form-control'
            id='profilePic'
            onChange={(e) => setImg(e.target.files[0])}
            required
          />
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='btn btn-primary'
        >
          Register
        </button>
        <p>
          Already have account{' '}
          <Link to='/login' style={{ textDecoration: 'none' }}>
            Login
          </Link>{' '}
          here
        </p>
      </form>
    </div>
  );
};

export default Signup;
