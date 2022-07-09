import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { authActions } from 'features/counter/auth/authSlice';
import { useAppDispatch } from 'app/hooks';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';



function Header() {
    const dispatch = useAppDispatch();
    const handleLogoutClick = () => {
        dispatch(authActions.logout());
      };
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
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    Student Management
                </Typography>

                <Button color="inherit" onClick={handleLogoutClick}>
                    Logout
                </Button>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    );
}

export default Header;