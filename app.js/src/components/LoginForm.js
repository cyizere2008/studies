   import React, { useState } from 'react';
   import {
     TextField, Button, Box, Typography, Paper, CircularProgress, Alert, Fade,
   } from '@mui/material';
   import { Email, Lock, Login } from '@mui/icons-material';
   import axios from 'axios';

   const LoginForm = () => {
     const [formData, setFormData] = useState({ email: '', password: '' });
     const [loading, setLoading] = useState(false);
     const [message, setMessage] = useState('');
     const [errors, setErrors] = useState({});

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
       setErrors({ ...errors, [e.target.name]: '' }); // Clear errors on change
     };

     const validate = () => {
       const newErrors = {};
       if (!formData.email) newErrors.email = 'Email is required';
       if (!formData.password) newErrors.password = 'Password is required';
       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = async (e) => {
       e.preventDefault();
       if (!validate()) return;
       setLoading(true);
       setMessage('');
       try {
         const res = await axios.post('http://localhost:5000/api/auth/login', formData);
         setMessage(res.data.message);
         localStorage.setItem('token', res.data.token); // Store JWT
         // Redirect or handle success (e.g., navigate to dashboard)
       } catch (err) {
         setMessage(err.response?.data?.message || 'Login failed');
       } finally {
         setLoading(false);
       }
     };

     return (
       <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="100vh"
         sx={{ background: 'linear-gradient(135deg, #2b2b2eff 0%, #39393aff 100%)' }}
       >
         <Fade in timeout={1000}>
           <Paper
             elevation={10}
             sx={{
               p: 4,
               width: 400,
               borderRadius: 3,
               background: 'rgba(255, 255, 255, 0.9)',
               backdropFilter: 'blur(10px)',
             }}
           >
             <Typography variant="h4" align="center" gutterBottom sx={{ color: '#333' }}>
               Welcome Back
             </Typography>
             <form onSubmit={handleSubmit}>
               <TextField
                 fullWidth
                 label="Email"
                 name="email"
                 type="email"
                 value={formData.email}
                 onChange={handleChange}
                 error={!!errors.email}
                 helperText={errors.email}
                 InputProps={{ startAdornment: <Email sx={{ mr: 1, color: '#3c3d40ff' }} /> }}
                 sx={{ mb: 2, '& .MuiOutlinedInput-root:hover': { borderColor: '#3c3d40ff' } }}
               />
               <TextField
                 fullWidth
                 label="Password"
                 name="password"
                 type="password"
                 value={formData.password}
                 onChange={handleChange}
                 error={!!errors.password}
                 helperText={errors.password}
                 InputProps={{ startAdornment: <Lock sx={{ mr: 1, color: '#3c3d40ff' }} /> }}
                 sx={{ mb: 3, '& .MuiOutlinedInput-root:hover': { borderColor: '#3c3d40ff' } }}
               />
               <Button
                 fullWidth
                 type="submit"
                 variant="contained"
                 startIcon={loading ? <CircularProgress size={20} /> : <Login />}
                 disabled={loading}
                 sx={{
                   background: 'linear-gradient(45deg, #3c3d40ff.30%, #3c3d40ff.90%)',
                   '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
                 }}
               >
                 {loading ? 'Logging In...' : 'Login'}
               </Button>
             </form>
             {message && (
               <Alert severity={message.includes('successful') ? 'success' : 'error'} sx={{ mt: 2 }}>
                 {message}
               </Alert>
             )}
           </Paper>
         </Fade>
       </Box>
     );
   };

   export default LoginForm;
   