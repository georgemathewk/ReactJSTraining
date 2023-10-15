import React from 'react';

function Todos( {todos, removeHandler}) {
    return (
        <div>
            <h1>Todos</h1>

            {
                todos.map((todo, index) => {
                    return <div key={ index }>
                        { todo }
                        <button onClick={ (event) => {
                            removeHandler(index);
                        }}>Remove</button>
                    </div>
                })

            }
            

            
        </div>
    );
}

export default Todos;
