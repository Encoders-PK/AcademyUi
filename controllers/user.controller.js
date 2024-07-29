import express from "express";
import nodemailer from 'nodemailer';    
import User from "../models/user.model.js";

const router = express.Router();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.smptMail,
        pass: process.env.smptPass,
    },
});


router.post('/signup', async(req, res) => {
    try {
        const { name, email, phoneNo } = req.body;


        // Check for missing fields
        if (!name || !email || !phoneNo) {
            console.log('Missing fields:', { name, email, phoneNo });
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Create a new user
        const newUser = new User({ name, email, phoneNo });
        await newUser.save();

        // Prepare the email content with user details
        const mailOptions = {
            from: process.env.smptMail,
            to: 'shafyhussain909@gmail.com',
            subject: 'New User Signup Details',
            text: `
                A new user has signed up:

                Name: ${name}
                Email: ${email}
                Phone Number: ${phoneNo}
                Date of Signup: ${newUser.createdAt.toISOString()}
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'User created and email sent with details!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user or sending email' });
    }
})


export default router;