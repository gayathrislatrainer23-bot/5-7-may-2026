import { useState } from "react"

function Show() {
    // let isShow = true;
 const[isShow,setIsShow]=useState(false)
 console.log(isShow)
  
  return (
    <div>
     {
        isShow && (
            <p>this is me</p>
        )
     }
      
<button onClick={()=> setIsShow(true)} >show</button>
<button onClick={()=> setIsShow(false)} >hide</button>
    </div>
  )
}

export default Show