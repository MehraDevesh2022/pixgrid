import React ,{useState}from 'react'
import { BsTrashFill, BsTrash } from "react-icons/bs";
 import { capstoneContext } from '../context/Context';
function CartItem({item}) {
   const { removeToCart } = React.useContext(capstoneContext);
   const [isHover , setIsHover] = useState(false)
      const Icon = isHover ? BsTrashFill : BsTrash
      console.log(Icon);
      console.log(isHover);
   return (
    <div className="cart-item">
      <Icon
        onMouseEnter ={() => setIsHover(true)}
        onMouseLeave ={() => setIsHover(false)}
        className="ri-delete-bin-line"
        onClick={() => removeToCart(item.id)}
      />
      <img src={item.url} alt={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem