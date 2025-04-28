import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import User from './models/userModel.js';

dotenv.config();
const app = express();

// app.get('/', (req, res) => {
//   res.send('Welcome to server!');
// });

app.post('/api/users', async (req, res) => {
    const user = req.body;

    if (!user.name || !user.email || !user.password) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).send({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).send({ message: 'Error creating user', error });
    }
});

// app.get('/test', (req, res) => {
//     res.status(200).send({ 
//         message: 'GET: Test API is working!'
//     });
// });


app.listen(3000, () => {
    connectDB();
    console.log('Server running at http://localhost:3000/');
});