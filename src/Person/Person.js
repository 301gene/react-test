// one should stick to this "function-like" component
// structure, because this way it is very clear
// what they do and they DO NOT change the application's state.
// The application state should only be changed and handled
// in a few selected components. Also referred to as 
// containers (e.g. App.js).

import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} /> {/*onChange changes the value, 'value' shows the value right from the start. An example of 2-way binding.*/}
        </div>
    )
};

export default person;