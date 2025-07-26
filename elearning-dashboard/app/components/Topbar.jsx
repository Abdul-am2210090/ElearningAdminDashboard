import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
export default function Topbar() {
  return (
    <div id="topbar">
      <p>Welcome username</p>
      <button id="logoutBTN"><FontAwesomeIcon icon={faDoorOpen}/>   Logout</button>
    </div>
  )
}
