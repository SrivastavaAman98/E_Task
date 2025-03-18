import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { Link } from "react-router-dom"; // Import Link for navigation
import WishListItem from "./WishListItem"; // Import the WishListItem component
import "./WishList.css"; // Import CSS file for styling

const WishList = () => {
    // Retrieve the cart state from Redux store
    const { cart } = useSelector((state) => state);

    return (
        <div>
            {
                // Check if the wishlist has more than one item
                cart.length > 1 ? 
                (
                    <div className="wishlist-container"> {/* Wishlist container */}
                        <h1 className="heading">Wish List</h1> {/* Wishlist heading */}

                        <div className="wishlist-items">
                            {
                                // Map through the cart items and render each WishListItem component
                                cart.map((item, index) => {
                                    return <WishListItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>

                        {/* Button to navigate back to Home page */}
                        <Link to={"/"} className="link">
                            <button className="button">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                ) : 
                (
                    // Display this section when the wishlist is empty
                    <div className="empty-wishlist">
                        <h1>Wish List Empty</h1> {/* Message when wishlist is empty */}
                        
                        {/* Button to navigate back to shopping */}
                        <Link to={"/"} className="link">
                            <button className="button">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default WishList; // Export the WishList component
