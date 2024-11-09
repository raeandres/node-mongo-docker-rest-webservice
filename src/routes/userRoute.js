import userLogin from "../controllers/loginController.js";
import registerUser from "../controllers/registrationController.js";


const routes = (app) => {

    const testCredential = {
        username: "test",
        password: "password"
    }

    app.route('/login')
        .post((req,res, next) => {
            if(req.body.username == testCredential.username) {
                // this is mock. return success to client
                res.status(200).send("Success!");
            } else {
                userLogin(req, res);
            }
        }, (req, res) => {
            res.send('Post request from login endpoint!');
        });


    app.route('/registration')
        .post((req,res,next) => {

            // 1. Lookup first from DB if there's an existing user
            if(req.body.username == testCredential.username) {
                // mock user, already existing
                res.status(200).send("User already existing!");
            } else {
              // 2. Create user
                registerUser(req,res);
            // 2.1 Verify User information format
            }

        }, (req, res) => {
            res.send('Post request from register endpoint!');
        });
}

export default routes;