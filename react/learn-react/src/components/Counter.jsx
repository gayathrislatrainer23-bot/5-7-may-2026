import React, { use, useState } from 'react'

function Counter() {
const [count, setCount] = useState(0)
const [msg,setMsg] = useState('')
if(count>10){
    setCount(10)
    setMsg("max limit 10")
}else if(count<0){
    setCount(0)
     setMsg("min limit 0")

}


  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <p>count :{count }</p>
        <button onClick={()=>setCount(count-1)}>-</button>
        <p>{msg}</p>
    </div>
  )
}

export default Counter;