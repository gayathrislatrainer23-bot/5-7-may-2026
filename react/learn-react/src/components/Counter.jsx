import React, {  useEffect, useState } from 'react'

function Counter() {
const [count, setCount] = useState(0)
const [msg,setMsg] = useState('')
// case:1
useEffect(()=>{
  console.log('case 1, run ebvery render')
})

// case:2
useEffect(()=>{
  console.log('case 2, run INITIAL render ONLY')
},[])
// case:3
useEffect(()=>{
  console.log('case 3, run INITIAL render ONLY')
},[msg])
// dependancy array
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <p>count :{count }</p>
        <button onClick={()=>setCount(count-1)}>-</button>

        <button onClick={()=>setMsg('MESSAGE CHANGED')}>CLICK</button>
        <p>{msg}</p>
    </div>
  )
}

export default Counter;

// if(count>10){
//     setCount(10)
//     setMsg("max limit 10")
// }else if(count<0){
//     setCount(0)
//      setMsg("min limit 0")

// }