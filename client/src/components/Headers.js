import React from 'react';
import Post from './Post';
import { useNavigate } from 'react-router-dom';

const Headers = () => {
  const navigate = useNavigate();
  const logOut = () => {
    const getToken = localStorage.getItem('access_token');
    const token = localStorage.removeItem('access_token', token);
    console.log('token', token, getToken);
    navigate('/login');
  };
  return (
    <div className='header rounded d-flex'>
      <h2>FB Clone</h2>
      <Post />
      <form>
        <button className='btn btn-danger' onClick={logOut}>
          Logout
        </button>
      </form>
    </div>
  );
};

export default Headers;
