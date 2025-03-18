import React from "react";  // Importing React to define a functional component
import './CategoriesBar.css'; // Importing CSS file for styling


// Functional Component for displaying category navigation

const CategoriesBar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="categories-bar">  {/* Container for category bar */}

            <ul>
                {categories.map((category) => (
                    <li
                        key={category}  // Assign a unique key for each category
                        className={selectedCategory === category ? "active" : ""} // Apply "active" class if selected
                        onClick={() => onSelectCategory(category)} // When clicked, update the selected category
                    >

                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesBar;