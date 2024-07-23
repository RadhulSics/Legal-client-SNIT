import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../Assets/logo2.png";
import img2 from "../../Assets/Logout.png";


function BarcouncilNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing_custom_navbar" style={{ minHeight: '10vh' }} >
        <div className="container">
          <Link className="navbar-brand" to="#home">
            <img
              alt="Logo"
              src={img1}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Casecraft
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className='nav-item'><Link to='/BarCouncil-dashboard' className='nav-link mt-2 '>Dashboard</Link></li>
              <li className='nav-item'><Link to='#' className='nav-link'>
                <img
                  alt="Logo"
                  src={img2}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BarcouncilNav