import mongoose from "mongoose";
import { UserSchema } from "../models/userModel.js";

const User = mongoose.model('User', UserSchema);

const registerUser = (req, res) => {

   /** TODO(Create User registration here_) */
   // 1 Verify User information from DB
   // 2. return existing user message if user is existing in DB
   // 3. if user is not found. proceed in inserting NEW user info into DB
   // 4. return 200 response as user is newly created
   let checkUser =  User.find({
        username: req.body.username,
        password:req.body.password
    }).then((result) => {
        let response = {
            "status": "User already existing",
            "message": "Please create a new user",
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




export default registerUser;