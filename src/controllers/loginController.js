import mongoose from "mongoose";
import { UserSchema } from "../models/userModel.js";

const User = mongoose.model('User', UserSchema);

const userLogin = (req, res) => {
    
    User.find({
        username: req.body.username,
        password:req.body.password
    }).then((result) => {
        let response = {
            "status": "Success",
            "message": "Login Successful",
            "data": {
                username: result.username,
                email: result.email,
                session: result.session,  
            }
        }
        console.log(response);
        res.status(200).send(response);
    }).catch((err) => {
        let loginError = {
            reason: err,
            message: 'User Not Found'
        }
        res.status(401).send(loginError);
        console.log(err);
    });
}

export default userLogin;