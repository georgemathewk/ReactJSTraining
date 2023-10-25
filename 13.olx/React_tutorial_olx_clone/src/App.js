import React from 'react';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />                 
        <Route path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
