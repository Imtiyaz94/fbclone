import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Signin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8001/api/auth/login',
        user,
      );

      console.log('resData', res.data.message);
      localStorage.setItem('access_token', JSON.stringify(res.data.token));

      setError(res.data.message);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        // alert('User logged in successfully');
        navigate('/');
        swal('User logged in successfully', '', 'success');
      } else {
        // alert('Invalid credentials or User does not exist');
        swal('Invalid credentials or User does not exist', '', 'error');
      }
      // if (res.data.token) {
      //   navigate('/');
      // }
    } catch (error) {
      console.log(error, 'error');
    }
    // try {
    //   const response = await fetch('http://localhost:8001/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: user.email,
    //       password: user.password,
    //     }),
    //   });

    //   const data = await response.json();

    //   console.log('data', data);

    //   if (data.token) {
    //     localStorage.setItem('token', data.token);
    //     // alert('User logged in successfully');
    //     navigate('/');
    //     swal('User logged in successfully', '', 'success');
    //   } else {
    //     // alert('Invalid credentials or User does not exist');
    //     swal('Invalid credentials or User does not exist', '', 'error');
    //   }
    // } catch (error) {
    //   console.log('error', error);
    // }
  };

  // useEffect(() => {
  //   const submit = async () => {
  //     try {
  //       const res = await axios.post(
  //         'http://localhost:8001/api/auth/login',
  //         user,
  //       );

  //       console.log('resData', res.data.message);
  //       localStorage.setItem('access_token', JSON.stringify(res.data.token));

  //       setError(res.data.message);
  //       if (res.data.token) {
  //         localStorage.setItem('token', res.data.token);
  //         // alert('User logged in successfully');
  //         navigate('/');
  //         swal('User logged in successfully', '', 'success');
  //       } else {
  //         // alert('Invalid credentials or User does not exist');
  //         swal('Invalid credentials or User does not exist', '', 'error');
  //       }
  //       // if (res.data.token) {
  //       //   navigate('/');
  //       // }
  //     } catch (error) {
  //       console.log(error, 'error');
  //     }
  //   };
  //   submit();
  // });

  return (
    <div className='container mt-5 p-3 shadow-sm ' id='signup-form'>
      <div className='form-heading h2 text-center'>Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          {/* <label htmlFor='email' className='form-label'>
            Email address
          </label> */}
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
          {/* <label htmlFor='password' className='form-label'>
            Password
          </label> */}
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
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
