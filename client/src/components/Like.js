import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import '../styles/like.css'

const Like = () => {
  return (
    <div>
      <button className='likeBtn' >
        <AiFillLike />
      </button>
    </div>
  );
}

export default Like