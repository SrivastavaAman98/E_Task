import React from 'react'; // Import React library

import './SuccessModal.css'; // Import the CSS file for styling
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

// SuccessModal component displays a success message after an order is placed
const SuccessModal = (props) => {
    return (
        <div className="modal"> {/* Modal container */}
            <div className="modal-content"> {/* Modal content box */}
                <h2>Success!</h2> {/* Success message */}
                <p>Your order is successfully placed.</p> {/* Order confirmation message */}
                <NavLink to="/"> {/* Navigation link to go back to the home page */}
                    <button>Close</button> {/* Close button */}
                </NavLink>
            </div>
        </div>
    );
};

export default SuccessModal; // Export the SuccessModal component
