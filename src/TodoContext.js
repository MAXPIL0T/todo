import React, {useState, createContext} from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todos, setTodos] = useState([]);
    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
};