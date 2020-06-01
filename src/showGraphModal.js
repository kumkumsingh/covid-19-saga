import { useState } from 'react'

 const showGraphModal = () =>{
     const[isShowing , setIsShowing] = useState(false);
     function toggle(){
        console.log("isShowing value before :", isShowing)
        setIsShowing(!isShowing)
        console.log("isShowing value after :", isShowing)
     }
    return {
    isShowing, 
    toggle
    }
    
}
export default showGraphModal