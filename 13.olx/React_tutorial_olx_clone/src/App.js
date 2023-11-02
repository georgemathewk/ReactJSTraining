import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { LoginProvider } from './LoginProvider';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import { PostProvider } from './PostProvider';

// Create a Firebase context
const FirebaseContext = createContext(null);

function App() { 

  return (
    <div>
          <LoginProvider>
          <PostProvider>  
          <Router>
            
              <Route exact path="/" component={Home} />                 
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/create" component={Create} />            
              <Route path="/view" component={ViewPost} />
            
          </Router>
          </PostProvider>
          </LoginProvider>
    </div>
  );
}

export default App;
export { FirebaseContext}
