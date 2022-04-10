import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

let last_used_id = 0;

const AddTodo = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useContext(TodoContext);
    const [warning, setWarning] = useState(false);

    const updateText = e => {
        if (false) { console.log(todos); }
        setText(e.target.value);
    };

    const getNewID = () => {
        return last_used_id++;
    };

    const addTodo = e => {
        e.preventDefault();
        if (text === "") {
            setWarning(true);
        } else {
            setTodos(prevTodos => [{text: text, id: getNewID()}, ...prevTodos]);
            setText("");
            setWarning(false);
        }
    };

    return (
        <div className="AddTodo">
            <form onSubmit={addTodo}>
                <input value={text} onChange={updateText} />
                <button>Add Todo</button>
                {warning? <p>Can't add an empty todo!</p>:""}
            </form>
        </div>
    );
};

export default AddTodo;