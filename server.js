
// import express from 'express'
// import bodyParser from 'body-parser';
// import cors from 'cors'
// import nodemailer from 'nodemailer'
// import dotenv from 'dotenv'
// import User from './models/user.model.js'
// import connectDataBase from './db/mongoose.js'

// // dotenv.config();


// if (process.env.NODE_ENV !== 'production') {
//     dotenv.config({
//       path: '.env',
//     });
//   }

// // DataBase
// connectDataBase();



// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: "http://localhost:5174",
//     credentials: true,
    
// }));




// app.use(bodyParser.json());





// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SMPT_PASSWORD,
//     },
//   });
  
//   // Signup route
//   app.post('/signup', async (req, res) => {
//     try {
//         const { name, email, phoneNo } = req.body;

//     // Log the request body for debugging
//     console.log('Request body:', req.body);

//     // Check for missing fields
//     if (!name || !email || !phoneNo) {
//       console.log('Missing fields:', { name, email, phoneNo });
//       return res.status(400).json({ message: 'Missing required fields' });
//     }
  
//       // Create a new user
//       const newUser = new User({ name, email, phoneNo });
//       await newUser.save();
  
//       // Prepare the email content with user details
//       const mailOptions = {
//         from: process.env.SMPT_MAIL,
//         to: 'shafyhussain909@gmail.com',
//         subject: 'New User Signup Details',
//         text: `
//           A new user has signed up:
  
//           Name: ${name}
//           Email: ${email}
//           Phone Number: ${phoneNo}
//           Date of Signup: ${newUser.createdAt.toISOString()}
//         `,
//       };
  
//       // Send the email
//       await transporter.sendMail(mailOptions);
  
//       res.status(201).json({ message: 'User created and email sent with details!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error creating user or sending email' });
//     }
//   });



// // Basic Route
// app.get('/', (req, res) => res.send('HRM System API'));





// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(5000, () => console.log(`Server running on port 5000`));

// server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const User = require('./models/User.js');
// const sequelize = require('./config/database.js');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true,
// }));


// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// app.use(bodyParser.json());

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.SMPT_MAIL,
//     pass: process.env.SMPT_PASSWORD,
//   },
// });

// // Signup route
// app.post('/signup', async (req, res) => {
//   try {
//     const { name, email, phoneNo } = req.body;

//     // Log the request body for debugging
//     console.log('Request body:', req.body);

//     // Check for missing fields
//     if (!name || !email || !phoneNo) {
//       console.log('Missing fields:', { name, email, phoneNo });
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Create a new user
//     const newUser = await User.create({ name, email, phoneNo });

//     // Prepare the email content with user details
//     const mailOptions = {
//       from: process.env.SMPT_MAIL,
//       to: 'shafyhussain909@gmail.com',
//       subject: 'New User Signup Details',
//       text: `
//         A new user has signed up:

//         Name: ${name}
//         Email: ${email}
//         Phone Number: ${phoneNo}
//         Date of Signup: ${newUser.createdAt.toISOString()}
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: 'User created and email sent with details!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error creating user or sending email' });
//   }
// });

// // Basic Route
// app.get('/', (req, res) => res.send('HRM System API'));

// // Sync Sequelize models and start server
// sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }).catch(error => {
//   console.error('Unable to sync database:', error);
//   process.exit(1);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const User = require('./models/User.js');
const sequelize = require('./config/database.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "https://dev-enc.online/",
  credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMPT_MAIL,
    pass: process.env.SMPT_PASSWORD,
  },
});

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, phoneNo } = req.body;

    // Log the request body for debugging
    console.log('Request body:', req.body);

    // Check for missing fields
    if (!name || !email || !phoneNo) {
      console.log('Missing fields:', { name, email, phoneNo });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new user
    const newUser = await User.create({ name, email, phoneNo });

    // Prepare the email content with user details
    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: 'engrsyedusamaakhtar@gmail.com',
      subject: 'TA SIGNUP',
      text: `
        You have a signup on www.academians.co.uk

        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNo}
        Date of Signup: ${newUser.createdAt.toISOString()}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email'});
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json({ message: 'User created and email sent with details!' });
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error creating user or sending email' });
  }
});

// Basic Route
app.get('/', (req, res) => res.send('HRM System API'));

// Sync Sequelize models and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
  console.error('Unable to sync database:', error);
  process.exit(1);
});



























// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDataBase from './db/mongoose.js';
// import bodyParser from 'body-parser';
// import userRoutes from './controllers/user.controller.js';

// // Load environment variables
// dotenv.config();

// // Connect to the database
// connectDataBase();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
// }));

// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// // Routes
// app.use('/api/v1/user', userRoutes);

// app.get('/', (req, res) => res.send('HRM System API'));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDataBase from './db/mongoose.js';
// import bodyParser from 'body-parser';
// import userRoutes from './controllers/user.controller.js';

// // Load environment variables
// dotenv.config();


// Connect to the database
// connectDataBase();

// const app = express();

// Middleware
// app.use(express.json());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
// }));

// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// // Routes
// app.use('/api/v1/user', userRoutes);

// app.get('/', (req, res) => res.send('HRM System API'));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// require('dotenv').config();
// const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());

// // Define the route
// app.get('/', (req, res) => {
//   // Create a custom response similar to the given code
//   const message = 'It works!\n';
//   const version = 'NodeJS ' + process.versions.node + '\n';
//   const response = [message, version].join('');
  
//   // Send the response
//   res.send(response);
// });

// app.get('/about',(req,res)=>{
//     res.json("it is about page")
// })
// // Create HTTP server using Express app
// const server = http.createServer(app);

// // Listen on the specified port
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



// port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });