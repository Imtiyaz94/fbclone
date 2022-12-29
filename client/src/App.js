import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Signin, Signup } from './pages/index';
import { Headers, Sidebar, Footers } from './components/index';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className='container-fluid'>
      <Layout>
        <Header>
          <Headers />
        </Header>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>
            <Home />
          </Content>
        </Layout>
        <Footer>
          <Footers />
        </Footer>
      </Layout>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
