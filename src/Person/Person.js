import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        // radium understands this due to it being a string that it can parse
        '@media(min-width: 500px)':{
            width: '450px'
        }
    }
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
export default Radium(person);