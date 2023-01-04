import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Card = () => {
  const [data, setData] = useState({});
  // console.log('type', typeof data);
  // const posts = Object.entries(data).reduce((acc, curr) => {
  //   const [key, val] = curr;
  //   acc.push({
  //     name: key,
  //     ...val,
  //   });
  //   return acc;
  // }, []);
  // console.log('posts', posts);

  const getData = async () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.newToken.token;
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
        // console.log('users data', res.data.posts);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {Object.values(data).forEach((item) => {
        console.log('user info', item);

        <div className='card w-50 h-100 shadow ' id='card'>
          <li key={item._id}></li>
          <div className='card-body'>
            <h5 className='card-title'>{item.userId.username}</h5>
            <p className='card-text'>{item.text}</p>
            <img src={item.photos[0]} className='card-img-top' alt='...' />
          </div>
          <div className='card-footer'>
            <small className='text-muted'>{item.likeCount}</small>
            <button>Like</button>
          </div>
        </div>;
      })}
      <h3>hello</h3>
    </>
  );
};

export default Card;
