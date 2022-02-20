import React, {useState, createContext} from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todos, setTodos] = useState([
        {
            text: "Sample Todo 0",
            id: 0
        }
    ]);
    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
};