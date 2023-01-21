import React ,{useState} from 'react'
import Image from '../component/Image';
import { getClass } from "../util/setClass";
import {capstoneContext} from "../context/Context"
import { useContext } from 'react';


function Photos() {



  
  const { allPhotos, toggleFavorite } = useContext(capstoneContext);
  // console.log(allPhotos);
// <Image key={???} img={<full image object here>} className={getClass(<index of image>)} /></index>
  return (
    <main className="photos">
      {allPhotos.map((item, index) => (
        <Image
          key={item.id}
          img={item.url}
          className={getClass(index)}
          toggleFavorite={toggleFavorite}
          id={item.id}
          isFavorite={item.isFavorite}
          addToCart
        />
      ))}
    </main>
  );
}

export default Photos