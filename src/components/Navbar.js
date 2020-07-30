import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {

//render decides what is displayed on the page
render() {
    return (
        <nav className="navbar">
            {/* these links change the current route */}
            <NavLink to="/" className="navbar__link" >Home</NavLink>
            <NavLink to="/bees" className="navbar__link" >Bees</NavLink>
            <NavLink to="/caterpillars"className="navbar__link">Caterpillars</NavLink>
            <NavLink to="/ladybugs"className="navbar__link">Ladybugs</NavLink>
        </nav>
    )
}




}

export default Navbar;