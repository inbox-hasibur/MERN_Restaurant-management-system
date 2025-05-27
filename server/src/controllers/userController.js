import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';


// login user
const loginUser = async (req, res) => {

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Cheacking user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: 'User already exists' });
        }

        // Validating email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Invalid email format' });
        }

        if(password.length < 8) {
            return res.json({ success: false, message: 'Password is too short!' });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userModel({
            name:name,
            email:email,
            password:hashedPassword,
        });
        
        const user = await user.save();
        const token = createToken(user._id)
        res.json({success: true, token});
    }
    catch (error) {
        console.log(error);
        return res.json({ success: false, message: 'Error' });
    }
}

export { loginUser, registerUser };