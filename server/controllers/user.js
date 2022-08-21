// hashes passwords
import bcrypt from 'bcrypt';
// stores the users safely in the browser for some period of time; if the user leaves the site, they will still be logged in
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// all the POST data that you send can be accessed through req.body
export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist." });
        }
        
        // check if email is Northwestern email
        // if (!existingUser.email.includes("northwestern")) return res.status(400).json({ message: "Must be Northwestern email." });
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        // 'test' should be a secret string. store it in a .env file later
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        // result is the newly created User
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}


