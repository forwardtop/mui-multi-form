import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
const PasswordProtected = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const correctPassword = 'greenKangaroo@123'; // Replace this with your actual password

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      // If password is correct, redirect to the target page
      navigate('/form-lists'); // Replace '/target-path' with the actual target route
    } else {
      // Show an error if the password is incorrect
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handlePasswordSubmit}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 36 }}
    >
    <LockIcon fontSize="large" sx={{ mb: 2 }} />
      <Typography variant="h6" gutterBottom sx={{ mb:3  }}>
      This content is password protected. To view it please enter your password below:
      </Typography>
      <Typography variant="h6" gutterBottom>
        Enter Password : 
      </Typography>
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error}
        helperText={error ? 'Incorrect password. Please try again.' : ''}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default PasswordProtected;
