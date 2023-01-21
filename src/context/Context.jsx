import React ,{createContext , useState , useEffect} from "react";
const  capstoneContext  = createContext();

function ContextProvider(props) {
     let [allPhotos, setAllPhotos] = useState([]);
    let [cartItem , setCartItem] = useState([]);

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
     
  return (
    <capstoneContext.Provider
      value={{ allPhotos, toggleFavorite, addToCart, cartItem, removeToCart }}
    >
      {props.children}
    </capstoneContext.Provider>
  );
}

export { ContextProvider, capstoneContext };