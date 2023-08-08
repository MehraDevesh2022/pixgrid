import React ,{createContext , useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
// import Cart from "../Page/Cart";

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

    function addToCart(index){
      // eslint-disable-next-line array-callback-return
       allPhotos.map((obj ,idx)=>{
        if (idx === index) {
          setCartItem((prv) => [...prv, obj]);
        }
       })
    }
    
    function removeToCart(id){
        let updatedCart = cartItem.filter(obj => obj.id !==id);
        setCartItem([...updatedCart]);
    }

useEffect(() => {
  fetch(
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  )
    .then((res) => res.json())
    .then((data) => {
      // Create duplicates of the data array
      const duplicatedData1 = [...data];
      const duplicatedData2 = [...data];

      // Concatenate all three data arrays
      const combinedData = data.concat(duplicatedData1, duplicatedData2);

      // Set the combined data as the state
      setAllPhotos(combinedData);
    });
}, []);


  
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