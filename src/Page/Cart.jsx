import React , {useContext}from 'react'
import { capstoneContext } from '../context/Context';
import CartItem from '../component/CartItem';

function Cart() {
  const {cartItem} = useContext(capstoneContext);

  const cartElement = cartItem.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  

  return (
    <main className="cart-page">
      {cartElement}
      <p className="total-cost">Total :</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart