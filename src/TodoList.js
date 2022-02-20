import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);

    return (
        <div>
            {todos.map(todo => (
                <Todo text={todo.text} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;