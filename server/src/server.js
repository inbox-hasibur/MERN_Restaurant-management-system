import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: err.message
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on http://localhost:${PORT}`)
})