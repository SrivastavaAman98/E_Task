import React, { useReducer } from 'react'; // Importing React and the useReducer hook

import CartContext from './cart-context'; // Importing the CartContext to use its structure


//  Action 

// Default state of the cart
const defaultCartState = {
    items: [],          // Array to store items in the cart
    totalAmount: 0      // Total cost of all items in the cart
};

// Reducer function to handle cart state updates based on dispatched actions
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){ // Handle adding an item to the cart
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item)=> item.id === action.item.id // Find index of the existing item
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        
        if(existingCartItem){ // If the item already exists in the cart
            const updatedItem = {
                ...existingCartItem, 
                amount: existingCartItem.amount + action.item.amount // Update its quantity
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem; // Replace with the updated item
        } else { // If the item does not exist in the cart
            updatedItems = state.items.concat(action.item); // Add the new item
        }

        return { // Return the updated state
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'REMOVE') { // Handle removing an item from the cart
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id // Find index of the item to remove
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1) { // If the item quantity is 1, remove it completely
            updatedItems = state.items.filter(item => item.id !== action.id );
        } else { // Otherwise, reduce its quantity by 1
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { // Return the updated state
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'CLEAR') { // Handle clearing the entire cart
        return defaultCartState; // Reset to the default state
    }

    return defaultCartState; // Fallback to default state if action is unrecognized
};


//  Reducer
// The CartProvider component provides cart state and functionality to other components
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    // Dispatch actions for adding an item to the cart
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    // Dispatch actions for removing an item from the cart
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    // Dispatch actions for clearing the cart
    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'});
    }


    
//  Middle ware
    // Context Middle Ware value to be provided to consumers
    const cartContext = {
        items: cartState.items,                 // Current items in the cart
        totalAmount: cartState.totalAmount,     // Total cost of the cart
        addItem: addItemToCartHandler,          // Function to add an item
        removeItem: removeItemFromCartHandler,  // Function to remove an item
        clearCart: clearCartHandler             // Function to clear the cart
    }
    return(
        <CartContext.Provider value = { cartContext } >
            {props.children} // Render child components wrapped by the provider
        </CartContext.Provider>
    );
};

export default CartProvider; // Exporting the CartProvider for use in other components
