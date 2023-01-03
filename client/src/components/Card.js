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

  const getData = () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.newToken.token;
    const headers = { Authorization: `${token}` };
    axios
      .get('http://localhost:8001/api/auth/home', {
        headers: headers,
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
      {Object.keys(data).forEach((item) => {
        // console.log('user info', data[item]);

        <div className='card w-50 h-100 shadow ' id='card'>
          <li key={item}></li>
          <div className='card-body'>
            <h5 className='card-title'>{data[item].userId.username}</h5>
            <p className='card-text'>{data[item].text}</p>
            <img
              src={data[item].photos[0]}
              className='card-img-top'
              alt='...'
            />
          </div>
          <div className='card-footer'>
            <small className='text-muted'>{data[item].likeCount}</small>
            <button>Like</button>
          </div>

        </div>;
      })}
      <h3>hello</h3>
    </>
  );
};

export default Card;
