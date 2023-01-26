import React ,{createContext , useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import Cart from "../Page/Cart";

const  capstoneContext  = createContext();

 
function ContextProvider(props) {
     let [allPhotos, setAllPhotos] = useState([]);
    let [cartItem , setCartItem] = useState([]);
     const history = useHistory();
    
    
       // favorite add or remove
     function toggleFavorite(id){
            let updatedArr =    allPhotos.map(obj => {     
         
            if(obj.id ===id){
              return { ...obj, isFavorite: !obj.isFavorite };
            }else{
              return obj;
            }
          })
           setAllPhotos([...updatedArr])
         
      }

    function addToCart(id){
       allPhotos.map(obj =>{
        if(obj.id === id){
           setCartItem(prv => [...prv , obj]);
        }
       })
    }
    
    function removeToCart(id){
        let updatedCart = cartItem.filter(obj => obj.id !=id);
        setCartItem([...updatedCart]);
    }

     useEffect(() =>{
        fetch(
          "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        )
          .then((res) => res.json())
          .then((data) => setAllPhotos(data));
    },[])
  
    function emptyCart(){
        setCartItem([]);
        setTimeout(() =>{
       history.push('/cart')
        },2000)
        history.replace('')
    }
     
  return (
    <capstoneContext.Provider
      value={{ allPhotos, toggleFavorite, addToCart, cartItem, removeToCart  , emptyCart}}
    >
      {props.children}
    </capstoneContext.Provider>
  );
}

export { ContextProvider, capstoneContext };