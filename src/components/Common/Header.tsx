import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';



function Header() {
    return (
        <div className="header">
            <nav
                style={{
                    borderBottom: '1px solid',
                    paddingBottom: '1rem'
                }}
            >
                <Link to="login">Login</Link>
                <Link to="admin">Dashboard</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;