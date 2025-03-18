import { useDispatch } from "react-redux"; // Import useDispatch to dispatch actions
import { remove } from "../../redux/Slices/WishListSlice"; // Import the remove action from the Redux slice
import "./WishListItem.css"; // Import CSS file for styling

const WishListItem = ({ item, itemIndex }) => { 
    const dispatch = useDispatch(); // Initialize dispatch function

    // Function to remove item from wishlist when the button is clicked
    const removeFromCart = () => {
        dispatch(remove(item.id)); // Dispatch the remove action with the item's ID
    }

    return (
        <div className="wishListCard"> {/* Card container for wishlist item */}
            {/* Display product image */}
            <img src={item.image} alt="WishList Item" className="productImage" />

            <div>
                {/* Display product name */}
                <h3 className="productName">{item.name}</h3> 

                <div className="displayStack__1"> {/* Price and remove button container */}
                    {/* Display product price */}
                    <p className="productPrice">₹ {item.price}</p> 

                    {/* Remove button */}
                    <button onClick={removeFromCart} className="delete-button">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishListItem; // Export the WishListItem component
