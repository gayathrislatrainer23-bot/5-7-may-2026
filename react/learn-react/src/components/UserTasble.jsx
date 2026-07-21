import React, { useEffect, useState } from 'react'

function UserTasble() {
 const [ users, setUsers]= useState(null)
   useEffect(()=>{   
     fetchData()
     console.log(users)
   },[])
 let fetchData = async ()=>{
   try{
     let res = await fetch('https://jsonplaceholder.typicode.com/users')
      let data=  await res.json()
     //  console.log(data)
      setUsers(data)
 
   }catch(err){
 console.log(err.message)
   }
 
 
 }
 
   return (
     <div>
 <table border={2}>
        <thead>
        <tr >
            <th>name</th>
            <th>email</th>
            <th>address</th>
         
        </tr>
    </thead>
    {
        users && 
     
        users.map((user,i)=>(

<>
    <tbody>
        <tr key={i}>
<td>{user?.name}</td>
<td>{user?.email}</td>
<td>
   
        <p>
            
            <span> {user?.address?.street},</span>
            <span> {user?.address?.suite},</span>
            <span> {user?.address?.city}</span>
       </p>
  
</td>

        </tr>
    </tbody>
       </>
        ))

    }
 </table>
     </div>
   )
}

export default UserTasble