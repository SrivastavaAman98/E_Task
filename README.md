<<<<<<< HEAD
# Task
=======
# E-Commerce Website

## Project Overview
This is a fully functional e-commerce website built using **React.js** and **Redux**. It includes product listings, filtering, cart management, user authentication, and checkout functionality.

## Features
- **Product Listing**: Displays all products with different categories.
- **Product Selection**: Users can select products and add them to the cart.
- **Cart Management**: Shows selected products, calculates total price, and allows editing or removal.
- **Filtering**: Filter products by brand, size, and color.
- **Wishlist**: Users can add products to a wishlist and move them to the cart.
- **Address Management**: Users can add, edit, and select addresses.
- **Authentication**: Sign-in and Sign-up features before checkout.
- **Checkout Process**: Confirms order and displays a success message.




   ```
## E-commerce Website ## Features
#Implementation of ReactJS functionality Proper use of React components, hooks, and routing. 

#Integration of Redux for state management Redux
Efficient state management, modular reducers, and appropriate middleware.
- Display all the shopping products with different categories.
- Select the products
-  Display no of selected products
-  Filter product - brand, size, colour
-  Move selected products to the cart after click on ‘Add to Cart’ button
-  Once user clicks on checkout, sign up/in page should get displayed if user is not already signed in.
-  After click on checkout button, another page should get displayed with message “Your order is placed.”

## Add New Address:
-  User should have functionality to add no of address with radio button.
-  If user doesn’t have any address selected, then “add new address” dialog should get displayed to add the address while moving the products in the cart.
-  Validation should be applied on all the fields
-  If validation gets fail, error message should get displayed.
## Add to Cart:
- It should have user details includes name, address, phone-number etc
- No of products displayed
- Price calculation should be displayed.
- Cancel button should be there to cancel the transaction.
- Delete and Edit button should be displayed to delete/edit the product.
## Checkout Page:
- It should have user details includes name, address, phone-number etc
- No of products displayed
- Price calculation should be displayed.
- Cancel button should be there to cancel the transaction.
- Delete and Edit button should be displayed to delete/edit the product.
## Add to Wishlist:
- Wishlist icon should get displayed in the header.
- Each product will have icon to move it to the Wishlist.
- Once user clicks on the Wishlist icon in the header, all products should get displayed
- Once user hover on the product, add to cart option should get displayed to move the respective product in the cart.

   

## API Integration
- The application fetches product data from an external API.
- Example API call:
  ```js
  import axios from 'axios';

  const API_URL = 'https://api.example.com';

  export const fetchProducts = async () => {
    return await axios.get(`${API_URL}/products`);
  };
  ```

