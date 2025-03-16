import User from "../model/user_model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({ message: "User already Exist. "});
        }
         const hashPassword =await bcryptjs.hash(password, 10);
         const createUser = new User({
            fullname,
            email,
            password: hashPassword,
         });
        await createUser.save();
         res.status(201).json({message: "User Created Sucessfully",
            user: {
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email,

            }
         });
        
    } catch (error) {
        console.log("Error: "+ error.message);
        res.status(400).json({ message: "Internal server Issue"});
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcryptjs.compare(password, user.password);

        // Check if the password matches
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // If everything is correct, return a success response
        res.status(200).json({
            message: "Login Successful.",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error in login route:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};
