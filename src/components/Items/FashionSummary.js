// Import the CSS module for styling
import classes from './FashionSummary.module.css';

// Define the FashionSummary functional component
const FashionSummary = () => {
    return (
        // Section for displaying the summary message
        <section className={classes.summary}>
            {/* Heading for the fashion summary */}
            <h2>A New Revolution, A New Perspective</h2>

            {/* Description paragraph to encourage users to explore fashion items */}
            <p>
                Choose your favorite fashion from our broad selection of available clothes & accessories
                and keep up with the latest fashion trends.
            </p>

            {/* Additional paragraph highlighting the quality and uniqueness of products */}
            <p>
                All our clothes & accessories come with high-quality designs based on new trends, 
                just-in-time production, and of course, created by experienced fashion designers!
            </p>
        </section>
    );
};

// Export the FashionSummary component for use in other parts of the application
export default FashionSummary;
