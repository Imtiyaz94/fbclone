import React, { useEffect } from 'react';
import { Headers, Sidebar, Card } from '../components/index';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='container-fluid p-2'>
        <Headers />
        <div className='d-flex justify-content-evenly mt-3 shadow-sm'>
          <Sidebar />
          <div className='main shadow-sm rounded'>
            
            <Card />
            {/* <List /> */}
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Home;
