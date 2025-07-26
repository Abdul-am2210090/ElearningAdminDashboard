import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen,faBars } from '@fortawesome/free-solid-svg-icons';
export default function Topbar({ toggleSidebar }) {
  return (
    <div id="topbar">
      <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} id='navBTN'/>
      <p>Welcome username</p>
      <button id="logoutBTN"><FontAwesomeIcon icon={faDoorOpen}/>   Logout</button>
    </div>
  )
}
