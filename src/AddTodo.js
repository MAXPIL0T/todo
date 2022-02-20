import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

let last_used_id = 0;

const AddTodo = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useContext(TodoContext);

    const updateText = e => {
        setText(e.target.value);
    };

    const getNewID = () => {
        return last_used_id++;
    };

    const addTodo = e => {
        e.preventDefault();
        setTodos(prevTodos => [{text: text, id: getNewID()}, ...prevTodos])
    };

    return (
        <form onSubmit={addTodo}>
            <input type="text" name={text} onChange={updateText} />
            <button>Add Todo</button>
        </form>
    );
};

export default AddTodo;