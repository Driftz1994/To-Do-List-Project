// components/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './ToDo';
import '../App.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
