// Importing React and CSS module for styling
import React from 'react';
import classes from './Input.module.css';

// Creating a reusable Input component using React.forwardRef to pass ref
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}> {/* Container for input field */}
            <label htmlFor={props.input.id}>{props.label}</label> {/* Label for input field */}
            <input ref={ref} {...props.input} /> {/* Input field with forwarded ref and dynamic properties */}
        </div>
    );
});

export default Input; // Exporting Input component for use in other components
