import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <button onClick={handleClick} className="btn btn-primary">Click me</button>
      <div>{counter}</div>      
    </div>
  );
}

export default App;
