import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Card = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.newToken.token;
    const headers = { Authorization: `${token}` };
    const users = axios.get('http://localhost:8001/api/auth/home', {
      headers: headers,
    });
    setData(users.data);
    console.log('users data', users);
  }, []);
  return (
    <div>
      {data &&
        data.map((info) => {
          console.log('user info', info);
          return (
            <div className='card w-50 h-100 shadow ' id='card'>
              <div className='card-body'>
                <h5 className='card-title'>{info.username}</h5>
                <p className='card-text'>This is a first post.</p>
                <img src='...' className='card-img-top' alt='...' />
              </div>
              <div className='card-footer'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
