import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expend-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">

            <div className="row">

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home pr-1"></i>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus pr-1"></i>
                  Add
              </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question pr-1"></i>
                  About
              </Link>
              </li>
            </div>
          </ul>

        </div>
      </div>
    </nav>
  );
};

// Default props
Header.proptotype = {
  branding: PropTypes.string.isRequired
}

export default Header;