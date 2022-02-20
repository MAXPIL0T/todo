import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const AddTodo = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useContext(TodoContext);

    const updateText = e => {
        setText(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();
        setTodos(prevTodos => [{text: text, id: prevTodos[prevTodos.length - 1].id + 1}, ...prevTodos])
    };

    return (
        <form onSubmit={addTodo}>
            <input type="text" name={text} onChange={updateText} />
            <button>Add Todo</button>
        </form>
    );
};

export default AddTodo;