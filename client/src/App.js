import './App.css';
import Navbar from './components/nav';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './components/authentication/login/login';
import Register from './components/authentication/register/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
