import React from 'react';
import RemoveTodo from './RemoveTodo';

function Todo(props) {
    
    return (
        <div className="Todo">
            <p>{props.text}</p>
            <RemoveTodo id={props.id}/>
        </div>
    );
}

export default Todo;