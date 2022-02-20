import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const RemoveTodo = (props) => {
    const [todos, setTodos] = useContext(TodoContext);

    const removeTodo = () => {
        let newTodoList = todos.filter(x => x.id !== props.id);
        setTodos(newTodoList);
    };

    return (
        <button onClick={removeTodo}>Remove</button>
    );
};

export default RemoveTodo;