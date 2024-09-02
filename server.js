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
// order-now route
// app.post('/order-now', (req, res) => {
//   const { name, email, phone, total_amount } = req.body;

//   // Validate required fields
//   if (!name || !email || !phone || !total_amount) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   const prefix = 'TA'; // Set the prefix you want to use, e.g., 'TA' for Tha

//   // Query to get the last order number with the specific prefix
//   const getLastOrderNumberQuery = `
//     SELECT order_number 
//     FROM order_now 
//     WHERE order_number LIKE ? 
//     ORDER BY id DESC 
//     LIMIT 1
//   `;

//   db.query(getLastOrderNumberQuery, [`${prefix}%`], (err, results) => {
//     if (err) {
//       console.error('Error fetching last order number:', err);
//       return res.status(500).json({ message: 'Error fetching last order number' });
//     }

//     let newOrderNumber;
//     if (results.length > 0) {
//       const lastOrderNumber = results[0].order_number;
//       const lastOrderId = parseInt(lastOrderNumber.split('-')[1], 10);
//       // Increment the last order ID for the new order number
//       newOrderNumber = `${prefix}-${lastOrderId + 1}`;
//     } else {
//       // If there are no existing orders, start with a default
//       newOrderNumber = `${prefix}-5001`;
//     }

//     console.log(newOrderNumber); // Output the new order number
//     // Query to insert the new order
//     const insertOrderQuery = 'INSERT INTO order_now (name, email, phone, order_number, total_amount) VALUES (?, ?, ?, ?, ?)';
//     db.query(insertOrderQuery, [name, email, phone, newOrderNumber, total_amount], (err, result) => {
//       if (err) {
//         console.error('Error inserting order:', err);
//         return res.status(500).json({ message: 'Error creating order' });
//       }

//       // Set up the email options
//       const mailOptions = {
//         from: process.env.SMTP_MAIL, // Ensure this environment variable is set
//         to: 'engrsyedusamaakhtar@gmail.com',
//         subject: 'New Order Placed',
//         text: `
//           A new order has been placed on www.academians.co.uk:

//           Name: ${name}
//           Email: ${email}
//           Phone: ${phone}
//           Order Number: ${newOrderNumber}
//           Total Amount: ${total_amount}
          
//         `,
//       };

//       // Send the email
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error('Error sending email:', error);
//           return res.status(500).json({ message: 'Error sending email' });
//         } else {
//           console.log('Email sent:', info.response);
//           res.status(201).json({ 
//             message: 'Order created and email sent with details!', 
//             order: { 
//               name, 
//               email, 
//               phone, 
//               order_number: newOrderNumber, 
//               total_amount 
//             } 
//           });
//         }
//       });
//     });
//   });
// });

// app.get('/last-order-number', (req, res) => {
//   const { prefix } = req.query;

//   // Define the order of prefixes to check
//   const prefixesToCheck = prefix ? [prefix] : ['Ta', 'Tha', 'Aly'];

//   // Function to get the last order number based on the prefix
//   const getLastOrderNumber = (prefixIndex = 0) => {
//     if (prefixIndex >= prefixesToCheck.length) {
//       return res.json({ order_number: 'No orders found' });
//     }

//     const currentPrefix = prefixesToCheck[prefixIndex];
//     const getLastOrderNumberQuery = `
//       SELECT order_number 
//       FROM order_now 
//       WHERE order_number LIKE ? 
//       ORDER BY id DESC 
//       LIMIT 1
//     `;

//     db.query(getLastOrderNumberQuery, [`${currentPrefix}%`], (err, results) => {
//       if (err) {
//         console.error('Error fetching last order number:', err);
//         return res.status(500).json({ message: 'Error fetching last order number' });
//       }

//       if (results.length > 0) {
//         const lastOrderNumber = results[0].order_number;
//         return res.json({ order_number: lastOrderNumber });
//       } else {
//         // Recursively try the next prefix
//         getLastOrderNumber(prefixIndex + 1);
//       }
//     });
//   };

//   // Start the process
//   getLastOrderNumber();
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
  origin: "https://www.academians.co.uk",
  //  origin: "http://localhost:5173",
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
  const { name, email, phone } = req.body;

  console.log('Request body:', req.body);

  if (!name || !email || !phone) {
    console.log('Missing fields:', { name, email, phone });
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const query = 'INSERT INTO signup (name, email, phone) VALUES (?, ?, ?)';
  db.query(query, [name, email, phone], (err, result) => {
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
        Phone Number: ${phone}
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



// Assuming you have a table named 'orders' with fields: id, name, email, phone, order_number, total_amount

app.post('/order-now', (req, res) => {
  const { name, email, phone, total_amount } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !total_amount) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Query to get the last order number from the ta_order_now table
  const getLastOrderNumberQuery = 'SELECT order_number FROM ta_order_now ORDER BY id DESC LIMIT 1';

  db.query(getLastOrderNumberQuery, (err, results) => {
    if (err) {
      console.error('Error fetching last order number:', err);
      return res.status(500).json({ message: 'Error fetching last order number' });
    }

    let newOrderNumber;
    if (results.length > 0) {
      const lastOrderNumber = results[0].order_number;

      
      const orderNumberPart = parseInt(lastOrderNumber.split('-')[1], 10);

      if (isNaN(orderNumberPart)) {
      
        return res.status(500).json({ message: 'Invalid last order number format' });
      } else {
        
        const newNumberPart = orderNumberPart + 1;
        newOrderNumber = `TA-${newNumberPart}`;
      }
    } else {
    
      newOrderNumber = 'TA-80000';
    }

    // Query to insert the new order
    const insertOrderQuery = 'INSERT INTO ta_order_now (name, email, phone, order_number, total_amount) VALUES (?, ?, ?, ?, ?)';
    db.query(insertOrderQuery, [name, email, phone, newOrderNumber, total_amount], (err, result) => {
      if (err) {
        console.error('Error inserting order:', err);
        return res.status(500).json({ message: 'Error creating order' });
      }

      // Set up the email options
      const mailOptions = {
        from: process.env.SMTP_MAIL,  
        to: 'engrsyedusamaakhtar@gmail.com',
        subject: 'New Order Placed',
        text: `
          A new order has been placed on www.academians.co.uk:

          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Order Number: ${newOrderNumber}
          Total Amount: ${total_amount}
          Date of Order: ${new Date().toISOString()}
        `,
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ message: 'Error sending email' });
        } else {
          console.log('Email sent:', info.response);
          res.status(201).json({ 
            message: 'Order created and email sent with details!', 
            order: { 
              name, 
              email, 
              phone, 
              order_number: newOrderNumber, 
              total_amount 
            } 
          });
        }
      });
    });
  });
});

app.get('/last-order-number', (req, res) => {
  // Query to get the last order number
  const getLastOrderNumberQuery = 'SELECT order_number FROM ta_order_now ORDER BY id DESC LIMIT 1';

  db.query(getLastOrderNumberQuery, (err, results) => {
    if (err) {
      console.error('Error fetching last order number:', err);
      return res.status(500).json({ message: 'Error fetching last order number' });
    }

    if (results.length > 0) {
      const lastOrderNumber = results[0].order_number;

      
      const orderNumberPart = parseInt(lastOrderNumber.split('-')[1], 10);
      
      if (isNaN(orderNumberPart)) {
        
        res.json({ order_number: 'Invalid order number format' });
      } else {
        // Increment the numeric part
        const newNumberPart = orderNumberPart + 1;
        const newOrderNumber = `TA-${newNumberPart}`;
        res.json({ order_number: newOrderNumber });
      }
    } else {
      
      res.json({ order_number: 'TA-80000' });
    }
  });
});






// Basic Route
app.get('/', (req, res) => res.send('HRM System API'));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



































