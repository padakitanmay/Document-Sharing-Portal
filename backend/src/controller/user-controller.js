import User from "../models/user.js";
import bcrypt from "bcrypt";

// Controller function to handle user registration
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const username = req.body.username.toString();
        const hashed = await bcrypt.hash(password, 10);
        console.log(username);
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email, username });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "User with this email already exists" });
        }

        const newUser = new User({ email, username, password: hashed });
        console.log(newUser);
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Controller function to handle user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the password matches
        const passwordMatch = await user.checkPassword(password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = await user.generateToken();

        // Login successful
        res.status(200).json({
            message: "Login successful",
            user,
            status: 200,
            token,
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
};
const getChatsController = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error("Cant get all users", error);
        res.status(500).json({
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
};

export { registerUser, loginUser, getChatsController };
