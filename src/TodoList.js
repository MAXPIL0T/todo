import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
    const [todos] = useContext(TodoContext);

    return (
        <div className="TodoList">
            {todos.map(todo => (
                <Todo text={todo.text} key={todo.id} id={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;