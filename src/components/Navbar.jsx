import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">GuftGu</span>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            <span>Chonky</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar