import React, { useRef, useState } from 'react'; // Import React and necessary hooks

import classes from './FashionItemForm.module.css'; // Import CSS module for styling
import Input from './Input'; // Import Input component for user input

const FashionItemForm = props => {
    // State to track whether the entered amount is valid
    const [amountIsValid, setAmountIsValid] = useState(true);

    // Create a reference for the input field to access its value directly
    const amountInputRef = useRef();

    // Function to handle form submission
    const submitHandler = event => {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve the entered amount value from input field
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount; // Convert string input to a number

        // Validate the input value: ensure it's not empty and greater than 0
        if (
            enteredAmount.trim().length === 0 || // Check if input is empty
            enteredAmountNumber < 1 // Ensure amount is at least 1
        ) {
            setAmountIsValid(false); // Set state to indicate invalid input
            return; // Exit function without adding to cart
        }

        // Reset input field value to 1 after submission
        amountInputRef.current.value = 1;

        // Call the function received from props to add the item to the cart
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <div className={classes.form}> {/* Container for the form */}
            <div className={classes.amount}> {/* Container for input field */}
                <Input 
                    ref={amountInputRef} // Attach useRef to input field
                    label="Amount" // Label for input field
                    input={{
                        id: 'amount_' + props.id, // Unique ID for input field
                        type: 'number', // Set input type as number
                        min: '1', // Set minimum value to 1
                        step: '1', // Allow step increments of 1
                        defaultValue: '1' // Default input value when form loads
                    }}
                />
            </div>
            {/* Button to submit the form and add item to cart */}
            <button onClick={submitHandler}>Add To Cart</button> 

            {/* Display an error message if input is invalid */}
            {!amountIsValid && <p>Please enter a valid amount.</p>}
        </div>
    );
};

// Export the component to be used in other parts of the application
export default FashionItemForm; 
