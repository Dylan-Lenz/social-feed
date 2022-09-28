import React, { useState } from 'react';

const AddEntryForm = (props) => {
    
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            comment: comment
        };
        console.log(newEntry);
        props.addNewEntryProp(newEntry)
    }
    
    return (
        <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/> 
                <label>Post</label>
                <input type='text' value={comment} onChange={(event) => setComment(event.target.value)}/>
                <button type='submit'>Create</button>
        </form>
    );
}
 
export default AddEntryForm;