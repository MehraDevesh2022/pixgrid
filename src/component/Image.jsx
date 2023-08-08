import React, { useState, useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiTwotoneHeart, AiFillFileAdd } from "react-icons/ai";
import PropTypes from "prop-types";
import { capstoneContext } from "../context/Context";

export default function Image({ className, img, toggleFavorite, id, isFavorite, index }) {
  const { addToCart, cartItem, removeToCart } = useContext(capstoneContext);
  const [ishovered, setIshovered] = useState(false);

  const addToFavorite = ishovered && (
    <AiOutlineHeart
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(id)}
    />
  );

  const removeToFavorite = ishovered && (
    <AiTwotoneHeart
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(id)}
    />
  );

  const cartIcon = () => {
    const checkItem = cartItem.some((obj) => obj.id === id);
    if (checkItem) {
      return (
        <MdAddShoppingCart
          className="ri-add-circle-line cart rmv"
          onClick={() => removeToCart(id)}
        />
      );
    } else if (setIshovered) {
      return (
        <AiFillFileAdd
          className="ri-add-circle-line cart add"
          onClick={() => addToCart(index)}
        />
      );
    }
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseOver={() => setIshovered(true)}
      onMouseOut={() => setIshovered(false)}
    >
      <img src={img} alt={img} className="image-grid" />

      {isFavorite && removeToFavorite}
      {isFavorite === false && addToFavorite}
      {ishovered && cartIcon()}
    </div>
  );
}

Image.prototype = {
  className: PropTypes.string, // isRequired not used bcz getClass not returns every time class. its based on condition
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.isRequired,
  img: PropTypes.string.isRequired,
};
