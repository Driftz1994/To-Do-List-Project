import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/actions';
import TodoModal from './TodoModal';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="todo-item" onClick={openModal}>
        <span>{todo.text}</span>
        <button onClick={(e) => { e.stopPropagation(); dispatch(removeTodo(todo.id)); }}>Delete</button>
      </div>
      <TodoModal isOpen={isModalOpen} onRequestClose={closeModal} todo={todo} />
    </>
  );
};

export default Todo;