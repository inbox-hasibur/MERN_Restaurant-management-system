import express from 'express';
import { loginUser, registerUser, getProfile } from '../controllers/userController.js';

const userRouter = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);

export default userRouter;