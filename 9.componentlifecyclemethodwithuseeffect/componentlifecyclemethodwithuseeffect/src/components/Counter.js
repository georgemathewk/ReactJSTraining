import React, { useEffect, useState } from 'react'

function Counter() {
  
  const [value, setValue] = useState(0);


  /**
   * useEffect hook that runs when the component mounts.
   * @returns {void}
   */
  useEffect(() => {
    console.log("Counter.js useEffect: Mounting ... " +  value);    
  },[]);

  /**
   * useEffect hook that runs when the component unmounts.
   * @returns {void}
   */
  useEffect(() => {    
    return () => {
      console.log("Counter.js useEffect cleanup: " + value);
    }
  },[]);

  /**
   * useEffect hook that runs when the component updates.
   * @returns {void}
   */
  useEffect(() => {    
    console.log("Counter.js Updates ...: " + value);
  },[value]);


  return (
    <div>
      <button onClick={() => setValue(value+1)}>+</button>
      Counter: { value }
    </div>
  )
}

export default Counter
