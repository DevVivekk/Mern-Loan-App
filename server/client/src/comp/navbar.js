import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className='navbar' style={{"position":"relative"}}>
 
        <NavLink id='id1' className='steps act'>Step 1</NavLink>
        <NavLink id='id2' className='steps'>Step 2</NavLink>
        <NavLink id='id3' className='steps'>Step 3</NavLink>
        <Outlet/>
    
    </div>
  )
}

export default Navbar