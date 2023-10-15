import React from 'react';
import { useState } from 'react';

function Todo({addHandler}) {
    const [todo, setTodo] = useState('');

    return (
        <div>
            <input value={todo} onChange={ (event) => {
                setTodo(event.target.value);
            }} type="text" />
            <button onClick={ (event) => {
                setTodo('');
                addHandler(todo);
            }}>Add</button>
        </div>
    );
}

export default Todo;
