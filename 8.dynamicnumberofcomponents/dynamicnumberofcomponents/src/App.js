import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';

function App() {

  const employees = [
    { name: 'John Doe', age: 30, position: 'Manager' },
    { name: 'Jane Smith', age: 25, position: 'Developer' },
    { name: 'Bob Johnson', age: 40, position: 'Designer' }
  ];

  return (
    <div>
      {employees.map((employee, index) => (
        <Employee key={index} {...employee} />
      ))}
    </div>
  );
}

export default App;
