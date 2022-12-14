import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({title}) {
    return (
        <nav className="navbar-nav navbar-dark bg-dark mb-3 p-3">
            <a href="/" className="navbar-brand d-flex justify-content-center">{title}</a>
            <ul className="navbar-nav d-flex">
                <div className="d-flex justify-content-around">
                <li className="nav-item active">
                    <Link to = "/workout" className = "nav-link">Workout</Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/blog" className = "nav-link">Blog</Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/github" className = "nav-link">Contact</Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/user" className = "nav-link">User</Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/add" className = "nav-link">Register</Link>
                </li>
                </div>
                
                
            </ul>
        </nav>
    );
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;
