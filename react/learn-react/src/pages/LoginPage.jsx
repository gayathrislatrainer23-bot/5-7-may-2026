import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({isLoggin})=>{
    const [name,setName]=useState('')
    const [date,setDate]=useState('')
    const [gender,setGender]=useState('')
    const navigate = useNavigate()
    console.log(name)
    const handleSubmit= async (e)=>{
     e.preventDefault() 
//    alert(`haii, ${name}  , ${date} ${gender}`)
           let response =await  fetch('https://dummyjson.com/posts',{name,date,gender})
           console.log(response)
                     const data =  await response.json()
                     console.log(data)
                    if( response.ok){
                        navigate('/profile')
                    }else{
                         navigate('/')
                    }
    }

  return (
   <>
   <form  onSubmit={handleSubmit}>
    <div className="">
        <label htmlFor="">Name:</label>
        <input type="text"  placeholder='enter your name....' value={name}  onChange={(e)=> setName(e.target.value)} />
    </div> 
    {/* email */}
    <div className="">
        <input type="date" name="" id="" value={date}  onChange={(e)=>setDate(e.target.value)}/>
    </div>
    <div className="">
        <span>Gender:</span>
        <input type="radio" name="gender" id="male" value={'male'} checked={gender=== 'male'}  onChange={(e)=>setGender(e.target.value)}/>
        <label htmlFor="male">male</label>
        <input type="radio" name="gender" id="female" value={'female'} checked={gender=== 'female'}    onChange={(e)=>setGender(e.target.value)}/>
            <label htmlFor="female">female</label>
    </div>
    <div className="">

        <button type='submit'>submit</button>
    </div>
   </form>

   </>
  )
   
}

export default LoginPage;