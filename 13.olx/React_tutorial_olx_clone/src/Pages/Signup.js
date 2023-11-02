import React from 'react';

import Signup from '../Components/Signup/Signup';

function SignupPage(props) {
  return (
    <div>
      <Signup firebaseApp={props.firebaseApp}/>
    </div>
  );
}

export default SignupPage;
