import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import '../styles/like.css';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import convertToBase64 from '../utils/index';

const Like = () => {
  const postId = useParams();
  const [liked, setLiked] = useState(false);

  const handleSubmit = async () => {
    const user = await JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;
    // console.log(token);
    const formdata = new FormData();
    axios({
      method: 'POST',
      url: `http://localhost:8000/api/auth/${postId}/like`,
      data: formdata,
      headers: {
        Authorization: `${token}`,
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        // console.log('token', res.headers);
        console.log('users data');

        swal({
          title: 'Post liked',
          // text: 'Redirecting to login page...',
          content: '',
          icon: 'success',
        });
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  return (
    <div>
      <button className='likeBtn' onClick={handleSubmit}>
        <AiFillLike />
      </button>
    </div>
  );
};

export default Like;
