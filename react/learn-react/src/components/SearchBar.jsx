import React, { useState } from 'react'

function SearchBar() {
    const[query,setQuery]= useState('')
    const handleChange = (e)=>{

        console.log(e.target.value)
        setQuery(e.target.value)
    }
    
  return (
    <div>
 <p>{query}</p>
 <input type="text" value={query}  onChange={handleChange} />
    </div>
  )
}

export default SearchBar