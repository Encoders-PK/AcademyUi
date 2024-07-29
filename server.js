
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
//     // methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     // allowedHeaders: ['Content-Type', 'Authorization'],
// }));
// // app.use("/",express.static("uploads"))
// // app.use("/", (req, res) => {
// //   res.send("Hello world!");
// // });




// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


// // Routes

// // import userRoutes from './controllers/userControllers.js'
// // import employeeRoutes from './routes/employee.js'








// // app.use('/api/v1/user', userRoutes);
// // app.use('/api/employees', employeeRoutes);


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
// // app.get('/', (req, res) => res.send('HRM System API'));





// // Start Server
// // const PORT = process.env.PORT || 5000;
// app.listen(5000, () => console.log(`Server running on port 5000`));




import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDataBase from './db/mongoose.js';
import bodyParser from 'body-parser';

// Load environment variables
dotenv.config();

// Connect to the database
connectDataBase();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

 app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


 //Route 

 import userRoutes from './controllers/user.controller.js'

app.use('/api/v1/user', userRoutes);


// Start Server

const PORT = process.env.port || 5000;
app.listen(5000, () => console.log(`Server running on port 5000`));
