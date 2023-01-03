import React from 'react';
import { Headers, Sidebar, Card } from '../components/index';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-fluid p-2'>
      <Headers />
      <div className='d-flex justify-content-evenly mt-3 shadow-sm'>
        <Sidebar />
        <div className='main shadow-sm rounded'>
          <Card />
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Home;
