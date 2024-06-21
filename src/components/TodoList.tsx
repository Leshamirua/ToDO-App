import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../App';

interface Props {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
