import React from 'react'

function Navbar() {
  return (
    <div>
      <div>
        <img src='' alt='logo'/>
        <p>{aToken ? 'Admin' : 'Company'}</p>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default Navbar
