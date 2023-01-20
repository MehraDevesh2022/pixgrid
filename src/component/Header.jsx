import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
   
  return (
    <header>
      <Link  to ='/'>
        <h2>Pic Some</h2>
      </Link>
      <Link to ="/cart" className='cart-icon'><AiOutlineShoppingCart/></Link>
    </header>
  );
}

export default Header