import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Signin, Signup } from './pages/index';
// import { Layout } from 'antd';

// const { Header, Footer, Sider, Content } = Layout;

function App() {
  const isLogged = localStorage.getItem('access_token');
  return (
    <div>
      {/* <Layout>
        <Header style={{ background: '#f5f5f5' }}>
          <Headers />
        </Header>
        <Layout>
          <Sider className='sidebar' style={{ background: '#f5f5f5' }}>
            <Sidebar />
          </Sider>
          <Content className='main'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Signin />} />
              <Route path='/register' element={<Signup />} />
            </Routes>
          </Content>
        </Layout>
        <Footer>
          <Footers />
        </Footer>
      </Layout> */}

      <Routes>
        {/* {isLogged ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route path='/login' element={<Signin />} />
        )} */}
        {/* <Route path='/' element={isLogged ? <Home /> : <Signin />} /> */}
        {/* {isLogged ? (
            <Route path='/' element={<Home />} />
          ) : (
            <Route path='/login' element={<Signin />} />
          )} */}
        <Route
          path='/'
          element={!isLogged ? <Navigate to='/login' replace /> : <Home />}
        />
        <Route
          path='/login'
          element={isLogged ? <Navigate to='/' replace /> : <Signin />}
        />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
