   const express = require('express');
   const bcrypt = require('bcryptjs');
   const jwt = require('jsonwebtoken');
   const User = require('../models/user');

   const router = express.Router();

   // Register endpoint (for testing; add users to DB)
   router.post('/register', async (req, res) => {
     const { email, password } = req.body;
     const hashedPassword = await bcrypt.hash(password, 10);
     const user = new User({ email, password: hashedPassword });
     await user.save();
     res.status(201).json({ message: 'User registered' });
   });


   

   // Login endpoint
   router.post('/login', async (req, res) => {
     const { email, password } = req.body;
     const user = await User.findOne({ email });
     if (!user || !(await bcrypt.compare(password, user.password))) {
       return res.status(401).json({ message: 'Invalid credentials' });
     }
     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
     res.json({ token, message: 'Login successful' });
   });

   module.exports = router;
   