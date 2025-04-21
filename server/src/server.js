import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
//console.log(process.env.MONGO_URI);
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
  console.log('Server running at http://localhost:3000/');
});