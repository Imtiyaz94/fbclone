import React from 'react';
import { Headers, Sidebar, Card } from '../components/index';

const Home = () => {
  return (
    <div className='container-fluid p-2'>
      <Headers />
      <div className='d-flex justify-content-evenly mt-3 shadow-sm'>
        <Sidebar />
        <div className='main shadow-sm rounded'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />  
        </div>
      </div>
    </div>
  );
};

export default Home;
