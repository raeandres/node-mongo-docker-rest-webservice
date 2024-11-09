import mongoose from "mongoose";
import { LoginSchema } from "../models/loginModel.js";

const Login = mongoose.model('Login', LoginSchema);

const userLogin = (req, res) => {
    
    Login.find({
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