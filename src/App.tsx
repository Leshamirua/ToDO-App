import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import './App.css';

export interface Todo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => {
        setTodos(response.data);
        setFilteredTodos(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addTodo = (todo: Todo) => {
    axios.post('http://localhost:3001/todos', todo)
      .then(response => {
        const newTodos = [...todos, response.data];
        setTodos(newTodos);
        setFilteredTodos(newTodos);
      })
      .catch(error => console.error('Error adding todo:', error));
  };

  const deleteTodo = (id: string) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        setFilteredTodos(newTodos);
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  const updateTodo = (updatedTodo: Todo) => {
    axios.put(`http://localhost:3001/todos/${updatedTodo.id}`, updatedTodo)
      .then(response => {
        const newTodos = todos.map(todo => todo.id === updatedTodo.id ? response.data : todo);
        setTodos(newTodos);
        setFilteredTodos(newTodos);
      })
      .catch(error => console.error('Error updating todo:', error));
  };

  const searchTodos = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = todos.filter(todo => 
      todo.title.toLowerCase().includes(lowerCaseQuery) || 
      todo.description.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredTodos(filtered);
  };

  return (
    <div className="container">
      <h1>СПИСОК СПРАВ</h1>
      <div className="search-bar">
        <SearchBar onSearch={searchTodos} />
      </div>
      <div className="add-todo">
        <AddTodo addTodo={addTodo} />
      </div>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default App;
