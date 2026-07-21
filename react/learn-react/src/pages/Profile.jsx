import React, { useEffect, useState } from 'react'

function Profile() {
  const [ user, setUser]= useState(null)
  useEffect(()=>{   
    fetchData()
    console.log(user)
  },[])
let fetchData = async ()=>{
  try{
    let res = await fetch('https://jsonplaceholder.typicode.com/users/1')
     let data=  await res.json()
    //  console.log(data)
     setUser(data)

  }catch(err){
console.log(err.message)
  }


}

  return (
    <div>
      {
        user &&(
<>
<img src="" alt="" />
<p> <span>Name:</span>{user?.name}</p>
<p> <span>Name:</span>{user.email}</p>
</>
        )
      }
    </div>
  )
}

export default Profile