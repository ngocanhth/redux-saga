import React from 'react';
import PropTypes from 'prop-types';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions } from '../authSlice';
import { Box, Button, CircularProgress, Paper, Typography } from '@mui/material';

LoginPage.propTypes = {

};

function LoginPage() {
    const dispatch = useAppDispatch();
    const isLogging = useAppSelector((state) => state.auth.logging);
  
    const handleLoginClick = () => {
        
        console.log('dispatch action');

      // TODO: Get username + pwd from login form
      dispatch(
        authActions.login({
          username: '',
          password: '',
        })
      );
    };
    return (
    <div className="login-secsion">
      <Paper elevation={1} className="">
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color="secondary" />} &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
    );
}

export default LoginPage;