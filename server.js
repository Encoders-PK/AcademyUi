// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const User = require('./models/User.js');
// const PhoneLead = require('./models/PhoneLead.js'); 
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
//       to: 'engrsyedusamaakhtar@gmail.com',
//       subject: 'TA SIGNUP',
//       text: `
//         You have a signup on www.academians.co.uk

//         Name: ${name}
//         Email: ${email}
//         Phone Number: ${phoneNo}
//         Date of Signup: ${newUser.createdAt.toISOString()}
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ message: 'Error sending email'});
//       } else {
//         console.log('Email sent:', info.response);
//         res.status(201).json({ message: 'User created and email sent with details!' });
//       }
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Error creating user or sending email' });
//   }
// });

// app.post('/phonelead', async (req, res) => {
//   try {
//     const { number } = req.body;

//     console.log('Request body:', req.body);

//     if (!number) {
//       console.log('Missing fields:', { number });
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     const newPhoneLead = await PhoneLead.create({ number });

//     // Prepare the email content with phone lead details
//     const mailOptions = {
//       from: process.env.SMPT_MAIL,
//       to: 'engrsyedusamaakhtar@gmail.com',  
//       subject: 'TA Phone Lead',
//       text: `
//         You have a  phone lead  on www.academians.co.uk:

//         Phone Number: ${number}
//         Date of Lead: ${newPhoneLead.createdAt.toISOString()}
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ message: 'Error sending email' });
//       } else {
//         console.log('Email sent:', info.response);
//         res.status(201).json({ message: 'Phone lead created and email sent with details!', phoneLead: newPhoneLead });
//       }
//     });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Error creating phone lead or sending email' });
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

require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
const mysql = require('mysql2');

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "http://dev-enc.online",
  credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());

// Setup MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('Unable to connect to MySQL:', err);
    process.exit(1);
  } else {
    console.log('Successfully connected to MySQL');
  }
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMPT_MAIL,
    pass: process.env.SMPT_PASSWORD,
  },
});

// Signup route
app.post('/signup', (req, res) => {
  const { name, email, phoneNo } = req.body;

  console.log('Request body:', req.body);

  if (!name || !email || !phoneNo) {
    console.log('Missing fields:', { name, email, phoneNo });
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const query = 'INSERT INTO users (name, email, phoneNo) VALUES (?, ?, ?)';
  db.query(query, [name, email, phoneNo], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ message: 'Error creating user' });
    }

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: 'engrsyedusamaakhtar@gmail.com',
      subject: 'TA SIGNUP',
      text: `
        You have a signup on www.academians.co.uk

        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNo}
        Date of Signup: ${new Date().toISOString()}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json({ message: 'User created and email sent with details!' });
      }
    });
  });
});

// Phone Lead route
app.post('/phonelead', (req, res) => {
  const { number } = req.body;

  console.log('Request body:', req.body);

  if (!number) {
    console.log('Missing fields:', { number });
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const query = 'INSERT INTO phoneleads (number) VALUES (?)';
  db.query(query, [number], (err, result) => {
    if (err) {
      console.error('Error inserting phone lead:', err);
      return res.status(500).json({ message: 'Error creating phone lead' });
    }

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: 'engrsyedusamaakhtar@gmail.com',
      subject: 'TA Phone Lead',
      text: `
        You have a phone lead on www.academians.co.uk:

        Phone Number: ${number}
        Date of Lead: ${new Date().toISOString()}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json({ message: 'Phone lead created and email sent with details!', phoneLead: { number } });
      }
    });
  });
});

// Basic Route
app.get('/', (req, res) => res.send('HRM System API'));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




























