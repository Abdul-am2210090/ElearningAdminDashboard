import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SummaryCard({ details }) {
  return (
    <div className="card sumCard">
      <p className='cardTitle'>{details.title}</p>
      <div className='cardContent'>
        <p>{details.count}</p>
        <div className='icon-bg'><FontAwesomeIcon icon={details.icon} size='2xl' /></div>
      </div>
    </div>
  )
}
