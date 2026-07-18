import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to='/login' >Login</Link>
      <Link to='/' >home</Link>
      <br />
      <Link to='/register' >register</Link>
      <br />
       <Link to='/profile' >profile</Link>
      <br />
      <Link to='/counter' >counter</Link>
    </div>
  )
}

export default Navbar