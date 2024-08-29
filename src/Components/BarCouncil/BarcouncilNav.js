import React, { useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import img1 from "../../Assets/logo2.png";
import img2 from "../../Assets/Logout.png";

function BarcouncilNav() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("barcouncilId") === null) {
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(false);  
  };

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
              <li className="nav-item">
                <Link to="/BarCouncil-dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add_legal_policies" className="nav-link">
                  Legal Policies
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={logout} className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BarcouncilNav;
