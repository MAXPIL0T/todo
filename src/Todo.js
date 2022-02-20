import React, {useState} from 'react';
import RemoveTodo from './RemoveTodo';

function Todo(props) {
    
    return (
        <div className="todo">
            <p>{props.text}</p>
            <RemoveTodo id={props.id}/>
        </div>
    );
}

export default Todo;