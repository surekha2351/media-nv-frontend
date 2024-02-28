import React, {useState} from 'react'
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import './index.css'

const Sidebar = () => {
  const [active, setActive] = useState(0)
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <div className="logo" />
        <p>Logo</p>
      </div>
      <div className="sidebar-contents">
        <div className="sidebar-top-container">
          <div
            className={`sidebar-top-items ${
              active === 0 && 'sidebar-active side-boder'
            }`}
            onClick={() => setActive(0)}
          >
            <BsFillGrid1X2Fill /> <p>Bid</p>
          </div>
          <div
            className={`sidebar-top-items ${active === 1 && 'sidebar-active'}`}
            onClick={() => setActive(1)}
          >
            <BsFillGrid1X2Fill /> <p>POD</p>
          </div>
          <div
            className={`sidebar-top-items ${active === 2 && 'sidebar-active'}`}
            onClick={() => setActive(2)}
          >
            <BsFillGrid1X2Fill /> <p>Vendor</p>
          </div>
          <div
            className={`sidebar-top-items ${active === 3 && 'sidebar-active'}`}
            onClick={() => setActive(3)}
          >
            <BsFillGrid1X2Fill /> <p>User</p>
          </div>
        </div>

        {/* bottom */}
        <div className="sidebar-bottom-container">
          <div
            className={`sidebar-bottom-items ${
              active === 4 && 'sidebar-active'
            }`}
            onClick={() => setActive(4)}
          >
            <BsFillGrid1X2Fill /> <p>Settings</p>
          </div>
          <div
            className={`sidebar-bottom-items ${
              active === 5 && 'sidebar-active side-boder'
            }`}
            onClick={() => setActive(5)}
          >
            <BsFillGrid1X2Fill /> <p>Profile</p>
          </div>
          <div
            className={`sidebar-bottom-items ${
              active === 6 && 'sidebar-active'
            }`}
            onClick={() => setActive(6)}
          >
            <BsFillGrid1X2Fill /> <p>Contact Us</p>
          </div>
          <div
            className={`sidebar-bottom-items ${
              active === 7 && 'sidebar-active'
            }`}
            onClick={() => setActive(7)}
          >
            <BsFillGrid1X2Fill /> <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
