import React, {useState} from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';


function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Nav/>
        <AddTodo/>
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
