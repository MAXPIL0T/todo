import React, {useState} from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';


function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Nav/>
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
