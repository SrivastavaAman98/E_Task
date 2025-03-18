import { useRef, useState, useContext } from 'react'; // Import hooks for managing state, refs, and context
import { NavLink, useNavigate } from 'react-router-dom'; // Import navigation components

import CartContext from '../../store/cart-context'; // Import CartContext for accessing cart data
import classes from './Checkout.module.css'; // Import module CSS for styling

// Utility functions for input validation
const isEmpty = value => value.trim() === ''; // Checks if a value is empty
const isFiveChars = value => value.trim().length !== 6; // Checks if postal code is exactly 6 characters

const Checkout = (props) => {
    // State for tracking form validation status
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const cartCtx = useContext(CartContext); // Access cart context to clear cart after order submission

    // Create refs for form input fields
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const navigate = useNavigate(); // Hook for navigation after form submission

    // Function to handle form submission
    const confirmHandler = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Get user input values
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        // Validate user input
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);

        // Update state based on validation
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        });

        // Check if the entire form is valid
        const formIsValid = 
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalCodeIsValid &&
            enteredCityIsValid;

        // If form is invalid, stop submission
        if (!formIsValid) {
            return;
        }
        
        // Clear the cart after successful submission
        cartCtx.clearCart();

        // Navigate to success page after form submission
        navigate('/success');
    };

    // Dynamic class assignments for input fields based on validation status
    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            {/* Name input field */}
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>

            {/* Street input field */}
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>

            {/* Postal Code input field */}
            <div className={postalCodeControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
                {!formInputsValidity.postalCode && <p>Please enter a valid postal code (6 characters long)!</p>}
            </div>

            {/* City input field */}
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>

            {/* Form action buttons */}
            <div className={classes.actions}>
                <NavLink to="/cart">
                    <button type='button' onClick={props.onCancel}>
                        Cancel
                    </button>
                </NavLink>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout; // Export the Checkout component
