import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false); 

  return (
    <div className="App">
      <button onClick={() => {
        setShow(!show)
      }}>Show / Hide</button>

      {
        (show?<Counter />:null)
      }
      
    </div>
  );
}

export default App;
