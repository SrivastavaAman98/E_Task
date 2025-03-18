import React from 'react';
import './Cart.css'; // Import CSS file for styling
import CartItem from './CartItem'; // Import CartItem component to display individual cart items
import { useContext } from 'react';  // Import navigation tools from React Router
import CartContext from '../../store/cart-context';
import { NavLink, useNavigate } from 'react-router-dom';

const Cart = props => {
    const cartCtx = useContext(CartContext);  // Access cart context to manage cart state

    const navigate = useNavigate();
    // Calculate total amount of items in the cart and format it to two decimal places

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    // Function to remove an item from the cart

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };
    // Function to add an item to the cart (increments quantity)

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1});
    };



    const proceedHandler = () => {
        if(props.isLoggedIn) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    }


return (
    <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {cartCtx.items.length > 0 ? (<div>
        <div className="cart-items">
        { cartCtx.items.map((item) => (
                    <CartItem 
                        key={item.id}
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price}
                        image={item.image}
                        onRemove={ cartItemRemoveHandler.bind(null, item.id) }
                        onAdd={ cartItemAddHandler.bind(null, item) }
                    />
                )) }      
        </div>
        <p className="cart-total">Total: ₹{ totalAmount }</p>
        <div className="button-container">
        <NavLink to="/"> <button className="button" > Cancel </button> </NavLink>
        <button className="button" onClick={ proceedHandler }>Proceed to Checkout</button>
        </div>

        </div>) : (<h2 className="empty-cart">Your Cart is Empty</h2>) }

        </div>
    );
};

export default Cart;