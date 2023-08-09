import React from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div className='navleft'>
      <CustomLink exact to="/" >
            eCommerce
          </CustomLink>
          <CustomLink  to="/ProductsPage" >
            Products
          </CustomLink>
          <CustomLink to="/AddProduct">
            Add a product
          </CustomLink>
      </div>
      <div className='navright'>
            <a>John Doe</a>
          
          <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0sZM3N_W4MBl1UBj6fC4ojn7cl26gGLHCN1D89Y&s" className='cart' width="30" height="30" alt="cart"/>
          <a className='count'>{props.count}</a>
          </div>
      </div>
    </div>
  )
}


function CustomLink({to,children,...props}){
  const path=window.location.pathname;

  return(
    <li style={{listStyleType:"none",textDecoration:"none", color:"black"}} className={path === to? "active":""}  >
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}