import React , {useContext}from 'react'
import { capstoneContext } from '../context/Context';
import CartItem from '../component/CartItem';
import { Link , useRouteMatch } from 'react-router-dom';

function Cart() {
 const {url} = useRouteMatch()

  const { cartItem, removeToCart, emptyCart } = useContext(capstoneContext);

  const cartElement = cartItem.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
const total = (number) =>
{  
   number = (number * cartItem.length);
  return(
     number.toLocaleString("en-US", {style: "currency", currency: "USD"} )
  )
}


  
  return (
    <main className="cart-page">
      {cartElement}
      <p className="total-cost">Total :{total(5.99)} </p>
      {cartItem.length > 0 ? (
        <Link to={`${url}/order`}>
          <div className="order-button">
            <button onClick={emptyCart}>Place Order</button>
          </div>
        </Link>
      ) : (
        <p className="order">You have no items in your cart.</p>
      )}
    </main>
  );
}

export default Cart