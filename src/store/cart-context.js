import React from 'react';
// This context provides a structure for managing a shopping cart's state, 
// including items, total amount, and functions for adding, removing, 
// and clearing items from the cart.
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (id) => {},
    clearCart: () => {}
});

export default CartContext;