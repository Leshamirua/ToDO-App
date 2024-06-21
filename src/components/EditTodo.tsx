import React, { useState } from 'react';
import { Todo } from '../App';

interface Props {
  todo: Todo;
  onSave: (todo: Todo) => void;
  onCancel: () => void;
}

const EditTodo: React.FC<Props> = ({ todo, onSave, onCancel }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [dueDate, setDueDate] = useState(todo.dueDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...todo, title, description, dueDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Назва" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Опис" required />
      <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Зберегти</button>
      <button type="button" onClick={onCancel}>Скасувати</button>
    </form>
  );
};

export default EditTodo;
