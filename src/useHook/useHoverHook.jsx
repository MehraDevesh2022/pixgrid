import React,{useState , useContext , useEffect , useRef} from 'react'

function useHoverHook() {
  const [ishovered, setIshovered] = useState(false);
   const ref  = useRef(null);

  // setIshovered =>

  function enter(){
     setIshovered(true);
  }
  function leave(){
     setIshovered(false);
  }
  useEffect( () =>{
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseout", leave);
  },[])

   return [ishovered , ref]
}

export default useHoverHook