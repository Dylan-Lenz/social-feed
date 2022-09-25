import React, { useState } from 'react';

const AddEntryForm = (props) => {
    
    const {name, setName} = useState('');
    const {comment, setComment} = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            comment: comment
        };
        console.log(newPost);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div> 
                <label>Name</label>
                <input type='string' value={name} onChange={(event) => setName(event.target.value)}/> 
            </div>
            <div>
                <label>Post</label>
                <input type='string' value={comment} onChange={(event) => setComment(event.target.value)}/>
            </div>
                <button type='submit'>Create</button>
        </form>
    );
}
 
export default AddEntryForm;