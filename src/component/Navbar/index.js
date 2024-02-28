import React, {useState} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {MdArrowDropDown} from 'react-icons/md'
import './index.css'

const Navbar = () => {
  const [showActive, setShowActive] = useState(0)

  return (
    <div className="nav-container">
      <ul className="nav-content">
        <li
          onClick={() => setShowActive(0)}
          className={`${showActive === 0 && 'nav-active'}`}
        >
          Bid
        </li>
        <li
          onClick={() => setShowActive(1)}
          className={`${showActive === 1 && 'nav-active'}`}
        >
          POD
        </li>
        <li
          onClick={() => setShowActive(2)}
          className={`${showActive === 2 && 'nav-active'}`}
        >
          Vendor
        </li>
        <li
          onClick={() => setShowActive(3)}
          className={`${showActive === 3 && 'nav-active'}`}
        >
          User
        </li>
        </ul>
        <div className="nav-user-container">
          <FaUserCircle />
          <p
            className={`${showActive === 4 && 'nav-active'}`}
            onClick={() => setShowActive(4)}
          >
            Freight EG
          </p>
          <MdArrowDropDown />
        </div>
    </div>
  )
}

export default Navbar
