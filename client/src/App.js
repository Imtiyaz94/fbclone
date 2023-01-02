import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Signin, Signup } from './pages/index';
// import { Layout } from 'antd';

// const { Header, Footer, Sider, Content } = Layout;

function App() {
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
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
