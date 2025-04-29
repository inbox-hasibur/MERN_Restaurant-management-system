import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import User from './models/userModel.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Welcome to server!');
// });

app.post('/api/users/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({name,email,password});
        await newUser.save() 
        res.status(201).json({ 
            message: 'User registered', user: newUser 
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ 
            message: 'Error registering user', error: error.message 
        });
    }
});

// app.get('/test', (req, res) => {
//     res.status(200).send({ 
//         message: 'GET: Test API is working!'
//     });
// });


app.listen(5000, () => {
    connectDB();
    console.log('Server running at http://localhost:5000/');
});