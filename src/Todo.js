import React, {useState} from 'react';

function Todo(props) {
    
    return (
        <div className="todo">
            <p>{props.text}</p>
        </div>
    );
}

export default Todo;