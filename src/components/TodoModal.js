import React from 'react';
import Modal from 'react-modal';

const TodoModal = ({ isOpen, onRequestClose, todo }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#00bfff',
          border: '2px solid #b65c1d',
          borderRadius: '10px'
        },
      }}
    >
      <h2>Todo Details</h2>
      {todo ? (
        <div>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Task:</strong> {todo.text}</p>
        </div>
      ) : (
        <p>No todo selected.</p>
      )}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default TodoModal;