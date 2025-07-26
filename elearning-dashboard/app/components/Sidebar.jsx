"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells, faBookOpen, faUsers, faGear, faCircleUser } from '@fortawesome/free-solid-svg-icons';
export default function Sidebar() {
  const [index, setIndex] = useState(0);

  return (
    <div id="sidebar">
      <div id="userWraper"><FontAwesomeIcon icon={faCircleUser} size="4x" /> <p>username</p></div>
      <ul>
        <li className={`navItem ${index == 0 ? "selectedNav" : ""}`} onClick={() => setIndex(0)}>
            <Link href={"/"}>
              <FontAwesomeIcon icon={faTableCells} size="2xl" /> Dashboard
            </Link>
        </li>
        <li className={`navItem ${index == 1 ? "selectedNav" : ""}`} onClick={() => setIndex(1)}>
            <Link href={"/"}> <FontAwesomeIcon icon={faBookOpen} size="2xl" /> Courses</Link>
        </li>
        <li className={`navItem ${index == 2 ? "selectedNav" : ""}`} onClick={() => setIndex(2)}>
            <Link href={"/"}> <FontAwesomeIcon icon={faUsers} size="2xl" /> Users</Link>
        </li>
        <li className={`navItem ${index == 3 ? "selectedNav" : ""}`} onClick={() => setIndex(3)}>
            <Link href={"/"}> <FontAwesomeIcon icon={faGear} size="2xl" /> Settings</Link>
        </li>
      </ul>
    </div>
  );
}
