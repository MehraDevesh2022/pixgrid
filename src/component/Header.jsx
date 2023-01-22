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
      <div className="header-cart">
        <Link to="/cart" className="cart-icon">
          {cartItem.length > 0 ? (
            <BsFillCartCheckFill />
          ) : (
            <AiOutlineShoppingCart />
          )}
        </Link>
        <p className={`${cartItem.length > 0 ? `cart-amount filld` : `cart-amount`}`}>
       {cartItem.length}
        </p>
      </div>
    </header>
  );
}

export default Header