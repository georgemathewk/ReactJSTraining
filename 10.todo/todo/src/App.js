import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeHandler = (index) => {
    const newTodos = todos.filter((todo, i) => {
      return i !== index;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <Todo addHandler={ addTodo } />
      <Todos todos={ todos }  removeHandler = { removeHandler } />
    </div>
  );
}

export default App;
