import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);
    const clickHandler = () => {
        setCount(count + 1);
    }
        
    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
            <h1>{count}</h1>
        </div>
    );
}

export default Counter;
