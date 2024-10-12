import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('todos'); // State to manage active tab

  const renderContent = () => {
    switch (activeTab) {
      case 'todos':
        return (
          <>
            <TodoForm />
            <TodoList />
          </>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <Provider store={store}>
      <div>
        <h1>To-Do List</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('todos')}>To-Do List</button>
          <button onClick={() => setActiveTab('about')}>About</button>
          <button onClick={() => setActiveTab('contact')}>Contact</button>
        </div>
        {renderContent()}
      </div>
    </Provider>
  );
};

export default App;
