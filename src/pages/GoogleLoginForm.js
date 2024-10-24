import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = '861551824962-571poec9cflt0rfk2418rsf6m6je63pr.apps.googleusercontent.com'; // Replace with your Google Client ID

const GoogleLoginForm = () => {
    const navigate = useNavigate();
  const onSuccess = (response) => {
    console.log('Login Success! User:', response.profileObj);
    navigate('/form-lists');
  };

  const onFailure = (response) => {
    console.log('Login Failed! Response:', response);
  };

  return (
    <Box
      sx={{
        width: '300px',
        margin: 'auto',
        marginTop: '100px',
        padding: '2rem',
        boxShadow: 3,
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Google Login
      </Typography>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            *Your information is safe with us
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GoogleLoginForm;
