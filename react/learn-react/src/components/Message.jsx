import React, { useState } from 'react'

function Message() {
    // let message = ' hello'
 const [message, setMessage] = useState('hello')
 const [age, setAge] = useState(30)

    const handleMessage = ()=>{
     setMessage('hai')
    }
  return (
    <div>
        {message}
        <button onClick={handleMessage}>change message</button>
        <br />
        {age}
        <button onClick={()=> setAge(age+1)}>change age</button>
        
        </div>
  )
}

export default Message