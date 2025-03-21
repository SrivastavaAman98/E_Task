// import React ,{useState,useEffect}from 'react'
// import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
// import axios from 'axios';

// const Apidata = () => {
//     const [myData,setmyData] = useState([])

  
// useEffect(() => {
//   axios.get("https://fakestoreapi.com/products")
//   // axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) =>
//     setmyData(res.data)
//     // console.log(res.data)
//   )
// })
//   return (
//     <div>
//     <NavLink to="/"> </NavLink>
//       <div className='apidata'>
//       <h1 style={{color:""}}> Mock Server Api Call with Json Server  </h1>
//       {myData.map((post)=> {
//         const {id,image, title, description,price,category}= post
//         return(
//           <div>
//           <h1>{category}</h1>
//           <h3>{id}</h3>
//           <h2>{title}</h2>
//           <h5>{price }</h5>
//           <h3>{description}</h3>
//           <h4>{image}</h4>
//           </div>
//         )
//       })}
//       </div>
//     </div>
//   )
// }

// export default Apidata
