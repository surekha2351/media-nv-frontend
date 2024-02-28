import React from 'react'

import {FaCalendar} from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import {BsTruckFrontFill, BsFillBoxFill} from 'react-icons/bs'
import {IoPersonSharp} from 'react-icons/io5'
import {IoIosCall} from 'react-icons/io'
import './index.css'

const Bids = () => (
  <div className="bid-view-datails">
    <div className="start-container">
      <div className="bid-nu-container">
        <p className="bid-nu-title">
          Bid No: <span className="bid-nu">16515120650125</span>
        </p>
        <p className="bid-name">(Sander Yadav)</p>
      </div>
      <div className="start-container-contents">
        <div className="location-cotainer">
          <span className="green-loaction" />
          <span className="vartical-line" />
          <FaLocationDot className="location-icon-red" />
        </div>
        <div className="location-deatails-container">
          <div className="lacation-to-container">
            <p className="lacation-to">
              Manesar, Gurugram,{' '}
              <span className="lacation-to-city">Haryana</span>
            </p>
            <div className="loading-container">
              <p className="loading-point">Loading Point:</p>
              <div className="loading-point-loaction">
                <p>Ramchandra Ramniwas oil mill,</p>
                <p>Alwar, Rajasthan</p>
              </div>
            </div>
          </div>
          <div className="loaction-from-container">
            <p className="lacation-from">
              Kotputli, <span className="lacation-from-city">Rajasthan</span>
            </p>
            <div className="lading-container">
              <p className="unloading-point">Unloading Point:</p>
              <div className="unloading-point-loaction">
                <p>Ramchandra Ramniwas oil mill,</p>
                <p>Alwar, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="middle-container">
      <div className="vehical-data-container vehical-date-container">
        <FaCalendar />
        <p>Vechicle loading data: 17/02/2024</p>
      </div>
      <div className="vehical-data-container dark-blue">
        <BsTruckFrontFill />
        <p>
          Vehical Type{' '}
          <span className="light-blue">20 ft Truck (Clode Body)</span>
        </p>
        <p className="cng">CNG</p>
      </div>
      <div className="vehical-data-container dark-blue">
        <BsFillBoxFill />
        <p>
          Material: <span className="light-blue">Agricultural Products</span>
        </p>
        <p>
          Weight: <span className="light-blue">14 Tonnes</span>
        </p>
      </div>
      <div className="requst-expiry-date-container">
        <div className="vehical-data-container dark-blue">
          <FaCalendar />
          <p>
            Request Date: <span className="light-blue">15/02/2024</span>
          </p>
        </div>
        <div className="vehical-data-container dark-blue">
          <FaCalendar />
          <p>
            Expiry Date: <span className="light-blue">15/02/2024</span>
          </p>
        </div>
      </div>
      <p className="dark-blue">
        Remarks: <span className="light-blue">Urgant Delivery</span>
      </p>
    </div>
    {/* end container */}
    <div className="end-container">
      <div className="end-container-contents">
        <IoPersonSharp />
        <p>
          Assigned Staff: <span className="light-blue">Rahul Pandey</span>
        </p>
      </div>
      <div className="end-container-contents">
        <IoIosCall />
        <p>
          Phone number: <span className="light-blue">+91 332423442442</span>
        </p>
      </div>
      <p className="dark-blue">
        Target Price: <span className="light-blue">Rs 5000</span>
      </p>
      <p className="dark-blue">
        Number of Bider for this Bid: <span className="light-blue">54</span>
      </p>
      <p className="dark-blue">View Details</p>
    </div>
  </div>
)

export default Bids
