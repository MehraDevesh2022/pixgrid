import React ,{createContext , useState , useEffect} from "react";
const  cartContext  = createContext();

function ContextProvider(props) {
     const [allPhotos, setAllPhotos] = useState();
    useEffect(() =>{
        fetch(
          "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        )
          .then((res) => res.json())
          .then((data) => setAllPhotos(data));
    },[])
     
  return (
    <cartContext.Provider value={{setAllPhotos}}>
       {props.children}
    </cartContext.Provider>
  )
}

export {ContextProvider , cartContext}