import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserSchema } from "../models/userModel.js";

const User = mongoose.model('User', UserSchema);

const userLogin = async (req, res) => {

    const {username, password} = req.body;
    const user = new User({username, password});

    try {
        const user = await User.findOne( {username} );

        if (!user) return res(400).json({ message: "Invalid credentials"});


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res(400).json({ message: "Invalid credentials"});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn : '1h'});
        res.json({ message: "Login Success!", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}

export default userLogin;