import mongoose from "mongoose";
import { UserSchema } from "../models/userModel.js";


const User = mongoose.model('User', UserSchema);

const registerUser = async (req, res) => {

   /** TODO(Create User registration here_) */
   // 1 Verify User information from DB
   // 2. return existing user message if user is existing in DB
   // 3. if user is not found. proceed in inserting NEW user info into DB
   // 4. return 200 response as user is newly created

   const { username, password, email } = req.body;

   try {
    
        const userExists = await User.findOne({ email});

        if (userExists) return res.status(400).json({ message: "User already exists"});


        const user = new User({ username, password, email });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });

   } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
   }

}




export default registerUser;