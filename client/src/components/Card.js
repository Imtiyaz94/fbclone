import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card.css';
import Like from './Like';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const values = Object.keys(data).map((key) => data[key]);
  console.log('values', values);
  const getData = () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;

    axios
      .get('http://localhost:8000/api/auth/posts', {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err.response.data.error === true) {
          localStorage.removeItem('access_token');
          swal({
            title: 'Token Expired',
            text: 'Redirecting to login page...',
            content: '',
            icon: 'success',
          }).then(function () {
            window.location.reload();
          });
          navigate('/login');
        }
      });
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
                <h4 className='card-title'>{item.userId.username}</h4>
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
