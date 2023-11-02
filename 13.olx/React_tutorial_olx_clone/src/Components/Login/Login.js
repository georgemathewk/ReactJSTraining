import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../LoginProvider';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const loginContext = useContext(LoginContext);


  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login process
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        loginContext.handleLogin(user);
        console.log(user);        
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });    
  };

  const handleLogout = () => {
    // Perform logout process
    loginContext.handleLogout();
  };


  return (
    <div>
      {loginContext.isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="loginParentDiv">
          <img width="200px" height="200px" src={Logo}></img>
          <form onSubmit={handleLogin}>
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="fname"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="lname"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button>Login</button>
          </form>
          <a>Signup</a>
        </div>
      )}
    </div>
  );
}

export default Login;
