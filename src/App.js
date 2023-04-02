import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      const newTodos = [...todos];
      newTodos[editIndex] = inputValue;
      setTodos(newTodos);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setInputValue(todos[index]);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">{editMode ? 'Update' : 'Add'}</button>
        {editMode && <button onClick={() => setEditMode(false)}>Cancel</button>}
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li className="mx-3" key={index}>
            {index+1}.{todo}{' '}
            <div className="mx-3">
              <button onClick={() => handleEdit(index)}>Edit</button>{' '}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
