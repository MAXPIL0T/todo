import React, {useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Nav/>
        <TodoProvider>
          <AddTodo/>
          <TodoList/>
        </TodoProvider>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
