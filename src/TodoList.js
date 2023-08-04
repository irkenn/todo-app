import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import ToDo from "./Todo";
import NewToDoForm from "./NewTodoForm";


function TodoList(){
 
    const INITIAL_STATE = [];
    const [toDos, setToDos] = useState(INITIAL_STATE);
    
    const addToDo = (text) => {
        setToDos(toDos => [...toDos, {id:uuid(), text}]);
    }

    const deleteToDo = (e, id) => {
        const newToDos = toDos.filter((i) => i.id !== id);
        
        setToDos(newToDos);
    }

    return(
        <div>
            <div>
                <NewToDoForm addToDo={addToDo}/>
            </div>
            <div>
                {toDos.map(({id, text}) => <ToDo 
                                                id={id}
                                                text={text}
                                                key={id}
                                                deleteToDo={deleteToDo}/>)}
            </div>
        </div>

    )

}

export default TodoList;