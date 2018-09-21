import React from 'react';

const EditExpensePage = (props) =>{
    console.log(props);    
    return(
        <div>
            <p>Editing teh expense with id of {props.match.params.id}</p>
        </div>
    )    
};


export default EditExpensePage;