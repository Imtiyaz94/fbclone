import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card.css';
import Like from './Like';
const Card = () => {
  const [data, setData] = useState({});
  const values = Object.keys(data).map((key) => data[key]);
  const getData = () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;
    // const headers = {
    //   Authorization: `${token}`,
    //   'Content-Type': 'application/json',
    // };
    axios
      .get('http://localhost:8000/api/auth/posts', {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setData(res.data.posts);
        // console.log('users data', res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {values ? (
        values &&
        values.map((item) => {
          console.log('item', item);
          return (
            <div className='card w-50 h-100 shadow ' id='card' key={item._id}>
              <div className='card-body'>
                <h5 className='card-title'>{item.userId.username}</h5>
                <p className='card-text'>{item.text}</p>
                <img src={item.photos} className='card-img-top' alt='...' />
              </div>
              <div className='card-footer d-flex'>
                <small className='text-muted '>{item.likeCount}</small>
                <Like />
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Card;
