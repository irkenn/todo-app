import React from "react";

function ToDo({id, text, deleteToDo}){

    return(
        <div className="todo-wrapper">
            <div 
            className="todo"
            key={id}>
            {text}
            </div>
            <button
                className="delete-todo-button"
                onClick={(e) => deleteToDo(e, id)}
                >
                X
            </button>
        </div>
    );
}

export default ToDo;