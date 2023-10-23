import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Profile from './components/Profile';

import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  
  return (    
      
      <div className="App">
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>        
        <button onClick={ ()=> {
          navigate('/profile');
        }}>Profile</button>
        
        <Routes>
          <Route path="/" element={  <h1>Home</h1> }  />
          <Route path="/about" element={<h1><About /></h1>} />
          <Route path="/profile" element={<h1><Profile /></h1>} />
        </Routes>
      </div>

  );
}


export default App;
