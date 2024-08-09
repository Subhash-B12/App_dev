// src/components/ProfilePage/ProfilePage.js
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';
import { getUserProfile, updateUserProfile } from '../../api/profile'; 
import './ProfilePage.css';


const defaultTheme = createTheme();

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        setError('Error fetching profile data');
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      await updateUserProfile(profile);
      setOpen(true);
    } catch (error) {
      setError('Error updating profile');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            boxShadow: 3,
            marginTop: 5,
          }}
        >
          <Card sx={{ width: '100%', maxWidth: 600 }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{ width: 120, height: 120, mb: 2 }}
                  src="/path-to-avatar-image.jpg" // Placeholder for user avatar
                />
                <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                  User Profile
                </Typography>
                <Box component="form" noValidate onSubmit={handleSave} sx={{ width: '100%' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                  />
                  <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ mb: 2 }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Button
            fullWidth
            variant="text"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 3 }}
          >
            Back to Home
          </Button>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Profile updated successfully!
          </Alert>
        </Snackbar>
        {error && (
          <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={() => setError('')}>
            <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ProfilePage;
