import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/flights">Flights</Link></li>
                <li><Link to="/seats">Seats</Link></li>
                <li><Link to="/sign-in">Sign In</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar; 