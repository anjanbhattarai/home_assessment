import React from 'react'
import {ReactComponent as GroupPicture} from "../assets/icons/group.svg"
import "../App.css"

function Navbar() {
  return (
    <div className='NavHeader'>
      <GroupPicture className='group-picture'/>
    <p>USERS</p>
  </div>
  )
}

export default Navbar