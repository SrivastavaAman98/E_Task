import React, { useState } from 'react'; // Import React and useState hook for state management

import classes from './Header.module.css'; // Import CSS for styling
import CategoriesBar from './CategoriesBar'; // Import CategoriesBar component for category selection
import Items from '../Items/Items'; // Import Items component to display products
import Footer from './Footer'; // Import Footer component
function Home() {
        // Define available product categories
    const categories = ["All", "T-Shirts", "Jeans", "Shirts", "Shoes"];  

    // State to track the selected category (default: "All")
    const [selectedCategory, setSelectedCategory] = useState("All");
        // Function to update selected category when a user clicks on a category
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        // Additional logic can be implemented here to filter items based on the selected category
    };
    return (
    <>
        <div className={classes['main-image']} >
            <img src='./assets/fashion.jpg' alt='Main Page Fashion Background'/>
        </div>

        <CategoriesBar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
        />      
        
        <Items category={ selectedCategory }/>

        <Footer />    
    </>
);
}

export default Home; // Export Home component for use in other parts of the application
