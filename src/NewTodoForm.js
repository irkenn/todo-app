import React, { useState } from "react";

function NewToDoForm({addToDo}){

    const INITIAL_STATE = {
        text : ""
    };  

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { text } = formData;
        if(!text){
            alert("Please fill the text field");
            return;
        }
        addToDo(text)
        setFormData(INITIAL_STATE)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Todo </label>
            <input
                type="text"
                placeholder="write todo here"
                name="text"
                value={formData.text}
                onChange={handleChange}
            />

            <button>Add todo!</button>
        </form>
    );
}

export default NewToDoForm;