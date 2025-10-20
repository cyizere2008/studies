   require('dotenv').config();
   const express = require('express');
   const mongoose = require('mongoose');
   const mongodb_URI = process.env.MONGODB_URI;
   const cors = require('cors');
   const authRoutes = require('./routes/auth');

   const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('user', userSchema);



   const app = express();
   app.use(cors());
   app.use(express.json());

   mongoose.connect(mongodb_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => console.error('MongoDB connection error:', err));

function insertUser() {
  const newUser = new User({
    name: 'Cyizere hirwa cedric',
    email: 'cyizerecedric3@gmail.com',
    password: 'chc@123@',
  });

  newUser.save()
    .then((doc) => {
      console.log('User inserted:', doc);
    })
    .catch((err) => {
      console.error('Error inserting user:', err);
    });
}

   app.use('/api/auth', authRoutes);

   app.listen(5000, () => console.log('Server running on port 5000'));
   