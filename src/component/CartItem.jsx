import React from 'react'
import { AiFillDelete } from "react-icons/ai";
function CartItem({item}) {
  return (
    <div className="cart-item">
      <AiFillDelete className="ri-delete-bin-line" />
      <img src={item.url} alt={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem