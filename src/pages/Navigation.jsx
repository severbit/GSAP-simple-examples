import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navbar'>
        <ul className='navbar_container'>
                <li className='navbar_item'>
                    <Link to='/to'>To</Link>
                </li>
                <li className='navbar_item'>
                    <Link to='/from'>From</Link>
                </li>
                <li className='navbar_item'>
                    <Link to='/fromto'>FromTo</Link>
                </li>
                <li className='navbar_item'>
                    <Link to='/default'>Default</Link>
                </li>
                <li className='navbar_item'>
                    <Link to='/timeline'>Timeline</Link>
                </li>
                <li className='navbar_item'>
                    <Link to='/scrolltrigger'>ScrollTrigger</Link>
                </li>
        </ul>
    </div>
  )
}

export default Navigation