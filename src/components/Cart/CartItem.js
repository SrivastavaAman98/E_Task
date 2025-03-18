import './CartItem.css';  // Import CSS file for styling
// CartItem Component - Displays individual cart items with controls for quantity adjustment

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;  // Format price to two decimal places

  return (
    <li className="cart-item">   {/* List item representing a cart entry */}
      <div className="details">  {/* Container for item details */}
        <h2>{props.name}</h2>    {/* Display item name */}
        <div className="summary">  {/* Container for price and quantity */}
          <span className="price">₹ {price}</span>  {/* Display formatted price */}
          <span className="amount"> {props.amount}</span> {/* Display item quantity */}
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button> {/* Buttons to increase or decrease item quantity */}

        <button onClick={props.onAdd}>+</button>  {/* Increase item quantity */}
      </div>
    </li>
  );
};

export default CartItem;
// Export the component for use in other parts of the application