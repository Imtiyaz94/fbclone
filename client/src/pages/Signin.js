import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, redirect } from 'react-router-dom';
import swal from 'sweetalert';

const Signin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
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
      const res = await axios.post(
        'http://localhost:8000/api/auth/login',
        user,
      );
      // const token = localStorage.setItem(
      //   'access_token',
      //   JSON.stringify(res.data.token),
      // );
      // setToken(token);
      setError(res.data.message);
      if (res.data.token) {
        localStorage.setItem('access_token', JSON.stringify(res.data.token));
        swal('User logged in successfully', '', 'success');
        navigate('/');
      } else {
        swal('Invalid credentials or User does not exist', '', 'error');
      }
      // i
    } catch (error) {
      console.log(error, 'error');
    }
  }

  return (
    <div className='container mt-5 p-3 shadow-sm ' id='signup-form'>
      <div className='form-heading h2 text-center'>Sign In</div>
      <form>
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
        <button
          type='submit'
          onClick={handleSubmit}
          className='btn btn-primary'
        >
          Login
        </button>
        <p>
          Don't have account{' '}
          <Link to='/register' style={{ textDecoration: 'none' }}>
            Register
          </Link>{' '}
          here
        </p>
      </form>
    </div>
  );
};

export default Signin;
