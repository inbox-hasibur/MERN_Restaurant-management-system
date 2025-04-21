import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to server!');
});
app.get('/foods', (req, res) => {
    res.send('Foods API is working!');
});

app.get('/test', (req, res) => {
    res.status(200).send({ 
        message: 'GET: Test API is working!'
    });
});


app.listen(3000, () => {
    connectDB();
    console.log('Server running at http://localhost:3000/');
});