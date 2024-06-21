import React, { useState } from 'react';
import EditTodo from './EditTodo';
import { Todo } from '../App';

interface Props {
  todo: Todo;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleUpdate = (updatedTodo: Todo) => {
    updateTodo(updatedTodo);
    setIsEditing(false);
  };

  return (
    <li className={isEditing ? 'editing' : ''}>
      {isEditing ? (
        <EditTodo todo={todo} onSave={handleUpdate} onCancel={() => setIsEditing(false)} />
      ) : (
        <div className="todo-content">
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.dueDate}</p>
        </div>
      )}
      {!isEditing && (
        <div className="todo-actions">
          <button onClick={() => setIsEditing(true)}>Редагувати</button>
          <button onClick={handleDelete}>Видалити</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
