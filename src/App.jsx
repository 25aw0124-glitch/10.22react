import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([{ id: Date.now(), text: '掃廁所' }]);
  const addTask = () => {
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask('');
  };
  const deleteTask = (idTodelete) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== idTodelete;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>追加</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTask(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;
