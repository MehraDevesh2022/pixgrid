import React , {useContext} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart  } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { capstoneContext } from '../context/Context';

function Header() {
   const { cartItem } = useContext(capstoneContext);

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart" className="cart-icon">
        {cartItem.length > 0 ? <BsFillCartCheckFill/> : <AiOutlineShoppingCart />}
      </Link>
    </header>
  );
}

export default Header