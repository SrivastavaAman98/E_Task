// implementation useState ,useEffect  import Hooks library are used 

import React, { useState,useEffect } from 'react';

// Routing 
import { Route, Routes } from "react-router-dom";

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Home from './components/Layout/Home';
import WishList from './components/Cart/WishList';
import LoginForm from './components/Layout/LoginForm';
import Checkout from './components/Cart/Checkout';
import SuccessModal from './components/Cart/SuccessModal';
import axios from 'axios';

import "../src/apidata.css"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [myData,setmyData] = useState([])


useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
  // axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res) =>setmyData(res.data)
    // console.log(res.data)
  )
},[])

  return (
    <CartProvider>
      <Header isLoggedIn = { isLoggedIn } setIsLoggedIn = {setIsLoggedIn} />
      <Routes> {'Adding React Router to our app'}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm isLoggedIn = { isLoggedIn }setIsLoggedIn = { setIsLoggedIn }/>} />
          <Route path="/wishlist" element={<WishList/>} />
          <Route path="/cart" element={<Cart isLoggedIn = { isLoggedIn } />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<SuccessModal />} />

       


      </Routes>
      <div className='apidata'>
      <div>
        <h1 className='heading'> Mock Server Api Call with Json Server </h1>
        {myData.map((post)=> {
        const {id,image, title, description,price,category,Rating}= post
        return(
          <div className='heading-1'>
          <uo>
         <li>
           <h3>{id}</h3>
          <h2>{title}</h2>
          <h5>{price }</h5>
          {/* <h1>{category}</h1> */}
          <h3>{Rating}</h3>

          <img src={image} className='imagee'/>
          <h3>{description}</h3>
         </li>
</uo>
          </div>
        )
      })}
      </div>
          </div>
      
      
    </CartProvider>
    
  );
}
        
export default App





