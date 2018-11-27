import React from 'react';

import './Person.css';

const person = (props) => {

    return(
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
    // using radium here for scope or dynamic content
};

// Need to wrap the export in radium anywhere you plan on using it 
export default person;