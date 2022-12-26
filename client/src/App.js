import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Signin, Signup } from './pages/index';
import { Header } from './components/index';
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
