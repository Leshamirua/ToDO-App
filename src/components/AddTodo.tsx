import React, { useState } from 'react';
import { Todo } from '../App';

interface Props {
  addTodo: (todo: Todo) => void;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: `${Date.now()}`,
      title,
      description,
      dueDate,
    };
    addTodo(newTodo);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Назва" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Опис" required />
      <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddTodo;
